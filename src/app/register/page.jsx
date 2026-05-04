"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name,
      image, // This handles the Photo-URL (link) requirement
    });

    if (error) {
      toast.error(error.message || "Registration failed");
    } else {
      toast.success("Account created successfully! Please login. 🎉");
      router.push("/login");
    }
    setLoading(false);
  };

  const handleGoogleRegister = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="card w-full max-w-[500px] bg-white shadow-sm border border-gray-100 p-10 rounded-2xl">
        
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-2">Create Your Account</h2>
        <p className="text-center text-gray-500 mb-10 text-sm">Join the community of lifelong learners.</p>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name Field */}
          <div className="form-control">
            <label className="label text-xs font-bold text-slate-700 uppercase tracking-wider">Name</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">👤</span>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="input input-bordered w-full pl-11 bg-slate-50 border-none focus:ring-2 focus:ring-blue-500" 
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label className="label text-xs font-bold text-slate-700 uppercase tracking-wider">Email</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">✉️</span>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="input input-bordered w-full pl-11 bg-slate-50 border-none focus:ring-2 focus:ring-blue-500" 
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
          </div>

          {/* Photo URL Field */}
          <div className="form-control">
            <label className="label text-xs font-bold text-slate-700 uppercase tracking-wider">Photo-URL (link)</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">🖼️</span>
              <input 
                type="text" 
                placeholder="https://example.com" 
                className="input input-bordered w-full pl-11 bg-slate-50 border-none focus:ring-2 focus:ring-blue-500" 
                onChange={(e) => setImage(e.target.value)}
                required 
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label text-xs font-bold text-slate-700 uppercase tracking-wider">Password</label>
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

          <button className={`btn btn-primary w-full h-12 text-lg font-bold rounded-xl mt-4 ${loading ? 'loading' : ''}`} disabled={loading}>
            Register
          </button>
        </form>

        <div className="divider text-[10px] text-gray-400 font-bold uppercase my-8">Or continue with</div>

        <button onClick={handleGoogleRegister} className="btn btn-outline w-full h-12 border-gray-200 hover:bg-slate-50 hover:text-slate-900 gap-3 font-semibold rounded-xl">
          <img src="https://gstatic.com" className="w-5" alt="G" />
          Register with Google
        </button>

        <p className="text-center mt-10 text-sm font-medium text-slate-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-bold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}
