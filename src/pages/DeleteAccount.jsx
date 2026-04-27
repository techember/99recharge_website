export default function DeleteAccount() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 min-h-screen py-16 text-slate-900">
      <div className="max-w-5xl mx-auto px-6 space-y-8">
        {/* Page Header */}
        <h1 className="text-4xl font-extrabold text-[#0f172a] mb-6">
          Delete Account
        </h1>

        <div className="bg-white rounded-3xl p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
          <p className="text-slate-600 leading-relaxed mb-6 font-medium">
            If you wish to delete your <strong>99recharge</strong> account, please follow the instructions outlined below. Please note that account deletion is permanent and cannot be undone.
          </p>

          {/* Sections */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-3">
                How to request account deletion:
              </h2>
              <ul className="list-disc list-inside text-slate-600 space-y-2 font-medium">
                <li>Send an email to our support team at <a href="mailto:99rechargeinfo@gmail.com" className="font-bold text-orange-600 hover:underline">99rechargeinfo@gmail.com</a>.</li>
                <li>Use the subject line: <strong>Account Deletion Request</strong>.</li>
                <li>Include your registered email address and mobile number in the body of the email.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-3">
                What happens when you delete your account?
              </h2>
              <ul className="list-disc list-inside text-slate-600 space-y-2 font-medium">
                <li>Your profile, personal details, and saved payment methods will be permanently removed.</li>
                <li>Any pending transactions will be cancelled.</li>
                <li>Your wallet balance (if any) should be utilized before requesting deletion, as it will be forfeited.</li>
                <li>Past transaction history may be retained for accounting and legal compliance purposes.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-3">
                Processing Time
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Account deletion requests are typically processed within 7-14 business days. You will receive a confirmation email once your account has been successfully deleted.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-3">
                Contact Us
              </h2>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions or face issues while trying to delete your account, feel free to contact us at{" "}
                <a href="mailto:99rechargeinfo@gmail.com" className="font-bold text-orange-600 hover:underline">
                  99rechargeinfo@gmail.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
