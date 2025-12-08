import profile from "../assets/images/profile.jpg";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Hi, I'm{" "}
            <span className="text-[#800000]">
              Kadek Bagus Indra Dharmawan
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            A Frontend Developer who loves building clean and modern web interfaces.
          </p>

          <a
            href="#portfolio"
            className="bg-[#800000] text-white px-6 py-3 rounded shadow hover:bg-[#5c0000] transition"
          >
            View Portfolio
          </a>
        </div>

        <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-gray-900">
          <img src={profile} alt="profile" className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
}
