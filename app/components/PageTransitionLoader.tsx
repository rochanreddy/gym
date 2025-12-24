'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import LoadingSpinner from './LoadingSpinner';

export default function PageTransitionLoader() {
    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500); // Show loader for 500ms during page transition

        return () => clearTimeout(timer);
    }, [pathname]);

    if (!isLoading) return null;

    return <LoadingSpinner />;
}
