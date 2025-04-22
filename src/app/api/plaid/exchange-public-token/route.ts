import { plaidClient } from '@/lib/plaid';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Get the authorization header
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Extract the user ID from the authorization header
    const userId = authHeader.replace('Bearer ', '');
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { public_token } = await req.json();
    
    const response = await plaidClient.itemPublicTokenExchange({
      public_token,
    });

    // Here you would typically store the access_token in your database
    // associated with the user's account

    return NextResponse.json({ access_token: response.data.access_token });
  } catch (error: any) {
    console.error('Error exchanging public token:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 