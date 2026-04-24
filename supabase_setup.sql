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

-- 2. HELPER FUNCTIONS
CREATE OR REPLACE FUNCTION increment_views(post_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE posts
  SET views = views + 1
  WHERE id = post_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
