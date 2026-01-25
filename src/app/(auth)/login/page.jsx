"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    // Simulate network delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (email === "admin@freshbites.com" && password === "password123") {
      // Set authentication cookie
      document.cookie = `auth_token=mock_success_token_${Date.now()}; path=/; max-age=86400`;
      toast.success(`Welcome back, Admin!`);

      // Redirect after brief delay
      setTimeout(() => {
        router.push('/items');
      }, 1500);
    } else {
      toast.error('Invalid credentials. Try: admin@freshbites.com / password123');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-stone-900 to-black flex items-center justify-center p-4">
      <Toaster position="top-center" />

      <div className="w-full max-w-md">
        {/* Card */}
        <div className="relative rounded-[2.5rem] border border-white/20 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
          {/* Decorative gradient blur */}
          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl" />

          <div className="relative">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-yellow-500/20 border border-yellow-500/50 mb-4">
                <Lock className="text-yellow-500" size={28} />
              </div>
              <h1 className="text-3xl font-black text-white tracking-tight mb-2">Welcome Back</h1>
              <p className="text-white/60 text-sm">Sign in to access the admin dashboard</p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-white/80">Email Address</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />
                  <input
                    name="email"
                    type="email"
                    placeholder="admin@freshbites.com"
                    defaultValue="admin@freshbites.com"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 outline-none transition-all focus:border-yellow-500 focus:bg-white/10 focus:ring-2 focus:ring-yellow-500/20"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-white/80">Password</label>
                <div className="relative">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    defaultValue="password123"
                    className="w-full pl-12 pr-12 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 outline-none transition-all focus:border-yellow-500 focus:bg-white/10 focus:ring-2 focus:ring-yellow-500/20"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-yellow-500 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 bg-linear-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed text-black font-black py-3 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            {/* Demo Credentials Info */}
            <div className="mt-6 p-4 rounded-xl border border-yellow-500/30 bg-yellow-500/5">
              <p className="text-xs font-bold text-yellow-500 mb-2">🔐 Demo Credentials</p>
              <p className="text-xs text-white/60 mb-1"><span className="text-white font-semibold">Email:</span> admin@freshbites.com</p>
              <p className="text-xs text-white/60"><span className="text-white font-semibold">Password:</span> password123</p>
            </div>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-xs text-white/40 font-medium">OR</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Back to Home */}
            <Link
              href="/"
              className="w-full block text-center py-3 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white font-bold transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-white/40 text-xs mt-6">
          Protected route: Only admins can access <Link href="/add-item" className="text-yellow-500 hover:underline">/add-item</Link>
        </p>
      </div>
    </div>
  );
}