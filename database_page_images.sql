-- Page Images table for managing images per page
CREATE TABLE IF NOT EXISTS page_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  page_path VARCHAR(200) NOT NULL,
  image_key VARCHAR(100) NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(page_path, image_key)
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_page_images_path ON page_images(page_path);
CREATE INDEX IF NOT EXISTS idx_page_images_key ON page_images(image_key);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_page_images_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_page_images_updated_at_trigger 
BEFORE UPDATE ON page_images
FOR EACH ROW EXECUTE FUNCTION update_page_images_updated_at();

-- Storage bucket (run this in Supabase Storage)
-- 1. Go to Storage in Supabase dashboard
-- 2. Create new bucket named 'website-images'
-- 3. Make it public

