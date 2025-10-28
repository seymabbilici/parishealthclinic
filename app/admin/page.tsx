'use client';

import { useState, useEffect } from 'react';
import { Lock, FileText, Users, Mail, Plus, Edit, Trash2, Eye, Image as ImageIcon } from 'lucide-react';
import { supabase, supabaseAdmin } from '@/lib/supabase';
import BlogForm from '@/components/admin/BlogForm';
import SimpleImageManager from '@/components/admin/SimpleImageManager';

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('pages');
  const [blogs, setBlogs] = useState<any[]>([]);
  const [doctors, setDoctors] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<any>(null);
  const [selectedPage, setSelectedPage] = useState<any>(null);

  // Pages that need image management
  const pages = [
    { path: '/', name: 'Ana Sayfa', images: { hero: '', services: '', testimonials: '' } },
    { path: '/yuz-estetigi/rhinoplasty', name: 'Burun Estetiği', images: { main: '', process: '', results: '' } },
    { path: '/yuz-estetigi/face-lift', name: 'Yüz Germe', images: { main: '', process: '', results: '' } },
    { path: '/yuz-estetigi/blepharoplasty', name: 'Göz Kapağı', images: { main: '', process: '', results: '' } },
    { path: '/gogus-estetigi/gogus-buyutme', name: 'Göğüs Büyütme', images: { main: '', process: '', results: '' } },
    { path: '/vucut-estetigi/liposuction', name: 'Liposuction', images: { main: '', process: '', results: '' } },
    { path: '/vucut-estetigi/tummy-tuck', name: 'Karın Germe', images: { main: '', process: '', results: '' } },
    { path: '/sac-ekimi/fue', name: 'FUE Saç Ekimi', images: { main: '', process: '', results: '' } },
    { path: '/dis-estetigi/hollywood-smile', name: 'Hollywood Smile', images: { main: '', process: '', results: '' } },
  ];

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (username === 'seyma' && password === 'gunes123') {
        const sessionToken = `admin_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem('admin_token', sessionToken);
        setIsAuthenticated(true);
        await loadData();
      } else {
        setError('Kullanıcı adı veya şifre hatalı');
      }
    } catch (error) {
      setError('Giriş yapılırken bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsAuthenticated(false);
  };

  const loadData = async () => {
    // Load data from Supabase
    // Implementation here
  };

  const handlePageImageSave = async (page: any, images: Record<string, string>) => {
    // Save images to database
    console.log('Saving images for page:', page.path, images);
    // TODO: Implement API call to save images
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="bg-purple-clinic w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Girişi</h1>
            <p className="text-gray-600 mt-2">Paris Health Clinic</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {loading && (
              <div className="bg-blue-50 text-blue-600 px-4 py-3 rounded-xl text-sm text-center">
                Giriş yapılıyor...
              </div>
            )}
            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm text-center">
                {error}
              </div>
            )}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Kullanıcı Adı
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-clinic focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Şifre
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-clinic focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-clinic text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-gray-600">Paris Health Clinic Yönetim Sistemi</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Çıkış Yap
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex space-x-4 border-b border-gray-200">
          {[
            { id: 'pages', name: 'Sayfa Görselleri', icon: ImageIcon },
            { id: 'blogs', name: 'Blog', icon: FileText },
            { id: 'doctors', name: 'Doktorlar', icon: Users },
            { id: 'messages', name: 'Mesajlar', icon: Mail },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'text-purple-clinic border-b-2 border-purple-clinic'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="mt-8">
          {activeTab === 'pages' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sayfa Görselleri</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pages.map((page) => (
                  <div key={page.path} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-gray-900">{page.name}</h3>
                        <p className="text-sm text-gray-600">{page.path}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedPage(page)}
                      className="w-full bg-purple-clinic text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center justify-center gap-2"
                    >
                      <ImageIcon className="w-5 h-5" />
                      Görselleri Düzenle
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {selectedPage && (
        <SimpleImageManager
          pagePath={selectedPage.path}
          images={selectedPage.images}
          onSave={async (images) => {
            await handlePageImageSave(selectedPage, images);
            setSelectedPage(null);
          }}
          onClose={() => setSelectedPage(null)}
        />
      )}
    </div>
  );
}
