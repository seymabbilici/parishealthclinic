'use client';

import { useState } from 'react';
import { supabaseAdmin } from '@/lib/supabase';
import { X } from 'lucide-react';

interface BlogFormProps {
  onClose: () => void;
  onSuccess: () => void;
  editData?: any;
}

export default function BlogForm({ onClose, onSuccess, editData }: BlogFormProps) {
  const [formData, setFormData] = useState({
    title: editData?.title || '',
    slug: editData?.slug || '',
    excerpt: editData?.excerpt || '',
    content: editData?.content || '',
    image_url: editData?.image_url || '',
    category: editData?.category || '',
    author: editData?.author || '',
    published: editData?.published || false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editData) {
        // Update existing blog
        const { error } = await supabaseAdmin
          .from('blogs')
          .update({
            ...formData,
            updated_at: new Date().toISOString(),
          })
          .eq('id', editData.id);

        if (error) throw error;
      } else {
        // Insert new blog
        const { error } = await supabaseAdmin
          .from('blogs')
          .insert([formData]);

        if (error) throw error;
      }

      onSuccess();
      onClose();
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Blog kaydedilirken bir hata oluştu');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            {editData ? 'Blog Düzenle' : 'Yeni Blog Ekle'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Başlık *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-clinic focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Slug *
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({...formData, slug: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-clinic focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Kategori
              </label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-clinic focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Yazar
              </label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({...formData, author: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-clinic focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Özet
            </label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-clinic focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Görsel URL
            </label>
            <input
              type="url"
              value={formData.image_url}
              onChange={(e) => setFormData({...formData, image_url: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-clinic focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              İçerik *
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              rows={12}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-clinic focus:border-transparent font-mono text-sm"
              required
            />
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.published}
              onChange={(e) => setFormData({...formData, published: e.target.checked})}
              className="w-5 h-5 rounded border-gray-300"
            />
            <label className="font-semibold text-gray-700">Yayınla</label>
          </div>

          <div className="flex space-x-4 pt-6">
            <button
              type="submit"
              className="flex-1 bg-purple-clinic text-white py-4 rounded-xl font-bold hover:bg-purple-700 transition-colors"
            >
              {editData ? 'Güncelle' : 'Kaydet'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-4 border border-gray-300 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              İptal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

