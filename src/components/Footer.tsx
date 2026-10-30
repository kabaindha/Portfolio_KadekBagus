import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-6 text-center text-gray-400 text-sm">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript & Tailwind CSS.
      </p>
    </footer>
  );
}
