"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UpdateInformation() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await authClient.updateUser({
      name: name || undefined,
      image: image || undefined,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Information updated successfully! 🎉");
      router.push("/profile");
      router.refresh();
    }
    setLoading(false);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold mb-4">Update Profile</h2>
          <form onSubmit={handleUpdate} className="space-y-4">
            <div className="form-control">
              <label className="label"><span className="label-text font-semibold">New Name</span></label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="input input-bordered" 
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text font-semibold">New Photo URL</span></label>
              <input 
                type="text" 
                placeholder="https://example.com" 
                className="input input-bordered" 
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="card-actions mt-6">
              <button 
                type="submit" 
                className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                Update Information
              </button>
              <button 
                type="button" 
                onClick={() => router.back()} 
                className="btn btn-ghost w-full"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
