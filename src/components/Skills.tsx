import htmlLogo from "../assets/skills/html.png";
import cssLogo from "../assets/skills/css.png";
import jsLogo from "../assets/skills/js.png";
import tsLogo from "../assets/skills/ts.png";
import reactLogo from "../assets/skills/react.png";
import tailwindLogo from "../assets/skills/tailwind.png";
import gitLogo from "../assets/skills/git.png";
import figmaLogo from "../assets/skills/figma.png";

type Skill = {
  name: string;
  icon: string;
};

const skills: Skill[] = [
  { name: "HTML", icon: htmlLogo },
  { name: "CSS", icon: cssLogo },
  { name: "JavaScript", icon: jsLogo },
  { name: "TypeScript", icon: tsLogo },
  { name: "React", icon: reactLogo },
  { name: "Tailwind CSS", icon: tailwindLogo },
  { name: "Git & GitHub", icon: gitLogo },
  { name: "Figna", icon: figmaLogo},
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-gray-900">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 bg-white shadow rounded-lg text-center hover:shadow-lg hover:-translate-y-1 transition"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mx-auto mb-3 object-contain"
              />
              <p className="font-medium text-gray-800">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
