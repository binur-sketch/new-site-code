-- # COMPLETE SUPABASE SETUP SQL
-- Copy and paste this into your SQL EDITOR in Supabase.

-- 1. CREATE TABLES
CREATE TABLE posts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text,
  body text,
  body_html text,
  status text DEFAULT 'draft',
  author text DEFAULT 'VSDox Team',
  author_role text,
  image text,
  views int DEFAULT 0,
  reading_time int DEFAULT 0,
  published_at timestamp with time zone,
  scheduled_at timestamp with time zone,
  scheduled_at_local text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

CREATE TABLE categories (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  slug text UNIQUE NOT NULL
);

CREATE TABLE tags (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  slug text UNIQUE NOT NULL
);

CREATE TABLE post_categories (
  post_id uuid REFERENCES posts(id) ON DELETE CASCADE,
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, category_id)
);

CREATE TABLE post_tags (
  post_id uuid REFERENCES posts(id) ON DELETE CASCADE,
  tag_id uuid REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

CREATE TABLE media (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  filename text NOT NULL,
  url text NOT NULL,
  file_type text,
  size int,
  alt_text text,
  uploaded_at timestamp with time zone DEFAULT now()
);

-- 2. ENABLE PUBLIC ACCESS (FOR NOW)
-- This allows the frontend to fetch blogs without complex RLS setup initially.
-- You can enable RLS later for more security.

-- 3. STORAGE SETUP
-- Please follow these manual steps in Supabase Dashboard:
-- 1. Go to 'Storage' in the sidebar.
-- 2. Click 'New Bucket' and name it 'media'.
-- 3. IMPORTANT: Make sure the 'Public' toggle is ON.
-- 4. In the 'Policies' tab for the media bucket, add a policy to 'Allow anonymous access' for SELECT.
-- 5. Add a policy for 'Authenticated access' for ALL (INSERT, UPDATE, DELETE).
