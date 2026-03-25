-- # FIX FOR RLS ERROR (Row-Level Security)
-- Copy and paste this into your SQL EDITOR in Supabase to fix the image upload error.

-- 1. ENABLE RLS (Required for policies to work)
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;

-- 2. POLICIES FOR 'media' TABLE (The fix for your current error)
CREATE POLICY "Enable insert for authenticated users only" ON "public"."media"
FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable select for everyone" ON "public"."media"
FOR SELECT USING (true);

CREATE POLICY "Enable all for authenticated" ON "public"."media"
FOR ALL USING (auth.role() = 'authenticated');

-- 3. POLICIES FOR 'posts' TABLE
CREATE POLICY "Allow public read posts" ON posts FOR SELECT USING (status = 'published');
CREATE POLICY "Allow admins all posts" ON posts FOR ALL USING (auth.role() = 'authenticated');

-- 4. POLICIES FOR OTHER TABLES
CREATE POLICY "Allow public read categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Allow admin manage categories" ON categories FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow public read tags" ON tags FOR SELECT USING (true);
CREATE POLICY "Allow admin manage tags" ON tags FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow admin manage associations" ON post_categories FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow admin manage associations tags" ON post_tags FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow anyone read associations" ON post_categories FOR SELECT USING (true);
CREATE POLICY "Allow anyone read associations tags" ON post_tags FOR SELECT USING (true);

-- 5. STORAGE BUCKET POLICIES (Just in case they are missing)
-- Make sure a bucket named 'media' exists in the Storage tab.
INSERT INTO storage.buckets (id, name, public) 
VALUES ('media', 'media', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Allow public read access to media bucket
CREATE POLICY "Public Read Media" ON storage.objects FOR SELECT USING (bucket_id = 'media');

-- Allow authenticated users to upload/manage media bucket
CREATE POLICY "Admin Manage Media" ON storage.objects FOR ALL 
USING (bucket_id = 'media' AND auth.role() = 'authenticated')
WITH CHECK (bucket_id = 'media' AND auth.role() = 'authenticated');
