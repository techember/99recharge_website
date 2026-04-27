import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      className="
        bg-gradient-to-br
        from-blue-50 
        via-white 
        to-orange-50
        py-24
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-slate-600 text-lg">
            Have questions or feedback? We’ll get back to you quickly.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {[
            {
              icon: MapPin,
              title: "Address",
              desc: "Uttar Pradesh 272001",
            },
            {
              icon: Mail,
              title: "Email",
              desc: "99rechargeinfo@gmail.com",
            },
            {
              icon: Phone,
              title: "Phone",
              desc: "9793282313",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="
                  flex flex-col items-center 
                  p-8 
                  rounded-3xl 
                  bg-white
                  shadow-xl
                  shadow-slate-200/50
                  border border-slate-100
                  hover:shadow-2xl 
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  cursor-default
                "
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-primary to-primary-light rounded-2xl mb-6 shadow-lg shadow-blue-200">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-slate-900 font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-slate-600 text-center text-sm whitespace-pre-line leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div
          className="
            max-w-3xl mx-auto 
            p-10 
            rounded-[2.5rem] 
            bg-white 
            shadow-2xl 
            shadow-slate-200/60
            border border-slate-50
          "
        >
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-slate-900 font-bold mb-2 ml-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="
                  w-full px-5 py-4 rounded-2xl 
                  bg-slate-50 border-none
                  focus:outline-none 
                  focus:ring-2 focus:ring-primary/50
                  transition-all
                "
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-slate-900 font-bold mb-2 ml-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="
                  w-full px-5 py-4 rounded-2xl 
                  bg-slate-50 border-none
                  focus:outline-none 
                  focus:ring-2 focus:ring-primary/50
                  transition-all
                "
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-slate-900 font-bold mb-2 ml-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="What can we help you with?"
                className="
                  w-full px-5 py-4 rounded-2xl 
                  bg-slate-50 border-none
                  focus:outline-none 
                  focus:ring-2 focus:ring-primary/50
                  transition-all
                "
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`
                w-full py-4 rounded-2xl font-bold text-lg
                shadow-xl shadow-blue-200 transition-all
                ${status === "loading"
                  ? "bg-slate-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-primary to-primary-light text-white hover:scale-[1.02] active:scale-[0.98]"
                }
              `}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 mt-4 font-bold text-center">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 mt-4 font-bold text-center">
                ❌ Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
