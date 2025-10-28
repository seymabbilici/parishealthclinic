# Supabase Kurulum Adımları

## 1. Supabase Storage Bucket Oluştur

### Adımlar:
1. https://supabase.com/dashboard adresine git
2. Projeni seç: `cycuhijpwznrxrlqjlwq`
3. Sol menüden **Storage** seçeneğine tıkla
4. **Create bucket** butonuna tıkla
5. Formu doldur:
   - **Bucket name:** `website-images`
   - **Public bucket:** ✅ İşaretle (ÇOK ÖNEMLİ!)
   - **File size limit:** 4MB
   - **Allowed MIME types:** (boş bırakabilirsin)
6. **Create bucket** butonuna tıkla

## 2. Database Table Oluştur

### Adımlar:
1. Sol menüden **SQL Editor** seç
2. **New query** tıkla
3. `database_page_images.sql` dosyasındaki SQL kodunu kopyala
4. Yapıştır ve **Run** tıkla

## 3. Test Et

1. Admin paneline git: `http://localhost:3000/admin`
2. Kullanıcı adı: `seyma`, Şifre: `gunes123`
3. **Sayfa Görselleri** sekmesine tıkla
4. Herhangi bir sayfa seç (örn: Ana Sayfa)
5. **Görselleri Düzenle** butonuna tıkla
6. **Görsel Yükle** butonuna tıkla
7. Bir resim seç
8. **Kaydet** butonuna tıkla

## Hata Durumunda

Eğer hata alırsan:
1. Console'u kontrol et (F12)
2. Hata mesajını oku
3. Supabase Storage bucket'ın **public** olduğundan emin ol
4. Database table'ın oluşturulduğundan emin ol

