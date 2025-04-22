import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useClerk } from '@clerk/nextjs';
import { PLANS } from '@/constants/plans';
import { Pricing } from '@/components/marketing/pricing';

const PricingPage: React.FC = () => {
    const router = useRouter();
    const { user } = useClerk();

    useEffect(() => {
        if (user?.publicMetadata?.isPro) {
            router.push('/dashboard');
        }
    }, [user, router]);

    return <Pricing />;
};

export default PricingPage; 