'use client';

import { useState, useEffect, useRef } from 'react';
import { Save, X, Upload, Image as ImageIcon } from 'lucide-react';

interface PageImageManagerProps {
  pagePath: string;
  pageName: string;
  onSave: (images: Record<string, string>) => Promise<void>;
  onClose: () => void;
  imageSlots: string[];
}

export default function PageImageManager({
  pagePath,
  pageName,
  onSave,
  onClose,
  imageSlots,
}: PageImageManagerProps) {
  const [images, setImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState<string | null>(null);

  useEffect(() => {
    loadImages();
  }, [pagePath]);

  const loadImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/save-page-images?pagePath=${encodeURIComponent(pagePath)}`);
      const data = await response.json();
      if (data.images) {
        setImages(data.images);
      }
    } catch (error) {
      console.error('Error loading images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = async (key: string, file: File) => {
    setUploading(key);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', 'pages');

      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      setImages({ ...images, [key]: data.url });
    } catch (error) {
      alert('Görsel yüklenemedi. Lütfen tekrar deneyin.');
      console.error('Upload error:', error);
    } finally {
      setUploading(null);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSave(images);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-8">Yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{pageName}</h2>
            <p className="text-sm text-gray-600">{pagePath}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-red-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {imageSlots.map((slot) => (
            <div key={slot} className="border-2 border-dashed border-gray-300 rounded-xl p-6">
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 capitalize mb-2">
                  {slot.replace(/-/g, ' ')}
                </h3>
                {images[slot] && (
                  <div className="relative rounded-lg overflow-hidden border-2 border-gray-200 mb-4">
                    <img
                      src={images[slot]}
                      alt={slot}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}
                {!images[slot] && !uploading && (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                    <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">Görsel yüklenmedi</p>
                  </div>
                )}
              </div>

              <label className="block">
                <div
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors ${
                    uploading === slot
                      ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                      : 'bg-purple-clinic text-white hover:bg-purple-700 cursor-pointer'
                  }`}
                >
                  {uploading === slot ? (
                    <>
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      Yükleniyor...
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5" />
                      {images[slot] ? 'Değiştir' : 'Görsel Yükle'}
                    </>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      handleFileSelect(slot, file);
                    }
                  }}
                  disabled={uploading === slot}
                />
              </label>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t p-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            disabled={saving || uploading !== null}
            className="px-6 py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            İptal
          </button>
          <button
            onClick={handleSave}
            disabled={saving || uploading !== null}
            className="flex items-center gap-2 px-6 py-3 bg-purple-clinic text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {saving ? (
              <>
                <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                Kaydediliyor...
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                Kaydet
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

