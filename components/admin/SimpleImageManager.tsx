'use client';

import { useState } from 'react';
import { UploadButton } from '@/lib/uploadthing';
import { Save, X, Image as ImageIcon } from 'lucide-react';

interface SimpleImageManagerProps {
  pagePath: string;
  images: Record<string, string>;
  onSave: (images: Record<string, string>) => Promise<void>;
  onClose: () => void;
}

export default function SimpleImageManager({ pagePath, images, onSave, onClose }: SimpleImageManagerProps) {
  const [localImages, setLocalImages] = useState<Record<string, string>>(images);
  const [saving, setSaving] = useState(false);

  const handleImageUpload = (key: string) => (files: { url: string }[]) => {
    if (files && files.length > 0) {
      setLocalImages({ ...localImages, [key]: files[0].url });
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSave(localImages);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Görselleri Düzenle</h2>
            <p className="text-gray-600">{pagePath}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-red-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(localImages).map(([key, value]) => (
            <div key={key} className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700 capitalize">
                {key.replace(/-/g, ' ')}
              </label>
              
              {value && (
                <div className="relative rounded-lg overflow-hidden border-2 border-gray-200 mb-2">
                  <img 
                    src={value} 
                    alt={key} 
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}

              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={handleImageUpload(key)}
                onUploadError={(error: Error) => {
                  alert(`Upload error: ${error.message}`);
                }}
                appearance={{
                  button: ({ ready }) => ({
                    backgroundColor: "#8B5CF6",
                    borderRadius: "0.5rem",
                    fontSize: "0.875rem",
                    width: "100%",
                    cursor: ready ? "pointer" : "not-allowed",
                  }),
                  allowedContent: {
                    color: "#6B7280",
                  },
                }}
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 p-6 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            İptal
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2 bg-purple-clinic text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
          >
            <Save className="w-5 h-5" />
            {saving ? 'Kaydediliyor...' : 'Kaydet'}
          </button>
        </div>
      </div>
    </div>
  );
}

