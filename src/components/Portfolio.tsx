import p1 from "../assets/images/project1.jpg";

export default function Portfolio() {
  const projects = [
    { title: "IKEA ", image: p1, desc: "REVAMP IKEA MOBILE APP INDONESIA" },
    
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-gray-900">Portfolio</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.title} className="bg-white rounded shadow hover:shadow-xl transition">
              <img src={p.image} alt={p.title} className="h-48 w-full object-cover rounded-t" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#800000]">{p.title}</h3>
                <p className="text-gray-600 mt-2">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
