-- Images table for managing page images
CREATE TABLE IF NOT EXISTS images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  page_type VARCHAR(100) NOT NULL, -- e.g., 'hero', 'service', 'blog', 'doctor', etc.
  page_slug VARCHAR(200) NOT NULL, -- e.g., 'rhinoplasty', 'home', 'doctor-1', etc.
  image_key VARCHAR(200) NOT NULL, -- e.g., 'main-image', 'before', 'after', 'profile'
  image_url TEXT NOT NULL,
  description TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(page_type, page_slug, image_key)
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_images_page ON images(page_type, page_slug);
CREATE INDEX IF NOT EXISTS idx_images_key ON images(image_key);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_images_updated_at BEFORE UPDATE ON images
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert default images (optional - you can add sample data here)
-- INSERT INTO images (page_type, page_slug, image_key, image_url, description) VALUES
-- ('hero', 'home', 'main-image', 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&h=600&fit=crop', 'Home page hero image'),
-- ('service', 'rhinoplasty', 'main-image', 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=800&h=600', 'Rhinoplasty main image');

