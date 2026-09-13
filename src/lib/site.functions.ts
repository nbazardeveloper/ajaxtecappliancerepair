// Public content reads. The site has no backend/database — everything here
// is a synchronous lookup over the frozen content in static-data.ts. These
// stay `async` (returning already-resolved values) only so every call site
// (route loaders written for the old Supabase-backed version) keeps working
// unchanged with `await`/React Query.
import { SITE_SETTINGS, SERVICES, PROJECTS, BLOG_POSTS } from "./static-data";
import type { SiteSettings, Service, Project, BlogPost } from "./static-data";

export type { SiteSettings, Service, Project, BlogPost };

export async function getSiteSettings(): Promise<SiteSettings> {
  return SITE_SETTINGS;
}

export async function listServices(): Promise<Service[]> {
  return SERVICES.filter((s) => s.is_published).sort((a, b) => a.sort_order - b.sort_order);
}

export async function listFeaturedServices(): Promise<Service[]> {
  return SERVICES.filter((s) => s.is_published && s.is_featured).sort(
    (a, b) => a.sort_order - b.sort_order,
  );
}

export async function getServiceBySlug({
  data,
}: {
  data: { slug: string };
}): Promise<Service | null> {
  return SERVICES.find((s) => s.slug === data.slug && s.is_published) ?? null;
}

export async function listProjects(): Promise<Project[]> {
  return PROJECTS.filter((p) => p.is_published).sort((a, b) =>
    a.created_at < b.created_at ? 1 : -1,
  );
}

export async function listFeaturedProjects(): Promise<Project[]> {
  return (await listProjects()).slice(0, 3);
}

export async function listBlogPosts(): Promise<BlogPost[]> {
  return BLOG_POSTS.filter((p) => p.is_published).sort((a, b) =>
    a.published_at < b.published_at ? 1 : -1,
  );
}

export async function getBlogPostBySlug({
  data,
}: {
  data: { slug: string };
}): Promise<BlogPost | null> {
  return BLOG_POSTS.find((p) => p.slug === data.slug && p.is_published) ?? null;
}
