import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-[#800000]">About Me</h2>

        <p className="text-gray-200 text-lg leading-7 max-w-3xl">{profile.summary}</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 max-w-3xl">
          <div>
            <p className="text-3xl font-bold text-white">4+</p>
            <p className="text-gray-400 text-sm">Years of Work Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">3</p>
            <p className="text-gray-400 text-sm">Web Projects Built</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">63%</p>
            <p className="text-gray-400 text-sm">Revenue Growth Delivered</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">3.18</p>
            <p className="text-gray-400 text-sm">GPA, Industrial Engineering</p>
          </div>
        </div>
      </div>
    </section>
  );
}
