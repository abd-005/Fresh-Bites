import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, password } = await request.json();

  if (email === "admin@freshbites.com" && password === "password123") {
    const response = NextResponse.json({ success: true });
    response.cookies.set('auth_token', 'mock_token_xyz', {
      httpOnly: true,
      path: '/',
    });
    return response;
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
