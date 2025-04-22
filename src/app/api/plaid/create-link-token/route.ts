import { plaidClient } from '@/lib/plaid';
import { NextResponse } from 'next/server';
import { Products, CountryCode } from 'plaid';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    console.log('Creating link token...');
    
    // Get the authorization header
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      console.error('No authorization header found');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Extract the user ID from the authorization header
    const userId = authHeader.replace('Bearer ', '');
    if (!userId) {
      console.error('No user ID found in authorization header');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('User authenticated:', userId);

    if (!process.env.PLAID_CLIENT_ID || !process.env.PLAID_SECRET) {
      console.error('Missing Plaid credentials');
      return NextResponse.json(
        { error: 'Plaid credentials not configured' },
        { status: 500 }
      );
    }

    const response = await plaidClient.linkTokenCreate({
      user: { client_user_id: userId },
      client_name: 'BtrackiFiS',
      products: [Products.Transactions],
      country_codes: [CountryCode.Us],
      language: 'en',
    });

    console.log('Link token created successfully');
    return NextResponse.json({ link_token: response.data.link_token });
  } catch (error: any) {
    console.error('Error creating link token:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create link token' },
      { status: 500 }
    );
  }
} 