"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client"; // Import your BetterAuth client
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-10 sticky top-0 z-50">
      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold text-primary">
          SkillSphere
        </Link>
      </div>
      
      <div className="flex-none gap-4">
        {/* Main Links */}
        <div className="hidden md:flex gap-4 mr-4">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/courses" className="hover:text-primary transition">Courses</Link>
        </div>

        {isPending ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : session ? (
          /* Logged In: Show Avatar Dropdown */
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-primary">
              <div className="w-10 rounded-full">
                <img 
                  alt="User Avatar" 
                  src={session.user.image || "https://pravatar.cc"} 
                />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border">
              <li className="px-4 py-2 font-bold text-primary border-b mb-1">
                {session.user.name}
              </li>
              <li><Link href="/profile">My Profile</Link></li>
              <li><button onClick={handleLogout} className="text-error">Logout</button></li>
            </ul>
          </div>
        ) : (
          /* Logged Out: Show Auth Buttons */
          <div className="flex gap-2">
            <Link href="/login" className="btn btn-ghost btn-sm md:btn-md">Login</Link>
            <Link href="/register" className="btn btn-primary btn-sm md:btn-md">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
}
