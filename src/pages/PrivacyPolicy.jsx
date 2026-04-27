export default function PrivacyPolicy() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 min-h-screen py-16 text-slate-900">
      <div className="max-w-5xl mx-auto px-6 space-y-8">

        {/* Page Header */}
        <h1 className="text-4xl font-extrabold text-[#0f172a] mb-6">
          Privacy Policy
        </h1>

        <div className="bg-white rounded-3xl p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
          <p className="text-slate-600 leading-relaxed mb-6 font-medium">
            When you visit or use services from <strong>99recharge</strong>, this Privacy Policy applies
            and explains how your personal data is collected, used, and shared.
          </p>

          {/* Sections */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-3">
                Information we collect:
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We automatically gather certain information about your device when you
                access 99recharge, including your browser, IP address, time zone, and cookies.
                We also track pages you view, search keywords, and interactions. This is
                called <strong>Device Information</strong>.
              </p>
              <p className="text-slate-600 mt-3 leading-relaxed">
                Additionally, we collect <strong>Personal Information</strong> when you
                use our services or platform, including name, address, phone number, email,
                and contacts. This helps us provide services and improve your experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-3">
                Technologies we use:
              </h2>
              <ul className="list-disc list-inside text-slate-600 space-y-2 font-medium">
                <li>Cookies — files on your device containing a unique ID</li>
                <li>Log files — track site activity, IP, browser type, and timestamps</li>
                <li>Order information — name, billing/shipping address, payment info</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-3">
                How we use your information:
              </h2>
              <p className="text-slate-600 leading-relaxed">
                To fulfill orders, handle payments, setup shipments, and send order confirmations.
                We also use this data to contact you, check for fraud, and send relevant offers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-3">
                Sharing of collected information:
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We may share information with third parties like analytics providers for insights,
                or to comply with legal requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-3">
                Data retention:
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We keep order information for 5 years unless you request deletion earlier.
                Data is securely deleted or anonymized after this period.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-3">
                Updates:
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this policy to reflect changes in practices or regulations.
                Contact us at{" "}
                <a href="mailto:99rechargeinfo@gmail.com" className="font-bold text-orange-600 hover:underline">
                  99rechargeinfo@gmail.com
                </a>{" "}
                for questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
