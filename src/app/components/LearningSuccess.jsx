export default function LearningSuccess() {
  return (
    <section className="py-16 px-6 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Learning for Success</h2>
        <p className="text-gray-500 mt-2">Maximize your potential with these industry-vetted habits.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Large Blue Card */}
        <div className="md:row-span-2 bg-blue-600 text-white p-10 rounded-[2rem] flex flex-col justify-end min-h-[400px] relative overflow-hidden">
          <div className="absolute top-8 right-8 text-6xl opacity-20">📅</div>
          <h3 className="text-3xl font-bold mb-4">Set Daily Goals</h3>
          <p className="text-blue-100 leading-relaxed">
            Consistency is the bridge between goals and accomplishment. Dedicated daily time blocks ensure steady progress.
          </p>
        </div>

        {/* Practice Coding (Green) */}
        <div className="bg-emerald-400 p-8 rounded-[2rem] text-white flex flex-col justify-between">
           <div className="text-3xl">💻</div>
           <div>
              <h4 className="font-bold text-xl mb-2">Practice Coding</h4>
              <p className="text-sm opacity-90">Build real projects to solidify your logic and syntax.</p>
           </div>
        </div>

        {/* Join Communities (Indigo) */}
        <div className="bg-indigo-100 p-8 rounded-[2rem] flex flex-col justify-between">
           <div className="text-3xl">👥</div>
           <div>
              <h4 className="font-bold text-xl text-indigo-900 mb-2">Join Communities</h4>
              <p className="text-sm text-indigo-700">Learn faster by interacting and sharing with peers.</p>
           </div>
        </div>

        {/* Read Documentation (Orange) */}
        <div className="md:col-span-2 bg-orange-100 p-8 rounded-[2rem] flex items-center gap-6">
           <div className="text-4xl bg-white p-4 rounded-2xl shadow-sm">📖</div>
           <div>
              <h4 className="font-bold text-xl text-orange-900">Read Documentation</h4>
              <p className="text-sm text-orange-700">The most reliable source of truth for any technology.</p>
           </div>
        </div>
      </div>
    </section>
  );
}
