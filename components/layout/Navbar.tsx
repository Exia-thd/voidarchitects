"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "@/lib/store";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Journal" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { isAdmin, logout } = useStore();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1a1a1a] bg-[#0a0a0a]/90 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.15em] uppercase text-[#ededed] hover:text-[#c8a96e] transition-colors"
        >
          Void Architects
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs tracking-widest uppercase transition-colors ${
                pathname === href
                  ? "text-[#c8a96e]"
                  : "text-[#888] hover:text-[#ededed]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Admin controls */}
        <div className="flex items-center gap-4">
          {isAdmin ? (
            <>
              <Link
                href="/admin"
                className={`text-xs tracking-widest uppercase transition-colors ${
                  pathname.startsWith("/admin")
                    ? "text-[#c8a96e]"
                    : "text-[#888] hover:text-[#c8a96e]"
                }`}
              >
                Admin
              </Link>
              <button
                onClick={logout}
                className="text-xs tracking-widest uppercase text-[#555] hover:text-[#888] transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/admin"
              className="text-xs tracking-widest uppercase text-[#555] hover:text-[#888] transition-colors"
            >
              Admin
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
