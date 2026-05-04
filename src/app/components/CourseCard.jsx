import Link from 'next/link';

export default function CourseCard({ course }) {
  // 1. Safety check: If course is missing, return nothing to prevent a crash
  if (!course) return null;

  return (
    <div className="card bg-white shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
      <figure className="relative">
        {/* 2. Added ?. to safely access the image and title */}
        <img 
          src={course?.image || "/images/mages1.jpg"} 
          alt={course?.title || "Course"} 
          className="h-48 w-full object-cover" 
        />
        {course?.trending && (
          <div className="absolute top-3 left-3 badge badge-warning gap-2 text-[10px] font-bold py-3">
            🔥 TRENDING
          </div>
        )}
      </figure>

      <div className="card-body p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
            {course?.category}
          </span>
          <div className="flex items-center gap-1 text-sm font-bold text-gray-600">
            ⭐ {course?.rating}
          </div>
        </div>
        <h2 className="card-title text-lg font-bold text-slate-800 leading-tight h-12 line-clamp-2">
          {course?.title}
        </h2>
        
        <p className="text-sm text-gray-500 mt-2">
          By <span className="font-semibold text-slate-700">{course?.instructor}</span>
        </p>

        <div className="card-actions mt-6">
          <Link 
            href={`/courses/${course?.id}`} 
            className="btn btn-primary btn-outline btn-sm w-full rounded-xl hover:text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
