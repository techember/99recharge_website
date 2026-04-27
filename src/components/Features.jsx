import { Gift, Headphones, Shield, Zap } from "lucide-react";

const features = [
  { icon: Shield, title: "Secure Payments", desc: "Your transactions are protected with bank-grade encryption." },
  { icon: Zap, title: "Lightning Fast", desc: "Instant recharges, bookings, and payments in seconds." },
  { icon: Headphones, title: "24/7 Support", desc: "Always here to help, whenever you need assistance." },
  { icon: Gift, title: "Exclusive Rewards", desc: "Earn cashback, discounts, and exciting offers on every payment." },
];

export default function Features() {
  return (
    <section
      className="
        py-24 
        bg-gradient-to-br 
        from-orange-50 
        via-white 
        to-orange-100
      "
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-slate-900">
          Why Choose <span className="text-orange-600">99recharge</span>?
        </h2>

        {/* Feature Cards */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="
                p-8 
                rounded-3xl 
                bg-white 
                shadow-xl 
                shadow-slate-200/50
                border border-slate-100
                hover:shadow-2xl 
                hover:-translate-y-2
                transition-all
                duration-300
                cursor-default
              "
            >
              {/* Icon bubble */}
              <div
                className="
                  w-16 h-16 
                  rounded-2xl 
                  bg-orange-50 
                  flex items-center justify-center 
                  mx-auto mb-6
                "
              >
                <f.icon className="w-8 h-8 text-orange-600" />
              </div>

              {/* Title */}
              <h3 className="font-bold text-xl mb-3 text-slate-900">
                {f.title}
              </h3>

              {/* Description */}
              <p className="font-medium text-slate-600 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
