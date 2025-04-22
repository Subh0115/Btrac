'use client';

import { usePlaidLink } from 'react-plaid-link';
import { Button } from './ui/button';
import { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import { useAuth } from '@clerk/nextjs';

interface PlaidLinkProps {
  onSuccess?: (public_token: string) => void;
}

export function PlaidLink({ onSuccess }: PlaidLinkProps) {
  const { userId, isLoaded } = useAuth();
  const [linkToken, setLinkToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLinkToken = useCallback(async () => {
    if (!userId) return;
    
    try {
      setIsLoading(true);
      const response = await fetch('/api/plaid/create-link-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userId}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to create link token');
      }

      const data = await response.json();
      if (data.link_token) {
        setLinkToken(data.link_token);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to initialize Plaid');
    } finally {
      setIsLoading(false);
    }
  }, [userId]);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: async (public_token) => {
      try {
        const response = await fetch('/api/plaid/exchange-public-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userId}`,
          },
          body: JSON.stringify({ public_token }),
        });

        if (!response.ok) {
          throw new Error('Failed to exchange token');
        }

        const data = await response.json();
        onSuccess?.(public_token);
        toast.success('Bank account connected successfully!');
      } catch (error) {
        console.error('Error:', error);
        toast.error('Failed to connect bank account');
      }
    },
  });

  useEffect(() => {
    if (userId && !linkToken && !isLoading) {
      fetchLinkToken();
    }
  }, [userId, linkToken, isLoading, fetchLinkToken]);

  if (!isLoaded) {
    return (
      <Button disabled className="w-full">
        Loading...
      </Button>
    );
  }

  if (!userId) {
    return (
      <Button disabled className="w-full">
        Please sign in to connect a bank account
      </Button>
    );
  }

  return (
    <Button 
      onClick={() => open()} 
      disabled={!ready || isLoading}
      className="w-full"
    >
      {isLoading ? 'Loading...' : 'Connect Bank Account'}
    </Button>
  );
} 