import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { SERVICES } from "./src/lib/static-data";

export default defineConfig(() => ({
  server: {
    host: true,
    port: 8080,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    // Keep a single copy of React/React Query in the graph — TanStack Start's
    // server + client bundles can otherwise resolve two different copies and
    // break hooks (invalid hook call) or React Query's cache identity.
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-dom/client",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
    ],
  },
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      // The site has no backend: every route reads from static-data.ts
      // instead of calling a server function. SPA mode drops all server
      // rendering/server functions, and — combined with `prerender` — still
      // bakes each route into its own static HTML file (so SEO/social-share
      // tags stay intact) via crawling <Link> anchors from the nav/list
      // pages, instead of falling back to a single client-only shell.
      // Plain `prerender` (not `spa.enabled`) — every route on this site is
      // known ahead of time (no user-generated/dynamic paths), so there's no
      // need for SPA mode's client-only fallback shell for "unknown" URLs.
      // (`spa.enabled` was tried first: it pushes a synthetic shell page at
      // `spa.maskPath`, which defaults to "/" and silently steals the home
      // route — the shell becomes the only output for "/" and the real
      // homepage content never reaches a servable file. Any other maskPath
      // 404s during prerender because nothing in the route tree matches
      // it. Not needed here anyway since there's no unmapped-path case to
      // fall back for.)
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoStaticPathsDiscovery: true,
      },
      pages: [
        // Not link-crawled (it's a raw XML handler, not a page with
        // <Link>s to it) — list it explicitly so it's baked into a file.
        { path: "/sitemap.xml" },
        // /services (the list page) only links each card to /contact, not
        // to its own /services/$slug detail page — so nothing in the
        // crawlable link graph ever points at these. They're still in
        // sitemap.xml for search engines, but crawlLinks alone would never
        // generate the actual static files for them, so list them
        // explicitly here too.
        ...SERVICES.map((s) => ({ path: `/services/${s.slug}` })),
      ],
    }),
    viteReact(),
  ],
}));
