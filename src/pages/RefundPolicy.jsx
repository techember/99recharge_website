export default function RefundPolicy() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-16 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto p-6 sm:p-10">

        <div className="bg-white rounded-3xl p-10 shadow-xl shadow-slate-200/50 border border-slate-100">

          <h1 className="text-4xl font-extrabold mb-8 text-[#0f172a]">
            Refund Policy
          </h1>

          <p className="text-slate-600 leading-relaxed font-medium">
            Thank you for choosing <strong>99recharge</strong>, a premier mobile recharge and utility
            payments platform. We are committed to delivering exceptional service and ensuring
            customer satisfaction.
            This refund policy explains how refunds work for mobile recharge and other transactions
            made through the <strong>99recharge</strong> platform.
          </p>

          {/* Eligibility Section */}
          <section id="eligibility">
            <h2 className="text-2xl font-bold text-[#0f172a] mt-10 mb-4">
              Eligibility for Refunds
            </h2>
            <p className="text-slate-600 font-medium">
              <strong>1.1</strong> Refunds will be provided only in the following case:
            </p>
            <p className="mt-3 text-slate-600 font-medium leading-relaxed">
              a) If a mobile recharge, utility payment, or other transaction fails due to technical
              issues or errors on our platform.
            </p>
            <p className="mt-3 text-slate-600 font-medium">
              <strong>1.2</strong> Refund requests must be reported within 48 hours of the failed transaction.
            </p>
          </section>

          {/* Request Process */}
          <section id="request">
            <h2 className="text-2xl font-bold text-[#0f172a] mt-10 mb-4">
              Refund Request Process
            </h2>

            <p className="text-slate-600 mb-4 font-medium">
              <strong>2.1</strong> To request a refund, the user must contact 99recharge customer support
              within 48 hours of the failed transaction.
            </p>

            <p className="text-slate-600 mb-3 font-medium">
              <strong>2.2</strong> Refund requests must include:
            </p>

            <ul className="list-disc list-inside mb-6 text-slate-600 font-medium space-y-2">
              <li>Transaction ID</li>
              <li>Date and time of the transaction</li>
              <li>Mobile number or account details used</li>
              <li>A brief description of the issue</li>
            </ul>

            <p className="text-slate-600 mb-4 font-medium">
              <strong>2.3</strong> Refund requests can be submitted via email or phone through our website.
            </p>
          </section>

          {/* Processing */}
          <section id="processing">
            <h2 className="text-2xl font-bold text-[#0f172a] mt-10 mb-4">
              Refund Processing
            </h2>

            <p className="text-slate-600 mb-4 font-medium">
              <strong>3.1</strong> 99recharge will review the refund request within 7 working days.
            </p>

            <p className="text-slate-600 mb-4 font-medium">
              <strong>3.2</strong> If approved, the refund amount will be credited to the user’s 99recharge
              wallet within 3–5 working days.
            </p>

            <p className="text-slate-600 mb-4 font-medium">
              <strong>3.3</strong> The refunded amount can only be used for future recharges and utility
              payments on 99recharge.
            </p>
          </section>

          {/* Exceptions */}
          <section id="exceptions">
            <h2 className="text-2xl font-bold text-[#0f172a] mt-10 mb-4">
              Refund Exceptions
            </h2>

            <p className="text-slate-600 mb-4 font-medium">
              <strong>4.1</strong> No refunds for failures caused by incorrect user inputs, including wrong
              mobile numbers.
            </p>

            <p className="text-slate-600 mb-4 font-medium">
              <strong>4.2</strong> Refund requests made after 48 hours will not be accepted.
            </p>

            <p className="text-slate-600 mb-4 font-medium">
              <strong>4.3</strong> Wallet balance cannot be withdrawn. It can only be used for recharges and
              utility payments.
            </p>
          </section>

          {/* Changes */}
          <section id="changes">
            <h2 className="text-2xl font-bold text-[#0f172a] mt-10 mb-4">
              Changes to the Refund Policy
            </h2>

            <p className="text-slate-600 mb-4 font-medium">
              <strong>5.1</strong> 99recharge reserves the right to modify this policy anytime. Changes take effect
              immediately upon posting on our website.
            </p>

            <p className="text-slate-600 mb-4 font-medium">
              <strong>5.2</strong> Users should regularly review the refund policy for updates.
            </p>
          </section>

          {/* Contact */}
          <div className="mt-12 p-6 bg-slate-50 rounded-2xl">
            <p className="text-slate-700 font-bold">
              For queries about our refund policy, contact us at:
            </p>
            <a
              href="mailto:99rechargeinfo@gmail.com"
              className="text-orange-600 font-bold text-lg hover:underline block mt-2"
            >
              99rechargeinfo@gmail.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
