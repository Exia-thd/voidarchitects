import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-24">
      {/* CTA Banner */}
      <div className="bg-[#FF5C28] px-6 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-orange-100 mb-2">
              Start a project
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
              Have a vision?
              <br />
              Let's build it together.
            </h2>
          </div>
          <div className="flex gap-4 flex-wrap">
            <a
              href="mailto:studio@voidarchitects.vn"
              className="bg-white text-[#FF5C28] text-sm font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-colors"
            >
              studio@voidarchitects.vn
            </a>
            <a
              href="tel:+84240000000"
              className="border-2 border-white text-white text-sm font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#FF5C28] transition-colors"
            >
              +84 24 0000 0000
            </a>
          </div>
        </div>
      </div>

      {/* Footer body */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-[#FF5C28] flex items-center justify-center rounded-sm">
                <span className="text-white font-bold text-sm">VA</span>
              </div>
              <span className="font-bold text-white tracking-wide">VOID ARCHITECTS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Architecture & design studio based in Hanoi, Vietnam. We create spaces
              that respond to climate, culture, and the specific texture of Vietnamese urban life.
            </p>
            <div className="flex gap-4 mt-6">
              {["Instagram", "Behance", "LinkedIn"].map((social) => (
                <span
                  key={social}
                  className="text-xs text-gray-500 hover:text-white cursor-pointer transition-colors"
                >
                  {social}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-5">
              Work
            </p>
            <div className="flex flex-col gap-3">
              {[
                { href: "/projects", label: "All Projects" },
                { href: "/projects?filter=residential", label: "Residential" },
                { href: "/projects?filter=cultural", label: "Cultural" },
                { href: "/blog", label: "Journal" },
              ].map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Studio */}
          <div>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-5">
              Studio
            </p>
            <div className="flex flex-col gap-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/about#team", label: "Team" },
                { href: "/about#awards", label: "Awards" },
                { href: "/admin", label: "Admin" },
              ].map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Void Architects Co., Ltd. Hanoi, Vietnam. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Architecture that breathes with its climate.
          </p>
        </div>
      </div>
    </footer>
  );
}
