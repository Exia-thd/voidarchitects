"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "@/lib/store";
import { useState, useEffect } from "react";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { isAdmin, logout } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      } border-b border-gray-100`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-[#FF5C28] flex items-center justify-center rounded-sm">
            <span className="text-white font-bold text-sm tracking-tight">VA</span>
          </div>
          <span className="text-sm font-semibold text-gray-900 tracking-wide hidden sm:block">
            VOID ARCHITECTS
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors relative py-1 ${
                pathname.startsWith(href)
                  ? "text-[#FF5C28]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {label}
              {pathname.startsWith(href) && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#FF5C28] rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {isAdmin ? (
            <>
              <Link
                href="/admin"
                className={`hidden md:flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                  pathname.startsWith("/admin")
                    ? "bg-[#FF5C28] text-white"
                    : "bg-orange-50 text-[#FF5C28] hover:bg-orange-100"
                }`}
              >
                <span>⚙</span> Admin
              </Link>
              <button
                onClick={logout}
                className="hidden md:block text-xs text-gray-400 hover:text-gray-600 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/admin"
              className="hidden md:block text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              Admin
            </Link>
          )}

          {/* Contact CTA */}
          <Link
            href="/about"
            className="text-xs font-semibold bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-[#FF5C28] transition-colors"
          >
            Contact
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className="w-5 flex flex-col gap-1">
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium ${
                pathname.startsWith(href) ? "text-[#FF5C28]" : "text-gray-700"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/admin"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-gray-400"
          >
            {isAdmin ? "Admin Dashboard" : "Admin Login"}
          </Link>
        </div>
      )}
    </header>
  );
}
