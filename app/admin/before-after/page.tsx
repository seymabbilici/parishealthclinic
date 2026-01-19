'use client';

import { useEffect, useState } from 'react';

type BeforeAfterItem = {
  id: number;
  title: string;
  category: string;
  before: string;
  after: string;
};

export default function AdminBeforeAfterPage() {
  const [items, setItems] = useState<BeforeAfterItem[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch('/api/before-after')
      .then((r) => r.json())
      .then((data) => setItems(data));
  }, []);

  const addItem = () => {
    const nextId = (items[items.length - 1]?.id || 0) + 1;
    setItems([
      ...items,
      { id: nextId, title: '', category: '', before: '', after: '' },
    ]);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((i) => i.id !== id));
  };

  const save = async () => {
    setSaving(true);
    await fetch('/api/before-after', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(items),
    });
    setSaving(false);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Öncesi/Sonrası Yönetimi</h1>
      <div className="space-y-6">
        {items.map((item, idx) => (
          <div key={item.id} className="p-4 border rounded-lg space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium">Başlık</span>
                <input
                  className="mt-1 w-full border rounded-md px-3 py-2"
                  value={item.title}
                  onChange={(e) => {
                    const next = [...items];
                    next[idx] = { ...next[idx], title: e.target.value };
                    setItems(next);
                  }}
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Kategori</span>
                <input
                  className="mt-1 w-full border rounded-md px-3 py-2"
                  value={item.category}
                  onChange={(e) => {
                    const next = [...items];
                    next[idx] = { ...next[idx], category: e.target.value };
                    setItems(next);
                  }}
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Before (URL)</span>
                <input
                  className="mt-1 w-full border rounded-md px-3 py-2"
                  value={item.before}
                  onChange={(e) => {
                    const next = [...items];
                    next[idx] = { ...next[idx], before: e.target.value };
                    setItems(next);
                  }}
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">After (URL)</span>
                <input
                  className="mt-1 w-full border rounded-md px-3 py-2"
                  value={item.after}
                  onChange={(e) => {
                    const next = [...items];
                    next[idx] = { ...next[idx], after: e.target.value };
                    setItems(next);
                  }}
                />
              </label>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">ID: {item.id}</span>
              <button
                className="text-red-600 hover:underline"
                onClick={() => removeItem(item.id)}
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 mt-6">
        <button
          className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
          onClick={addItem}
        >
          Yeni Ekle
        </button>
        <button
          className="px-4 py-2 rounded-md bg-purple-clinic text-white hover:opacity-90"
          onClick={save}
          disabled={saving}
        >
          {saving ? 'Kaydediliyor...' : 'Kaydet'}
        </button>
      </div>
    </div>
  );
}


