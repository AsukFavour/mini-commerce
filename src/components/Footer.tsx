import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-12 pb-4 px-4">
      {/* Newsletter */}
      <div className="bg-black rounded-b-2xl px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between max-w-6xl mx-auto mb-10">
        <h2 className="text-white text-2xl md:text-3xl font-extrabold mb-6 md:mb-0 md:max-w-lg leading-tight">
          STAY UPTO DATE ABOUT<br className="hidden md:block" /> OUR LATEST OFFERS
        </h2>
        <form className="flex flex-col gap-3 w-full md:w-[400px]">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <FiMail size={20} />
            </span>
            <input
              type="email"
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white placeholder-gray-400 text-gray-900 focus:outline-none"
              placeholder="Enter your email address"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 rounded-full hover:bg-gray-100 transition"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Brand & Social */}
        <div className="flex-1 min-w-[200px]">
          <div className="font-extrabold text-2xl mb-2">ASUK</div>
          <p className="text-gray-500 mb-4 text-sm">
            We have clothes that suits your style and which you’re proud to wear. From women to men.
          </p>
          <div className="flex gap-4 text-xl text-gray-800">
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="GitHub"><FaGithub /></a>
          </div>
        </div>
        {/* Links */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="font-semibold mb-3 tracking-widest text-gray-800">COMPANY</div>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3 tracking-widest text-gray-800">HELP</div>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Delivery Details</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3 tracking-widest text-gray-800">FAQ</div>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#">Account</a></li>
              <li><a href="#">Manage Deliveries</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Payments</a></li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row md:justify-between items-center border-t pt-4 gap-4">
        <div className="text-gray-400 text-xs">
          ASUK © 2000-2023, All Rights Reserved
        </div>
        <div className="flex gap-3 text-2xl text-gray-500">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
          <FaCcApplePay />
          
        </div>
      </div>
    </footer>
  );
}