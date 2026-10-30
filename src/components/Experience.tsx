import { experience } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-[#800000]">Work Experience</h2>

        <div className="space-y-6">
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`} className="bg-gray-100 p-6 rounded shadow">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-xl font-semibold text-gray-900">{job.role}</h3>
                <span className="text-gray-500 text-sm whitespace-nowrap">{job.period}</span>
              </div>
              <p className="text-[#800000] font-medium mt-1">{job.company}</p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside text-gray-700">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
