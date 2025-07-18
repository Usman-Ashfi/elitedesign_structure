"use client"; // Required for hooks like useState and usePathname

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Building2, Menu, X } from "lucide-react";

// Define navigation links as a constant for easy maintenance
const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Hook to get the current path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      {/* Logo and Brand Name */}
      <Link
        href="/"
        className="flex items-center justify-center"
        onClick={() => setIsMenuOpen(false)}
      >
        <Building2 className="h-8 w-8 text-amber-600" />
        <span className="ml-2 text-xl font-bold text-gray-900">
          Elite Design & Structure{" "}
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive
                  ? "text-amber-600"
                  : "text-gray-700 hover:text-amber-600"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}
      <div className="ml-auto md:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-100"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full h-screen bg-white flex flex-col items-center pt-8">
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium transition-colors ${
                    isActive
                      ? "text-amber-600"
                      : "text-gray-900 hover:text-amber-600"
                  }`}
                  onClick={toggleMenu} // Close menu on link click
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
