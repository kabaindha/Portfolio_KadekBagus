import { useEffect, useState } from "react";
import { profile } from "../data/profile";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur shadow-sm z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-[#800000]">
          {profile.name}
        </a>

        <ul className="hidden md:flex gap-6 text-gray-200 font-medium text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-[#800000] transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden text-gray-200 text-2xl leading-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <ul className="md:hidden bg-gray-900/95 border-t border-gray-800 px-6 py-4 flex flex-col gap-4 text-gray-200 font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-[#800000] transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
