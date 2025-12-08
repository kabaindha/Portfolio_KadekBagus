export default function Testimonials() {
  const testimonials = [
    { name: "M. Ikhsan", comment: "Great to work with, very professional!" },
    { name: "Mington", comment: "Delivers high quality work on time." },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-[#800000]">Testimonials</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 bg-gray-100 rounded shadow">
              <p className="text-gray-700 italic">"{t.comment}"</p>
              <h4 className="mt-4 font-semibold text-gray-900">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
