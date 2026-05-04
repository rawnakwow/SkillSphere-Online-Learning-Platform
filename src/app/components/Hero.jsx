import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero bg-base-200 py-20 px-6">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        <div className="relative">
          <img
            src="https://unsplash.com"
            className="max-w-sm rounded-2xl shadow-2xl border-4 border-white"
            alt="Students learning"
          />
          <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
             <div className="badge badge-success badge-xs"></div>
             <p className="text-xs font-bold">10k+ Active Students</p>
          </div>
        </div>
        <div className="max-w-xl text-center lg:text-left">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Transform Your Future</span>
          <h1 className="text-5xl font-bold mt-4 leading-tight">
            Upgrade Your <span className="text-blue-600">Skills</span> Today 🚀
          </h1>
          <p className="py-6 text-gray-600 text-lg">
            Learn from Industry Experts and unlock new career opportunities with our curated, professional-grade curriculum.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <Link href="/courses" className="btn btn-primary px-8 rounded-xl">Browse Courses</Link>
            <button className="btn btn-ghost gap-2">▶ Watch Preview</button>
          </div>
        </div>
      </div>
    </section>
  );
}
