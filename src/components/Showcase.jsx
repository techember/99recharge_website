import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Showcase() {
  return (
    <section
      className="
        py-24 
        bg-white
      "
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6">

        {/* Left: App Mockup */}
        <motion.div
          className="flex-1 mb-12 md:mb-0 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/Logo.jpeg"
            alt="99recharge App"
            className="
              w-[280px] md:w-[340px] lg:w-[450px] 
              rounded-3xl object-contain shadow-2xl
            "
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="flex-1 text-center md:text-left md:pl-12"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 leading-tight">
            The Only App You'll Ever Need for <span className="text-orange-600">Recharges</span>
          </h2>

          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Experience the future of utility payments. Whether it's mobile recharge, DTH, or electricity bills, 99recharge provides a lightning-fast and secure way to handle it all.
          </p>

          <Link
            to="/about"
            className="
              inline-block 
              px-8 py-4 
              rounded-2xl 
              bg-[#0f172a] 
              text-white font-bold text-lg
              shadow-xl 
              hover:bg-slate-800
              hover:scale-[1.03]
              transition-all
            "
          >
            Explore All Features
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
