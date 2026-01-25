import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Check if user has auth token
    const authToken = document.cookie
      .split('; ')
      .find(row => row.startsWith('auth_token='));

    // Redirect if no token is found
    if (!authToken) {
      router.push('/login');
    }
  }, [router]);

  return children; // Render children if authenticated
};

export default ProtectedRoute;
