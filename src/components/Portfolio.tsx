import ikeaImg from "../assets/images/project1.jpg";
import type { ProjectItem } from "../data/profile";

const projects: ProjectItem[] = [
  {
    title: "PrimeCare",
    subtitle: "Full-Stack Web Developer Final Project — Purwadhika",
    desc: "A full-stack laundry management system covering customer management, order processing, pickup requests, payment handling, and role-based administration.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Prisma", "PostgreSQL"],
    links: [
      { label: "Frontend", url: "https://github.com/kabaindha/primecare-web" },
      { label: "Backend", url: "https://github.com/kabaindha/primecare-api" },
    ],
  },
  {
    title: "EveTix",
    subtitle: "Event Management Web Application",
    desc: "A full-stack event management platform that lets users browse events and purchase tickets online.",
    tags: ["React", "Node.js", "REST API"],
    links: [
      { label: "Frontend", url: "https://github.com/rwxjejedx/EveTix_frontend" },
      { label: "Backend", url: "https://github.com/rwxjejedx/backend" },
    ],
  },
  {
    title: "IKEA Mobile App Revamp",
    subtitle: "UX Research Final Project",
    desc: "UX research and usability testing on the IKEA Indonesia mobile app, with the interface redesigned based on research insights.",
    tags: ["UX Research", "Usability Testing", "Figma"],
    links: [
      {
        label: "Research Deck",
        url: "https://drive.google.com/drive/folders/1-8lwJL5p8xjcTOWtaSrcqoPi0c2bPyxh?usp=drive_link",
      },
    ],
    image: ikeaImg,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-gray-900">Portfolio</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded shadow hover:shadow-xl transition flex flex-col"
            >
              {p.image && (
                <img src={p.image} alt={p.title} className="h-48 w-full object-cover rounded-t" />
              )}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-[#800000]">{p.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{p.subtitle}</p>
                <p className="text-gray-700 mt-3 text-sm leading-6 flex-1">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-5">
                  {p.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#800000] font-medium text-sm hover:underline"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
