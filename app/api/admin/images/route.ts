'use server';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const pageType = searchParams.get('pageType');
    const pageSlug = searchParams.get('pageSlug');

    let query = supabase.from('images').select('*');

    if (pageType) query = query.eq('page_type', pageType);
    if (pageSlug) query = query.eq('page_slug', pageSlug);

    query = query.order('order_index', { ascending: true });

    const { data, error } = await query;

    if (error) throw error;

    return Response.json({ success: true, data });
  } catch (error: any) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { pageType, pageSlug, imageKey, imageUrl, description, orderIndex } = body;

    const { data, error } = await supabase
      .from('images')
      .upsert({
        page_type: pageType,
        page_slug: pageSlug,
        image_key: imageKey,
        image_url: imageUrl,
        description: description || null,
        order_index: orderIndex || 0,
        updated_at: new Date().toISOString(),
      }, {
        onConflict: 'page_type,page_slug,image_key'
      })
      .select()
      .single();

    if (error) throw error;

    return Response.json({ success: true, data });
  } catch (error: any) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return Response.json({ success: false, error: 'ID is required' }, { status: 400 });
    }

    const { error } = await supabase
      .from('images')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return Response.json({ success: true });
  } catch (error: any) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

