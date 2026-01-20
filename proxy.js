"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Proxy({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // Function to get a specific cookie by name
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const token = getCookie('auth_token');

    if (!token) {
      // Redirect to login if no token found
      router.push('/login');
    } else {
      setAuthorized(true);
    }
  }, [router]);

  // Show nothing or a loader while checking auth
  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-500"></div>
      </div>
    );
  }

  return <>{children}</>;
}