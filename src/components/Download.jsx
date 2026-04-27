export default function CTA() {
  return (
    <section
      id="download"
      className="
        w-full 
        py-28 
        bg-[#0f172a]
        text-center
      "
    >
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-white leading-tight">
          Ready to Experience the <span className="text-orange-500">Future of Payments</span>?
        </h2>

        <p className="mb-12 text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Join thousands of satisfied users who trust 99recharge for their daily transactions. Fast, secure, and always reliable.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="https://play.google.com/store/apps/details?id=in.recharge99&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get on Google Play"
            className="
              inline-block
              w-full sm:w-auto
              px-10 py-5
              rounded-2xl 
              bg-orange-600
              text-white 
              font-bold 
              text-lg
              shadow-2xl shadow-orange-600/20
              hover:bg-orange-500
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            Download for Android
          </a>
          
          <button
            aria-label="Contact Support"
            className="
              w-full sm:w-auto
              px-10 py-5
              rounded-2xl 
              bg-white/10
              text-white 
              font-bold 
              text-lg
              backdrop-blur-md
              hover:bg-white/20
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            Contact Support
          </button>
        </div>

      </div>
    </section>
  );
}
