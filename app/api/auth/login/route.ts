import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    // Check against hardcoded admin (you can also check database)
    const adminUsername = process.env.ADMIN_USERNAME || 'seyma';
    const adminPassword = process.env.ADMIN_PASSWORD || 'gunes123';

    if (username === adminUsername && password === adminPassword) {
      // Create a simple session token (in production, use proper JWT)
      const sessionToken = `admin_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      return NextResponse.json({ 
        success: true, 
        token: sessionToken,
        user: { username: adminUsername }
      });
    }

    return NextResponse.json({ 
      success: false, 
      message: 'Kullanıcı adı veya şifre hatalı' 
    }, { status: 401 });

  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Bir hata oluştu' 
    }, { status: 500 });
  }
}

