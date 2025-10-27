import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const { data, error } = await supabaseAdmin
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, slug, excerpt, content, image_url, category, author, published } = body;

    const { data, error } = await supabaseAdmin
      .from('blogs')
      .insert([
        {
          title,
          slug,
          excerpt,
          content,
          image_url,
          category,
          author,
          published,
          published_at: published ? new Date().toISOString() : null,
        }
      ])
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, title, slug, excerpt, content, image_url, category, author, published } = body;

    const { data, error } = await supabaseAdmin
      .from('blogs')
      .update({
        title,
        slug,
        excerpt,
        content,
        image_url,
        category,
        author,
        published,
        published_at: published ? new Date().toISOString() : null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'ID gerekli' }, { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from('blogs')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

