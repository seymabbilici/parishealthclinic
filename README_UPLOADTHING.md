# Uploadthing Kurulum Talimatları

## 1. Uploadthing Hesabı Oluştur
1. https://uploadthing.com/ adresine git
2. "Get Started" butonuna tıkla
3. GitHub hesabınla giriş yap
4. Yeni bir app oluştur

## 2. API Keys Alma
1. Dashboard'da app'ini seç
2. "Keys" bölümüne git
3. Şu keyleri kopyala:
   - `UPLOADTHING_SECRET`
   - `UPLOADTHING_APP_ID`

## 3. Environment Variables Ayarla
`.env.local` dosyanı aç ve ekle:
```
UPLOADTHING_SECRET=ut_secret_xxxx
UPLOADTHING_APP_ID=app_xxxx
```

## 4. Supabase SQL Çalıştır
`database_images.sql` dosyasını Supabase SQL Editor'de çalıştır.

## 5. Admin Panel Kullanımı
1. Admin paneline git: `/admin`
2. Giriş yap (username: seyma, password: gunes123)
3. "Görseller" tab'ına tıkla
4. Sayfa tipi ve slug seç (örn: service, rhinoplasty)
5. "Yeni Görsel Ekle" butonuna tıkla
6. Görsel yükle ve kaydet

## 6. Görsel Kullanımı
Görseller otomatik olarak database'den çekilir. Frontend'de dilediğin yerden API ile çekebilirsin:
```
GET /api/admin/images?pageType=service&pageSlug=rhinoplasty
```

