import Logo from "@/components/Logo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

const FooterSection = async () => {
  const currentYear = await getCurrentYear();
  return (
    <footer className="bg-primary-700">
      <div className="max-w-7xl px-4 sm:px-6 md:px-8 py-12 md:py-16 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-white gap-6">
          <Logo />

          {/* Nav Links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 items-center ">
              <li>
                <Link
                  href="/about"
                  className="font-semibold hover:text-gray-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-semibold hover:text-gray-300 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="font-semibold hover:text-gray-300 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="font-semibold hover:text-gray-300 transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="font-semibold hover:text-gray-300 transition-colors"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              aria-label="Follow Rentiful on Facebook "
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="w-5 h-5 hover:text-gray-300 transition-colors"
              />
            </a>
            <a
              aria-label="Follow Rentiful on Instagram"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-5 h-5 hover:text-gray-300 transition-colors"
              />
            </a>
            <a
              aria-label="Follow Rentiful on Twitter"
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                className="w-5 h-5 hover:text-gray-300 transition-colors"
              />
            </a>
            <a
              aria-label="Follow Rentiful on LinkedIn"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-5 h-5 hover:text-gray-300 transition-colors"
              />
            </a>
          </div>
        </div>
        <div className="border-white/20 border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-primary-200 text-sm gap-6 ">
          <div className="font-semibold ">
            &copy; {currentYear} Rentiful. All rights reserved.
          </div>
          <div>
            <Link
              href="/privacy"
              className="font-semibold hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            {" | "}
            <Link
              href="/terms"
              className="font-semibold hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            {" | "}
            <Link
              href="/cookies"
              className="font-semibold hover:text-white transition-colors"
            >
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
