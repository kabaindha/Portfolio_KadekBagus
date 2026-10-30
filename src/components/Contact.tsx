import { useState } from "react";
import { profile } from "../data/profile";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio inquiry from ${form.name || "website visitor"}`
  )}&body=${encodeURIComponent(
    `${form.message}\n\n— ${form.name || ""} (${form.email || ""})`
  )}`;

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Contact Me</h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Open to full-stack web development opportunities and collaborations.
            Feel free to reach out through any of the channels below.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="font-medium text-gray-900">Email: </span>
              <a href={`mailto:${profile.email}`} className="hover:text-[#800000]">
                {profile.email}
              </a>
            </li>
            <li>
              <span className="font-medium text-gray-900">Phone: </span>
              <a href={`tel:${profile.phone}`} className="hover:text-[#800000]">
                {profile.phone}
              </a>
            </li>
            <li>
              <span className="font-medium text-gray-900">Location: </span>
              {profile.location}
            </li>
            <li>
              <span className="font-medium text-gray-900">LinkedIn: </span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#800000]"
              >
                linkedin.com/in/kadek-bagus-indra-d
              </a>
            </li>
            <li>
              <span className="font-medium text-gray-900">GitHub: </span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#800000]"
              >
                github.com/kabaindha
              </a>
            </li>
          </ul>
        </div>

        <form className="space-y-4 bg-white p-6 rounded shadow h-fit" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded"
          ></textarea>

          <a
            href={mailtoHref}
            className="block text-center w-full bg-[#800000] text-white py-3 rounded hover:bg-[#5c0000] transition"
          >
            Send Message
          </a>
          <p className="text-xs text-gray-400 text-center">
            Opens your email client to send this message directly to {profile.email}.
          </p>
        </form>
      </div>
    </section>
  );
}
