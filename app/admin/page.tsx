'use client';

import { useState, useEffect } from 'react';
import { Lock, FileText, Users, Mail, Plus, Edit, Trash2, Eye } from 'lucide-react';
import { supabase, supabaseAdmin } from '@/lib/supabase';
import BlogForm from '@/components/admin/BlogForm';

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('blogs');
  const [blogs, setBlogs] = useState<any[]>([]);
  const [doctors, setDoctors] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<any>(null);

  useEffect(() => {
    // Check auth on mount
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
      // Simple hardcoded check for admin
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

  const loadData = async () => {
    try {
      // Load blogs
      const { data: blogsData, error: blogsError } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (blogsError) console.log('Blogs error:', blogsError);
      setBlogs(blogsData || []);

      // Load doctors
      const { data: doctorsData, error: doctorsError } = await supabase
        .from('doctors')
        .select('*')
        .order('order_index');
      
      if (doctorsError) console.log('Doctors error:', doctorsError);
      setDoctors(doctorsData || []);

      // Load messages
      const { data: messagesData, error: messagesError } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);
      
      if (messagesError) console.log('Messages error:', messagesError);
      setMessages(messagesData || []);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
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

            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-purple-clinic text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
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
          {activeTab === 'blogs' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Blog Yazıları</h2>
                <button 
                  onClick={() => {
                    setEditingBlog(null);
                    setShowBlogForm(true);
                  }}
                  className="bg-purple-clinic text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors flex items-center space-x-2"
                >
                  <Plus className="w-5 h-5" />
                  <span>Yeni Blog</span>
                </button>
              </div>
              {showBlogForm && (
                <BlogForm
                  editData={editingBlog}
                  onClose={() => {
                    setShowBlogForm(false);
                    setEditingBlog(null);
                  }}
                  onSuccess={() => {
                    loadData();
                    setShowBlogForm(false);
                    setEditingBlog(null);
                  }}
                />
              )}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Başlık</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Kategori</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Durum</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Tarih</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">İşlemler</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {blogs.map((blog) => (
                      <tr key={blog.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">{blog.title}</td>
                        <td className="px-6 py-4 text-gray-600">{blog.category}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            blog.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {blog.published ? 'Yayında' : 'Taslak'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {new Date(blog.created_at).toLocaleDateString('tr-TR')}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <button 
                              onClick={() => {
                                setEditingBlog(blog);
                                setShowBlogForm(true);
                              }}
                              className="text-purple-clinic hover:text-purple-700"
                            >
                              <Edit className="w-5 h-5" />
                            </button>
                            <button 
                              onClick={async () => {
                                if (confirm('Bu blog yazısını silmek istediğinize emin misiniz?')) {
                                  await supabaseAdmin
                                    .from('blogs')
                                    .delete()
                                    .eq('id', blog.id);
                                  loadData();
                                }
                              }}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'doctors' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Doktorlar</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {doctors.map((doctor) => (
                  <div key={doctor.id} className="bg-white rounded-2xl p-6 shadow-lg">
                    <img src={doctor.image_url} alt={doctor.name} className="w-full h-48 object-cover rounded-xl mb-4" />
                    <h3 className="font-bold text-gray-900">{doctor.name}</h3>
                    <p className="text-purple-clinic font-semibold">{doctor.specialty}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">İletişim Mesajları</h2>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-gray-900">{message.name}</h3>
                        <p className="text-gray-600">{message.email}</p>
                        <p className="text-gray-600">{message.phone}</p>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(message.created_at).toLocaleString('tr-TR')}
                      </span>
                    </div>
                    <p className="text-gray-700">{message.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

