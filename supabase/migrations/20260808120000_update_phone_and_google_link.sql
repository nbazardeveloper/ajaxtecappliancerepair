-- Update phone number and Google reviews link to point to the correct
-- AjaxTec Appliance Repair Google Business Profile (Newtown, PA listing),
-- sync the review rating/count shown on the site to match that profile
-- (4.9 stars, 88 reviews), and fix diagnostic_fee copy that referenced
-- "Manhattan" — a city outside this business's actual NJ/PA service area
-- (leftover from a template/donor business's data).
UPDATE public.site_settings
SET
  phone = '+1 (267) 699-2599',
  social_links = (social_links - 'yelp') || '{"google_reviews":"https://www.google.com/maps/place/AjaxTec+Appliance+Repair/@40.2339745,-75.0458739,17z/data=!4m8!3m7!1s0x89c6b3c19d3b9243:0x9898463ffa3952c6!8m2!3d40.2339745!4d-75.0458739!9m1!1b1!16s%2Fg%2F11lgxc35kb"}'::jsonb,
  review_rating = 4.9,
  review_count = 88,
  diagnostic_fee = '$95, waived when the repair is completed ($125 in Philadelphia, also waived)'
WHERE id = 1;
