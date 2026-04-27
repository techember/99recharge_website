import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is 99recharge?",
    answer:
      "99recharge is a leading digital payment platform that offers instant mobile recharges, DTH payments, and utility bill payments in a secure and user-friendly environment.",
  },
  {
    question: "Is 99recharge safe to use?",
    answer:
      "Yes, security is our top priority. 99recharge uses bank-grade encryption and secure payment processing to ensure every transaction is completely safe and private.",
  },
  {
    question: "Do I get rewards on payments?",
    answer:
      "Certainly! 99recharge provides various rewards, including instant commissions, cashback, and exclusive discounts for our loyal users.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply visit our website or download the app, register with your mobile number, and you can start making payments and recharges instantly.",
  },
  {
    question: "Does 99recharge support all operators?",
    answer:
      "Yes, we support all major mobile service providers and DTH operators across India.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="
        bg-gradient-to-br
        from-orange-50 
        via-white 
        to-orange-100
        py-24
      "
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-lg">
            Quick answers to help you get the most out of 99recharge.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                bg-white 
                rounded-[1.5rem] 
                shadow-xl 
                shadow-slate-200/50
                border border-slate-50
                transition-all 
                duration-300
              "
            >
              <button
                onClick={() => toggleFaq(index)}
                className="
                  w-full 
                  flex justify-between items-center 
                  px-8 py-5 
                  text-left 
                  font-bold 
                  text-slate-900
                  text-lg
                  focus:outline-none
                "
              >
                {faq.question}

                <ChevronDown
                  className={`w-6 h-6 text-orange-600 transition-transform ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Expanded Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-[500px]" : "max-h-0"
                  }`}
              >
                <div className="px-8 pb-6 text-slate-600 font-medium leading-relaxed">
                  {faq.answer}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
