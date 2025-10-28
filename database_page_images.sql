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

-- Drop trigger if exists before creating
DROP TRIGGER IF EXISTS update_page_images_updated_at_trigger ON page_images;

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

-- Storage bucket için talimatlar:
-- 1. Supabase Dashboard → Storage
-- 2. "Create bucket" → Bucket name: "website-images"  
-- 3. ✅ Public bucket seçeneğini işaretle
-- 4. File size limit: 4MB
-- 5. "Create bucket" tıkla
