'use server';

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export async function POST(request: NextRequest) {
  try {
    const { pagePath, images } = await request.json();

    if (!pagePath || !images) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Delete old images for this page
    await supabase
      .from('page_images')
      .delete()
      .eq('page_path', pagePath);

    // Insert new images
    const imagesToInsert = Object.entries(images).map(([key, url]: [string, any]) => ({
      page_path: pagePath,
      image_key: key,
      image_url: url,
    }));

    const { error } = await supabase
      .from('page_images')
      .insert(imagesToInsert);

    if (error) {
      throw error;
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error saving images:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const pagePath = searchParams.get('pagePath');

    const supabase = createClient(supabaseUrl, supabaseKey);

    let query = supabase.from('page_images').select('*');

    if (pagePath) {
      query = query.eq('page_path', pagePath);
    }

    const { data, error } = await query;

    if (error) throw error;

    // Convert array to object
    const imagesObject: Record<string, string> = {};
    data?.forEach((img) => {
      imagesObject[img.image_key] = img.image_url;
    });

    return NextResponse.json({ images: imagesObject });
  } catch (error: any) {
    console.error('Error fetching images:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

