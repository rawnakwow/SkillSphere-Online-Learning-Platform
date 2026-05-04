import Link from "next/link";
import courses from "../data/courses.json"; // Path updated: data is outside src
import Hero from "./components/Hero";
import LearningSuccess from "./components/LearningSuccess";
import Mentors from "./components/Mentors";
import CourseCard from "./components/CourseCard";

export default function Home() {
  // Requirement: Top 3 highest rated for the "Popular" section
  const popularCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  // Requirement: Extra section for "Trending Now"
  const trendingCourses = courses.filter((c) => c.trending).slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Popular Courses Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Popular Courses</h2>
            <p className="text-gray-500 mt-2">The highest-rated paths chosen by our community.</p>
          </div>
          <Link href="/courses" className="text-blue-600 font-bold hover:underline">
            Explore all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* 3. Learning for Success Section (Bento Grid) */}
      <LearningSuccess />

      {/* 4. Meet Your Mentors Section */}
      <Mentors />

      {/* 5. Trending Now Section */}
      <section className="container mx-auto px-6 py-16 mb-10">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl font-bold whitespace-nowrap">Trending Now</h2>
          <div className="h-[2px] bg-blue-200 w-full text-blue-200"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingCourses.map((course) => (
            <div key={course.id} className="card bg-white shadow-md border border-gray-100 transition-transform hover:scale-[1.02]">
              <figure className="px-4 pt-4">
                {/* FIX: Use the path relative to the 'public' folder */}
                <img  src="/images/mages1.jpg"  alt={course.title} className="rounded-xl h-40 w-full object-cover" />
              </figure>
              <div className="card-body">
                <div className="badge badge-outline text-[10px] font-bold uppercase mb-2">New Release</div>
                <h3 className="font-bold text-slate-800 line-clamp-1">{course.title}</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-slate-900">$89.99</span>
                  <Link href={`/courses/${course.id}`} className="btn btn-circle btn-primary btn-sm text-white" >
                    +
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
