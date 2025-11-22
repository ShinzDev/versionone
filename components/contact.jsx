

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-32 bg-black text-white border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-wide mb-6">Get In Touch</h2>
        <p className="text-white/70 max-w-xl mx-auto mb-10">
          Got a project in mind or want to collaborate? Reach out directly on WhatsApp.
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/2348085123238" // <-- replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 bg-white/5 backdrop-blur-md text-lg font-medium hover:bg-white/10"
        >
          Message Me on WhatsApp
        </a>
      </div>
    </section>
  );
}