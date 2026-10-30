import profile_img from "../assets/images/profile.jpg";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gray-100 pt-20">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <p className="text-[#800000] font-semibold mb-2">Hi, I'm</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {profile.name}
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
            {profile.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
            Industrial Engineering graduate turned Full Stack Web Developer —
            building user-centered digital solutions with React, Node.js and
            TypeScript, backed by real-world operational leadership experience.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#portfolio"
              className="bg-[#800000] text-white px-6 py-3 rounded shadow hover:bg-[#5c0000] transition"
            >
              View Portfolio
            </a>
            <a
              href={profile.cvFile}
              download
              className="border border-[#800000] text-[#800000] px-6 py-3 rounded hover:bg-[#800000] hover:text-white transition"
            >
              Download CV
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-5 mt-8 text-gray-600">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#800000] transition"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#800000] transition"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-[#800000] transition"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>

        <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-gray-900 shrink-0">
          <img src={profile_img} alt={profile.name} className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
}
