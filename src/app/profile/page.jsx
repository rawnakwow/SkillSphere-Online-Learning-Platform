"use client";
import { useState, useEffect } from "react";
import { authClient } from "../../lib/auth-client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";





export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

   useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session]);


  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await authClient.updateUser({ name, image });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Profile updated! 🎉");
      router.refresh();
    }
    setLoading(false);
  };

  if (isPending) return <div className="p-20 text-center">Loading Profile...</div>;
  if (!session) return <div className="p-20 text-center text-red-500">Access Denied. Please Login.</div>;

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Sidebar - Settings */}
        <aside className="lg:col-span-1 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-fit">
          <h2 className="text-2xl font-bold mb-6">Settings</h2>
          <nav className="space-y-2 text-sm font-medium">
            <button className="flex items-center gap-3 w-full p-4 bg-blue-50 text-blue-600 rounded-2xl">👤 Personal Info</button>
            <button className="flex items-center gap-3 w-full p-4 hover:bg-slate-50 rounded-2xl transition">🛡️ Security</button>
            <button className="flex items-center gap-3 w-full p-4 hover:bg-slate-50 rounded-2xl transition">🔔 Notifications</button>
            <button className="flex items-center gap-3 w-full p-4 hover:bg-slate-50 rounded-2xl transition">💳 Billing</button>
            <button onClick={() => authClient.signOut()} className="flex items-center gap-3 w-full p-4 text-red-500 hover:bg-red-50 rounded-2xl transition mt-10">➞ Sign Out</button>
          </nav>
        </aside>

        {/* Right Content Area */}
        <div className="lg:col-span-3 space-y-8">
          
          {/* Header Banner */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <div className="h-32 bg-blue-600"></div>
            <div className="px-8 pb-8 flex flex-col md:flex-row justify-between items-end md:items-center">
              <div className="flex gap-6 items-center -mt-12">
                <div className="relative group">
                  <img src={session.user.image || "https://liara.run"} className="w-32 h-32 rounded-3xl border-8 border-white bg-white object-cover shadow-md" alt="Profile" />
                  <div className="absolute bottom-2 right-2 bg-blue-600 p-2 rounded-lg text-white text-xs cursor-pointer shadow-lg">📷</div>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-slate-800">{session.user.name}</h1>
                  <p className="text-gray-400 font-medium">{session.user.email}</p>
                </div>
              </div>
              <div className="badge badge-success badge-lg gap-2 py-5 px-6 rounded-2xl text-emerald-700 bg-emerald-50 border-none font-bold mt-4 md:mt-0">
                ✔️ Premium Student
              </div>
            </div>
          </div>

          {/* Update Form Section */}
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2">Update Information</h3>
            <p className="text-gray-400 text-sm mb-8 font-medium">Maintain your professional identity by keeping your profile details current.</p>
            
            <form onSubmit={handleUpdate} className="space-y-6 max-w-2xl">
              <div className="form-control">
                <label className="label text-xs font-bold text-slate-700 uppercase tracking-widest">Full Name</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">👤</span>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input input-bordered w-full pl-11 bg-slate-50 border-none rounded-xl" />
                </div>
              </div>

              <div className="form-control">
                <label className="label text-xs font-bold text-slate-700 uppercase tracking-widest">Profile Image URL</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">🔗</span>
                  <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="input input-bordered w-full pl-11 bg-slate-50 border-none rounded-xl" />
                </div>
              </div>

              <button className={`btn btn-primary bg-blue-700 hover:bg-blue-800 border-none px-10 rounded-xl mt-4 ${loading ? 'loading' : ''}`}>
                Update Information
              </button>
            </form>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">🎓</div>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Current Courses</p>
              <h4 className="text-4xl font-bold my-2 text-slate-800">12</h4>
              <button className="text-blue-600 text-sm font-bold mt-4 hover:underline">View All Courses →</button>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">📜</div>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Certificates Earned</p>
              <h4 className="text-4xl font-bold my-2 text-slate-800">04</h4>
              <button className="text-blue-600 text-sm font-bold mt-4 hover:underline">Download PDFs 📩</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
