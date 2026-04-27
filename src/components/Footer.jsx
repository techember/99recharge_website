import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>

      {/* Top Blue Strip */}
      <div className="bg-primary text-white py-0.5"></div>

      {/* Main Footer */}
      <div className="bg-slate-50 text-slate-800 py-12 text-center text-sm border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-left">

          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">99<span className="text-secondary">recharge</span></h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              India's premier recharge and bill payment solution. We provide a secure, fast, and reliable platform for all your utility payments and mobile recharges.
            </p>
          </div>

          {/* Important Links */}
          <div className="md:text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Important Links</h2>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-secondary transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-secondary transition"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="hover:text-secondary transition"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/delete-account"
                  className="hover:text-secondary transition"
                >
                  Delete Account
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Contact Details</h2>
            <div className="space-y-3 text-slate-600 font-medium">

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 shrink-0" />
                <div>
                  <p>Uttar Pradesh 272001</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>99rechargeinfo@gmail.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>9793282313</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary text-white py-8 text-center text-sm space-y-2">
        <p>A unit of NIRBAADH PLATFORMS PRIVATE LIMITED</p>
        <p>GST: 09AALCN3412H1ZG</p>
        <p>© {new Date().getFullYear()} 99recharge. All Rights Reserved.</p>
      </div>

    </footer>
  );
}
