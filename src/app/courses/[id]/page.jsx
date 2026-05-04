"use client";
import { useParams } from "next/navigation";
import courses from "../../../data/courses.json";
import { authClient } from "../../../lib/auth-client";
import Loader from "../../components/Loader";

export default function CourseDetails() {
  const { id } = useParams();
  const { data: session, isPending } = authClient.useSession();
  const course = courses.find((c) => c.id === Number(id));

  if (isPending) return <Loader />;
  if (!course) return <div className="text-center py-20">Course not found.</div>;

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Dark Hero Section */}
      <section className="bg-[#1a1a1a] text-white pt-16 pb-24 px-6 md:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="bg-blue-600 text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest">
              {course.category}
            </span>
            <h1 className="text-5xl font-bold mt-6 leading-tight">{course.title}</h1>
            
            <div className="flex items-center gap-4 mt-8">
              <img src="https://pravatar.cc" className="w-12 h-12 rounded-full border-2 border-gray-600" alt="Instructor" />
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-tighter">Instructor</p>
                <p className="font-bold">{course.instructor}</p>
              </div>
              <div className="ml-6 flex items-center gap-2">
                <span className="text-yellow-400 text-xl">★★★★★</span>
                <span className="text-sm font-bold">{course.rating}</span>
                <span className="text-xs text-gray-400">(12,450 Reviews)</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative group">
            <img src={course.image} className="rounded-2xl shadow-2xl border border-gray-700 w-full h-[350px] object-cover" alt="Course Preview" />
          </div>
        </div>
      </section>

      {/* 2. Content Layout */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-12 grid grid-cols-1 lg:grid-cols-3 gap-16 relative">
        <div className="lg:col-span-2">
          {/* About Section */}
          <h3 className="text-xl font-bold mb-4">About this course</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Master modern {course.category.toLowerCase()} from scratch. This comprehensive bootcamp takes you from zero experience to a professional developer level. You will learn the entire stack, from building beautiful user interfaces to creating powerful backend systems.
          </p>
          <p className="text-gray-600 leading-relaxed mb-12">
            Designed for lifelong learners, this course focuses on clarity, real-world projects, and the technical precision required in todays fast-paced tech industry.
          </p>

          {/* Curriculum Section */}
          <div className="bg-blue-50/50 rounded-3xl p-8 mb-12">
            <h3 className="text-xl font-bold mb-8">Course Curriculum</h3>
            <div className="space-y-4">
              {[
                { m: 1, t: "HTML Basics", l: 12, d: "2h 45m" },
                { m: 2, t: "CSS Styling", l: 18, d: "4h 15m" },
                { m: 3, t: "JavaScript Intro", l: 24, d: "6h 30m" }
              ].map((mod) => (
                <div key={mod.m} className="collapse collapse-arrow bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <input type="radio" name="curriculum-accordion" defaultChecked={mod.m === 1} /> 
                  <div className="collapse-title flex gap-6 items-center py-6 px-8">
                    <div className="bg-blue-50 text-blue-600 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg">
                      {mod.m}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Module {mod.m}: {mod.t}</h4>
                      <p className="text-xs text-gray-400 font-medium">{mod.l} Lessons • {mod.d}</p>
                    </div>
                  </div>
                  <div className="collapse-content px-8 pb-6 text-sm text-gray-500">
                    Content for this module is available for enrolled students.
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Floating Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-50 p-8 lg:-mt-64 relative z-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-slate-900">$129.99</span>
              <span className="text-gray-400 line-through text-sm">$199.99</span>
            </div>
            
            <button className="btn btn-primary bg-orange-700 hover:bg-orange-800 border-none w-full h-14 rounded-2xl text-lg font-bold mb-4">
              Enroll Now
            </button>
            <button className="btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-50 w-full h-14 rounded-2xl font-bold mb-8">
              Add to Favorites
            </button>

            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Course Information</h4>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                 <span className="text-gray-400 flex gap-2">🕒 Duration</span>
                 <span className="font-bold">{course.duration}</span>
              </div>
              <div className="flex justify-between text-sm">
                 <span className="text-gray-400 flex gap-2">📊 Level</span>
                 <span className="font-bold">{course.level}</span>
              </div>
              <div className="flex justify-between text-sm">
                 <span className="text-gray-400 flex gap-2">🌐 Language</span>
                 <span className="font-bold">English</span>
              </div>
              <div className="flex justify-between text-sm">
                 <span className="text-gray-400 flex gap-2">🔄 Last Updated</span>
                 <span className="font-bold">Oct 2024</span>
              </div>
            </div>

            <div className="mt-10 bg-emerald-50 rounded-2xl p-6 text-center border border-emerald-100">
               <div className="text-2xl mb-2">🛡️</div>
               <h5 className="text-emerald-800 font-bold text-sm">Money-back Guarantee</h5>
               <p className="text-[10px] text-emerald-600 font-medium">30 days to decide if its for you.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
