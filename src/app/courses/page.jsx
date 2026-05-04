"use client";
import { useState } from "react";
import Link from "next/link";
import coursesData from "@/data/courses.json";

export default function AllCourses() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  // Filtering Logic
  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Explore All Courses</h1>

      {/* Search Input */}
      <div className="relative max-w-2xl mb-12">
        <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">🔍</span>
        <input
          type="text"
          placeholder="Search by course title, keyword or instructor..."
          className="input input-bordered w-full pl-12 bg-white border-none shadow-sm rounded-xl h-14"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Sidebar Filters */}
        <aside className="lg:col-span-1 space-y-8">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Categories</h4>
            <div className="space-y-3">
              {["All", "Development", "Design", "Marketing", "Data Science"].map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="category" 
                    className="radio radio-primary radio-sm" 
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(cat)}
                  />
                  <span className={`text-sm font-medium ${selectedCategory === cat ? 'text-blue-600' : 'text-slate-600'}`}>
                    {cat === "All" ? "All Categories" : cat}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Level</h4>
            <div className="space-y-3">
              {["All", "Beginner", "Intermediate", "Advanced"].map((lvl) => (
                <label key={lvl} className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="radio" 
                    name="level" 
                    className="radio radio-primary radio-sm" 
                    checked={selectedLevel === lvl}
                    onChange={() => setSelectedLevel(lvl)}
                  />
                  <span className="text-sm font-medium text-slate-600">{lvl}</span>
                </label>
              ))}
            </div>
          </div>

          <button 
            onClick={() => {setSelectedCategory("All"); setSelectedLevel("All"); setSearch("");}}
            className="btn btn-ghost btn-sm text-blue-600 hover:bg-blue-50 w-full justify-start px-0"
          >
            Clear All Filters
          </button>
        </aside>

        {/* Course Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id} className="card bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                <figure className="relative h-40">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 badge badge-primary text-[10px] font-bold uppercase">{course.category}</div>
                </figure>
                <div className="card-body p-5">
                  <h3 className="font-bold text-slate-800 leading-tight h-10 line-clamp-2">{course.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">Instructor: <span className="text-slate-600 font-semibold">{course.instructor}</span></p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-600">
                      ⭐ {course.rating} <span className="mx-1 opacity-20">|</span> 🕒 {course.duration}
                    </div>
                    <div className="badge badge-ghost text-[10px] font-bold text-blue-600 uppercase">{course.level}</div>
                  </div>

                  <Link href={`/courses/${course.id}`} className="btn btn-primary btn-sm w-full mt-6 rounded-lg font-bold">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed">
              <p className="text-gray-400">No courses found matching your criteria.</p>
            </div>
          )}

          {/* Pagination Placeholder */}
          <div className="flex justify-center mt-12">
            <div className="join">
              <button className="join-item btn btn-sm">«</button>
              <button className="join-item btn btn-sm btn-active">1</button>
              <button className="join-item btn btn-sm">2</button>
              <button className="join-item btn btn-sm">3</button>
              <button className="join-item btn btn-sm">»</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
