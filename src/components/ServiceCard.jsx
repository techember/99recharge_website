import { motion } from "framer-motion";

export default function ServiceCard({ Icon, title, description }) {
  return (
    <motion.div
      className="
        p-8 
        rounded-3xl 
        bg-white 
        border border-slate-100 
        shadow-xl shadow-slate-200/50
        hover:shadow-2xl hover:shadow-orange-600/10
        transition-all
        duration-300
        cursor-pointer
        group
      "
      whileHover={{ y: -8 }}
    >
      {/* Icon Bubble */}
      <div className="w-16 h-16 mb-6 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto transition-colors group-hover:bg-orange-600">
        <Icon className="w-8 h-8 text-orange-600 transition-colors group-hover:text-white" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-[#0f172a]">{title}</h3>

      {/* Description */}
      {description && (
        <p className="text-base text-slate-500 mt-3 font-medium leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
