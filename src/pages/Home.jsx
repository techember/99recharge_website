import { motion } from "framer-motion";
import Download from "../components/Download";
import Faqs from "../components/Faqs";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Showcase from "../components/Showcase";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-b from-blue-50 via-white to-orange-50 text-slate-900"
      >
        <Hero />
      </motion.div>

      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white"
      >
        <Services />
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-slate-50"
      >
        <Features />
      </motion.div>

      {/* FAQs Section */}
      <motion.section
        id="faqs"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white"
      >
        <Faqs />
      </motion.section>

      {/* Showcase Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-blue-50/30"
      >
        <Showcase />
      </motion.div>

      {/* Download Section */}
      <section
        id="download"
        className="bg-primary text-white border-none"
      >
        <Download />
      </section>

    </div>
  );
}
