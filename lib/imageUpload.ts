export interface UploadedImage {
  url: string;
  name: string;
}

export const uploadImageToSupabase = async (file: File, folder: string = 'images'): Promise<UploadedImage> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', folder);

    const response = await fetch('/api/upload-image', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export const deleteImageFromSupabase = async (url: string): Promise<void> => {
  try {
    const response = await fetch('/api/delete-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      throw new Error('Delete failed');
    }
  } catch (error) {
    console.error('Error deleting image:', error);
    throw error;
  }
};

