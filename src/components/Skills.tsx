import htmlLogo from "../assets/skills/html.png";
import cssLogo from "../assets/skills/css.png";
import jsLogo from "../assets/skills/js.png";
import tsLogo from "../assets/skills/ts.png";
import reactLogo from "../assets/skills/react.png";
import tailwindLogo from "../assets/skills/tailwind.png";
import gitLogo from "../assets/skills/git.png";
import figmaLogo from "../assets/skills/figma.png";
import { skills } from "../data/profile";

const iconMap: Record<string, string> = {
  HTML: htmlLogo,
  CSS: cssLogo,
  JavaScript: jsLogo,
  TypeScript: tsLogo,
  React: reactLogo,
  "Tailwind CSS": tailwindLogo,
  Git: gitLogo,
  GitHub: gitLogo,
  Figma: figmaLogo,
};

const techSkills = ["HTML", "CSS", ...skills.hard];

function Badge({ label }: { label: string }) {
  return (
    <span className="px-4 py-2 bg-white shadow rounded-full text-sm font-medium text-gray-800">
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-gray-900">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-14">
          {techSkills.map((skill) => (
            <div
              key={skill}
              className="p-6 bg-white shadow rounded-lg text-center hover:shadow-lg hover:-translate-y-1 transition"
            >
              {iconMap[skill] ? (
                <img
                  src={iconMap[skill]}
                  alt={skill}
                  className="w-10 h-10 mx-auto mb-3 object-contain"
                />
              ) : (
                <div className="w-10 h-10 mx-auto mb-3 rounded bg-[#800000]/10 text-[#800000] flex items-center justify-center font-bold text-sm">
                  {skill
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </div>
              )}
              <p className="font-medium text-gray-800 text-sm">{skill}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-semibold text-[#800000] mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((s) => (
                <Badge key={s} label={s} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#800000] mb-4">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((s) => (
                <Badge key={s} label={s} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#800000] mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((s) => (
                <Badge key={s} label={s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
