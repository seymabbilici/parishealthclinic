import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export async function GET() {
  try {
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Test database connection
    const { data: dbData, error: dbError } = await supabase
      .from('page_images')
      .select('count')
      .limit(1);
    
    // Test storage connection
    const { data: storageData, error: storageError } = await supabase
      .storage
      .from('website-images')
      .list();
    
    return NextResponse.json({ 
      success: true,
      database: dbError ? `Error: ${dbError.message}` : 'Connected',
      storage: storageError ? `Error: ${storageError.message}` : 'Connected',
      env: {
        hasSupabaseUrl: !!supabaseUrl,
        hasSupabaseKey: !!supabaseKey,
      }
    });
  } catch (error: any) {
    return NextResponse.json({ 
      success: false,
      error: error.message 
    }, { status: 500 });
  }
}
