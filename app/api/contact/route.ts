import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, surname, phone, email, message } = body;

    // Validate required fields
    if (!name || !surname || !phone || !email) {
      return NextResponse.json(
        { error: 'Bütün sahələr doldurulmalıdır' },
        { status: 400 }
      );
    }

    // Here you would typically send this to your backend API
    console.log('Contact form submission:', body);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ 
      success: true, 
      message: 'Mesajınız göndərildi' 
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Xəta baş verdi' },
      { status: 500 }
    );
  }
}
