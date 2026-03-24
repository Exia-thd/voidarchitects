import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#c8a96e] mb-3">
              Void Architects
            </p>
            <p className="text-sm text-[#555] leading-relaxed">
              Architecture & Design Studio
              <br />
              Hanoi, Vietnam
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-[#444] mb-4">
              Navigation
            </p>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/blog", label: "Journal" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-[#555] hover:text-[#888] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-[#444] mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-2 text-sm text-[#555]">
              <span>studio@voidarchitects.vn</span>
              <span>+84 24 0000 0000</span>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-[#333]">
            © {new Date().getFullYear()} Void Architects. All rights reserved.
          </p>
          <p className="text-xs text-[#333]">
            Architecture that embraces the void.
          </p>
        </div>
      </div>
    </footer>
  );
}
