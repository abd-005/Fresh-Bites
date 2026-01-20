import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const [cookies] = useCookies(['auth_token']);
  const token = cookies.auth_token;

  useEffect(() => {
    // Redirect if no token is found
    if (!token && router.pathname.startsWith('/add-item')) {
      router.push('/login');
    }
  }, [token, router]);

  return children; // Render children if authenticated
};

export default ProtectedRoute;
