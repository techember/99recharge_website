import { motion } from "framer-motion";
import { Award, Shield, Users, Zap } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      desc: "End-to-end encryption ensures your data and money stay safe.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      desc: "Recharges and payments happen instantly — no delays.",
    },
    {
      icon: Users,
      title: "Made for Everyone",
      desc: "From students to families, we simplify payments for all.",
    },
    {
      icon: Award,
      title: "Rewarding",
      desc: "Enjoy cashback, loyalty rewards, and exclusive offers.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50">

      {/* Hero Section */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            About{" "}
            <span className="text-primary">99recharge</span>
          </h1>

          <p className="text-slate-700 text-lg md:text-xl leading-relaxed">
            99recharge is your premier digital destination for <strong>instant mobile recharges, utility bill payments, and DTH services</strong>. 
            We provide a <strong>seamless, secure, and lightning-fast</strong> experience for all your payment needs.
          </p>

          <p className="text-slate-700 text-lg md:text-xl leading-relaxed">
            With 24/7 dedicated support and a commitment to security, 99recharge ensures that your transactions are always safe and successful.
          </p>
        </div>

        <motion.div
          className="flex justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-72 md:w-80 lg:w-[350px] overflow-hidden rounded-[2.5rem] shadow-2xl bg-white p-4">
            <img
              src="/Logo.jpeg"
              alt="99recharge Logo"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Why Choose Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-6">
          Why Choose 99recharge?
        </h2>

        <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12 text-lg">
          99recharge combines <strong>speed, safety, and simplicity</strong>. 
          Manage all your daily utility payments and recharges in one place without any hassle.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="
                  p-8 rounded-3xl
                  bg-white shadow-xl shadow-slate-200/50 border border-slate-100
                  hover:shadow-2xl transition-all duration-300
                  hover:-translate-y-2 cursor-default
                "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-primary to-primary-light rounded-2xl mx-auto mb-6 shadow-lg shadow-blue-200">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm text-center leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Vision */}
      <motion.div
        className="bg-gradient-to-r from-primary to-primary-light text-white py-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Vision</h2>

          <p className="text-xl md:text-2xl leading-relaxed text-blue-50">
            At <strong>99recharge</strong>, we aim to make digital payments 
            <strong> effortless, secure, and accessible</strong> to every individual in India. 
            Our vision is to build the most trusted network for utility payments and mobile recharges.
          </p>
        </div>
      </motion.div>

    </section>
  );
}
