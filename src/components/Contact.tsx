import { useState, type FormEvent } from "react";
import { profile } from "../data/profile";

// Indonesian local number (08xx) -> international format (628xx) for wa.me links.
const waNumber = profile.phone.replace(/^0/, "62");

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const subject = `Portfolio inquiry from ${form.name || "website visitor"}`;

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(
    `${form.message}\n\n— ${form.name || ""} (${form.email || ""})`
  )}`;

  const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    form.message
      ? `Hi Kadek, I'm ${form.name || "a visitor"} from your portfolio website.\n\n${form.message}`
      : "Hi Kadek, I found you through your portfolio website."
  )}`;

  async function sendEmail(e: FormEvent) {
    e.preventDefault();
    // Without a Web3Forms key, fall back to opening the visitor's email client.
    if (!profile.web3formsKey) {
      window.location.href = mailtoHref;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: profile.web3formsKey,
          subject,
          from_name: form.name,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

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
              <span className="font-medium text-gray-900">WhatsApp: </span>
              <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noreferrer" className="hover:text-[#800000]">
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

        <form className="space-y-4 bg-white p-6 rounded shadow h-fit" onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded"
          ></textarea>

          <div className="grid sm:grid-cols-2 gap-3">
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-[#800000] text-white py-3 rounded hover:bg-[#5c0000] transition disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send via Email"}
            </button>
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="block text-center w-full bg-[#25D366] text-white py-3 rounded hover:bg-[#1da851] transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          {status === "sent" && (
            <p className="text-sm text-green-700 text-center">
              Thanks! Your message has been sent. I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-700 text-center">
              Something went wrong. Please try WhatsApp or email {profile.email} directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
