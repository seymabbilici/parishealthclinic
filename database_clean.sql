-- ÖNCE MEVCUT TRIGGER'I KALDIR
DROP TRIGGER IF EXISTS update_page_images_updated_at_trigger ON page_images;

-- Sonra trigger fonksiyonunu yeniden oluştur
CREATE OR REPLACE FUNCTION update_page_images_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger'ı tekrar oluştur
CREATE TRIGGER update_page_images_updated_at_trigger 
BEFORE UPDATE ON page_images
FOR EACH ROW EXECUTE FUNCTION update_page_images_updated_at();

