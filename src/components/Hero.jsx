import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        relative 
        bg-gradient-to-br 
        from-blue-50 
        via-white 
        to-orange-50 
        text-slate-900
        pt-12 pb-20 
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 relative z-10">

        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-sm">
            Fastest Recharge & Bill Payments:{" "}
            <span className="text-primary">99recharge</span>
          </h1>

          <p className="text-lg text-slate-600 mb-6 max-w-lg">
            Experience lightning-fast mobile recharges, DTH, and utility bill payments with India’s most trusted payment platform.
          </p>

          <div className="space-x-4">
            <a
              href="https://play.google.com/store/apps/details?id=in.recharge99&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                px-8 py-4 rounded-full 
                bg-gradient-to-r from-primary to-primary-light 
                text-white font-bold text-lg
                shadow-lg shadow-blue-200
                hover:scale-[1.05]
                transition duration-300
              "
            >
              Get Started Now
            </a>
          </div>
        </motion.div>

        {/* Right Side Phone Slideshow */}
        <motion.div
          className="flex-1 mt-12 md:mt-0 relative flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Phone Frame */}
          <div
            className="
              relative 
              w-[220px] md:w-[240px] lg:w-[280px] 
              h-[450px] md:h-[500px] lg:h-[580px] 
              rounded-[3rem] shadow-2xl overflow-hidden 
              border-[8px] border-slate-900 bg-slate-900
            "
          >
            {/* Blue Soft Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>

            {/* Static App Screen */}
            <motion.img
              src="/App_screen.png"
              alt="99recharge App Screen"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
