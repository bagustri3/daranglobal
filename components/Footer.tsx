import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-fade-in-up">
            <Link
              href="/"
              className="inline-block mb-4 transition-all duration-300 hover:scale-105"
            >
              <Image
                src="https://static.readdy.ai/image/76c4eea5daeee001f01703b57fdded2a/d9c7d313316010eba95a2a96bec2f1b3.png"
                alt="Daran Global"
                width={160}
                height={53}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-300 leading-relaxed transition-colors duration-300 hover:text-white">
              Building the future together through diversified excellence in
              industrial equipment, furniture solutions, moisture control, and
              contemporary architecture.
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <h4 className="text-lg font-semibold mb-4 text-red-400 transform transition-all duration-300 hover:scale-105">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/companies", label: "Our Companies" },
                { href: "/certifications", label: "Certifications" },
                { href: "/contact", label: "Contact" },
              ].map((item, index) => (
                <li
                  key={item.href}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-red-400 transition-all duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up animation-delay-400">
            <h4 className="text-lg font-semibold mb-4 text-red-400 transform transition-all duration-300 hover:scale-105">
              Our Companies
            </h4>
            <ul className="space-y-2">
              {[
                {
                  href: "/companies/daran-furniture",
                  label: "Daran Furniture",
                },
                { href: "/companies/dry-x", label: "Dry X" },
                { href: "/companies/orminia", label: "Orminia" },
                { href: "/companies/fantechdrill", label: "Fantech Drill" },
              ].map((item, index) => (
                <li
                  key={item.href}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-red-400 transition-all duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up animation-delay-600">
            <h4 className="text-lg font-semibold mb-4 text-red-400 transform transition-all duration-300 hover:scale-105">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line text-red-400 transition-transform duration-300 group-hover:scale-110"></i>
                </div>
                <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-line text-red-400 transition-transform duration-300 group-hover:scale-110"></i>
                </div>
                <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">
                  info@daranglobal.com
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-map-pin-line text-red-400 transition-transform duration-300 group-hover:scale-110"></i>
                </div>
                <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">
                  123 Business Ave, Corporate City
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Daran Global. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
