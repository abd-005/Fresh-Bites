"use client"
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded credentials for testing
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "admin@freshbites.com" && password === "password123") {
      // Set a mock cookie
      document.cookie = "auth_token=mock_success_token; path=/";
      router.push('/items');
    } else {
      alert("Try: admin@freshbites.com / password123");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <form onSubmit={handleLogin} className="w-full max-w-sm bg-white dark:bg-stone-900 p-8 rounded-2xl shadow-lg border dark:border-stone-800">
        <h1 className="text-2xl font-bold mb-6 dark:text-white">Admin Login</h1>
        <input name="email" type="email" placeholder="Email" className="w-full p-3 mb-4 rounded-lg border dark:bg-stone-800 dark:border-stone-700" required />
        <input name="password" type="password" placeholder="Password" className="w-full p-3 mb-6 rounded-lg border dark:bg-stone-800 dark:border-stone-700" required />
        <button className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg">Login</button>
      </form>
    </div>
  );
}