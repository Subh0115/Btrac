'use client';

import { PlaidLink } from '@/components/plaid-link';
import Container from '@/components/global/container';
import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/nextjs';

export default function TestPlaidPage() {
  const [mounted, setMounted] = useState(false);
  const { isLoaded, userId } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isLoaded) {
    return (
      <Container className="py-20">
        <div className="max-w-md mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-8"></div>
            <div className="h-10 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-20">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Test Plaid Integration</h1>
        <p className="text-muted-foreground mb-8">
          {userId 
            ? "Click the button below to test connecting a bank account through Plaid."
            : "Please sign in to connect a bank account."}
        </p>
        <PlaidLink 
          onSuccess={(public_token) => {
            console.log('Successfully connected with token:', public_token);
          }} 
        />
      </div>
    </Container>
  );
} 