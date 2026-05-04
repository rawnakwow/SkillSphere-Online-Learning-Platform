"use client";
import { useState } from "react";
import { authClient } from "../../lib/auth-client"; 
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await authClient.signIn.email({ email, password });

    if (error) {
      toast.error(error.message || "Invalid credentials");
    } else {
      toast.success("Welcome back! 🚀");
      router.push(callbackUrl);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: callbackUrl,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="card w-full max-w-[450px] bg-white shadow-sm border border-gray-100 p-10 rounded-2xl">
        {/* Logo/Icon Area */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
             <span className="text-2xl">🎓</span>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-slate-900 mb-2">Login to SkillSphere</h2>
        <p className="text-center text-gray-500 mb-10 text-sm">Welcome back! Please enter your details.</p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="form-control">
            <label className="label text-xs font-bold text-slate-700 uppercase tracking-wider">Email</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">✉️</span>
              <input 
                type="email" 
                placeholder="name@example.com" 
                className="input input-bordered w-full pl-11 bg-slate-50 border-none focus:ring-2 focus:ring-blue-500" 
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
          </div>

          <div className="form-control">
            <div className="flex justify-between items-center mb-1">
              <label className="label text-xs font-bold text-slate-700 uppercase tracking-wider">Password</label>
              <Link href="#" className="text-xs font-bold text-blue-600 hover:underline">Forgot password?</Link>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">🔒</span>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="input input-bordered w-full pl-11 bg-slate-50 border-none focus:ring-2 focus:ring-blue-500" 
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="checkbox checkbox-sm checkbox-primary rounded" />
            <span className="text-xs text-slate-600 font-medium">Remember me for 30 days</span>
          </div>

          <button className={`btn btn-primary w-full h-12 text-lg font-bold rounded-xl ${loading ? 'loading' : ''}`} disabled={loading}>
            Login
          </button>
        </form>

        <div className="divider text-[10px] text-gray-400 font-bold uppercase my-8">Or continue with</div>

        <button onClick={handleGoogleLogin} className="btn btn-outline w-full h-12 border-gray-200 hover:bg-slate-50 hover:text-slate-900 gap-3 font-semibold rounded-xl">
          <img src="https://gstatic.com" className="w-5" alt="G" />
          Login with Google
        </button>

        <p className="text-center mt-10 text-sm font-medium text-slate-600">
          Dont have an account?{" "}
          <Link href="/register" className="text-blue-600 font-bold hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
}
