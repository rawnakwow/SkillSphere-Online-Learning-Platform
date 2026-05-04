import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4">
      <h1 className="text-9xl font-bold text-primary animate-bounce">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="mt-2 text-gray-600 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="mt-6">
        <Link href="/" className="btn btn-primary">
          Back to SkillSphere Home
        </Link>
      </div>
    </div>
  );
}
