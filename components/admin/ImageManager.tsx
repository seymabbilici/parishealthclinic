'use client';

import { useState, useEffect } from 'react';
import { UploadButton } from '@/lib/uploadthing';
import { X, Plus, Save } from 'lucide-react';

interface Image {
  id: string;
  page_type: string;
  page_slug: string;
  image_key: string;
  image_url: string;
  description?: string;
  order_index: number;
}

interface ImageManagerProps {
  pageType: string;
  pageSlug: string;
}

export default function ImageManager({ pageType, pageSlug }: ImageManagerProps) {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    imageKey: '',
    imageUrl: '',
    description: '',
    orderIndex: 0,
  });

  useEffect(() => {
    fetchImages();
  }, [pageType, pageSlug]);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/images?pageType=${pageType}&pageSlug=${pageSlug}`);
      const result = await response.json();
      if (result.success) {
        setImages(result.data || []);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUploadComplete = (files: { url: string }[]) => {
    if (files && files.length > 0) {
      setFormData({ ...formData, imageUrl: files[0].url });
    }
  };

  const handleSave = async () => {
    try {
      const response = await fetch('/api/admin/images', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pageType,
          pageSlug,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setShowAddForm(false);
        setFormData({ imageKey: '', imageUrl: '', description: '', orderIndex: 0 });
        fetchImages();
      }
    } catch (error) {
      console.error('Error saving image:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bu görseli silmek istediğinize emin misiniz?')) return;

    try {
      const response = await fetch(`/api/admin/images?id=${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();
      if (result.success) {
        fetchImages();
      }
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Yükleniyor...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Görseller</h3>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 bg-purple-clinic text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          <Plus className="w-4 h-4" />
          Yeni Görsel Ekle
        </button>
      </div>

      {showAddForm && (
        <div className="border rounded-lg p-6 space-y-4 bg-white">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">Yeni Görsel</h4>
            <button
              onClick={() => setShowAddForm(false)}
              className="text color-gray-500 hover:text-red-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Görsel Key</label>
            <input
              type="text"
              value={formData.imageKey}
              onChange={(e) => setFormData({ ...formData, imageKey: e.target.value })}
              placeholder="e.g., main-image, hero-bg"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Görsel Yükle</label>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={handleUploadComplete}
              onUploadError={(error: Error) => {
                alert(`Upload error: ${error.message}`);
              }}
            />
            {formData.imageUrl && (
              <div className="mt-2">
                <img src={formData.imageUrl} alt="Preview" className="w-32 h-32 object-cover rounded" />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Açıklama</label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Sıra</label>
            <input
              type="number"
              value={formData.orderIndex}
              onChange={(e) => setFormData({ ...formData, orderIndex: parseInt(e.target.value) })}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <button
            onClick={handleSave}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            <Save className="w-4 h-4" />
            Kaydet
          </button>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="border rounded-lg overflow-hidden">
            <img src={image.image_url} alt={image.description || image.image_key} className="w-full h-32 object-cover" />
            <div className="p-3 space-y-1">
              <p className="font-semibold text-sm">{image.image_key}</p>
              {image.description && <p className="text-xs text-gray-600">{image.description}</p>}
              <button
                onClick={() => handleDelete(image.id)}
                className="w-full mt-2 bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600"
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>

      {images.length === 0 && !showAddForm && (
        <p className="text-center text-gray-500 py-8">Henüz görsel eklenmemiş</p>
      )}
    </div>
  );
}

