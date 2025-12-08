export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur shadow-sm z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#800000]">Kadek Bagus Indra Dharmawan</h1>

        <ul className="flex gap-6 text-gray-200 font-medium">
          <li><a href="#hero" className="hover:text-[#800000]">Home</a></li>
          <li><a href="#about" className="hover:text-[#800000]">About</a></li>
          <li><a href="#skills" className="hover:text-[#800000]">Skills</a></li>
          <li><a href="#experience" className="hover:text-[#800000]">Experience</a></li>
          <li><a href="#portfolio" className="hover:text-[#800000]">Portfolio</a></li>
          <li><a href="#testimonials" className="hover:text-[#800000]">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-[#800000]">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
