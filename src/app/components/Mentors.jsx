export default function Mentors() {
  const mentors = [
    { 
        name: "Alex Rivera", 
        role: "Media & Architecture", 
        img: "https://pravatar.cc" 
    },
    { 
        name: "Elena Gomez", 
        role: "Data Scientist", 
        img: "https://pravatar.cc" 
    },
    { 
        name: "Robert Vance", 
        role: "Business Strategy", 
        img: "https://pravatar.cc" 
    },
    { 
        name: "Sofia Chen", 
        role: "Creative Director", 
        img: "https://pravatar.cc" 
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Meet Your Mentors</h2>
        <p className="text-gray-500 mt-2 italic">Learn from the best in the business.</p>
      </div>
      
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-5xl">
        {mentors.map((mentor, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="avatar mb-4 transition-transform group-hover:scale-110 duration-300">
              <div className="w-24 md:w-32 rounded-full ring ring-blue-500 ring-offset-base-100 ring-offset-4 shadow-xl">
                <img src={mentor.img} alt={mentor.name} />
              </div>
            </div>
            <h3 className="font-bold text-lg text-slate-800">{mentor.name}</h3>
            <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mt-1">
                {mentor.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
