export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 max-w-xl">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Contact Me</h2>

        <form className="space-y-4 bg-white p-6 rounded shadow">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border border-gray-300 p-3 rounded"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#800000] text-white py-3 rounded hover:bg-[#5c0000] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
