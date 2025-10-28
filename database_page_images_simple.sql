-- Basit Page Images table (trigger'sız)
CREATE TABLE IF NOT EXISTS page_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  page_path VARCHAR(200) NOT NULL,
  image_key VARCHAR(100) NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(page_path, image_key)
);

-- Indexleri oluştur
CREATE INDEX IF NOT EXISTS idx_page_images_path ON page_images(page_path);
CREATE INDEX IF NOT EXISTS idx_page_images_key ON page_images(image_key);

-- ÖNEMLİ: Storage bucket oluşturmayı unutma!
-- Supabase Dashboard → Storage → Create bucket → "website-images" → Public ✅

