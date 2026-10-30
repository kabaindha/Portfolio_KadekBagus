import { certifications, education } from "../data/profile";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-10 text-[#800000]">Education</h2>
          <div className="space-y-6">
            {education.map((item) => (
              <div key={item.school} className="border-l-2 border-[#800000] pl-5">
                <p className="text-gray-500 text-sm">{item.period}</p>
                <h3 className="text-lg font-semibold text-white">{item.school}</h3>
                <p className="text-gray-300">{item.degree}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-10 text-[#800000]">Certifications</h2>
          <div className="space-y-6">
            {certifications.map((item) => (
              <div key={item.name} className="border-l-2 border-[#800000] pl-5">
                <p className="text-gray-500 text-sm">{item.period}</p>
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                <p className="text-gray-300">{item.issuer}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-1 text-[#e07a7a] hover:text-white transition text-sm"
                  >
                    View certificate →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
