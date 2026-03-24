import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About – Void Architects",
  description: "Hanoi-based architecture studio with 12 years of practice across Vietnam.",
};

const team = [
  {
    name: "Nguyễn Minh Khoa",
    role: "Principal Architect",
    education: "Hanoi Architectural University + Berlage Institute, Rotterdam",
    bio: "15 years of practice across residential, cultural, and urban projects. His work has been exhibited at the Venice Architecture Biennale and published in Dezeen, ArchDaily, and Wallpaper*.",
    gradient: "from-orange-200 to-amber-300",
    initial: "K",
  },
  {
    name: "Trần Thị Lan",
    role: "Design Director",
    education: "RMIT Vietnam + TU Delft",
    bio: "Specialises in material research and tectonic expression. Leads all material and technology R&D. Currently researching compressed rattan panel systems for tropical facade applications.",
    gradient: "from-emerald-200 to-teal-300",
    initial: "L",
  },
  {
    name: "Lê Đức Hùng",
    role: "Project Architect",
    education: "Hanoi University of Civil Engineering + ETH Zurich",
    bio: "Expert in computational design and sustainable construction systems. Oversees the practice's environmental performance benchmarking and climate analysis workflows.",
    gradient: "from-sky-200 to-blue-300",
    initial: "H",
  },
  {
    name: "Phạm Thu Hà",
    role: "Interior & Landscape Lead",
    education: "Vietnam University of Fine Arts",
    bio: "Brings a refined sensibility to interior and landscape work. Her gardens have been awarded by the Asia-Pacific Landscape Architecture Association three times.",
    gradient: "from-violet-200 to-purple-300",
    initial: "H",
  },
];

const values = [
  {
    icon: "✦",
    title: "Restraint",
    desc: "We resist the temptation to fill every space. The discipline of doing less often produces the most powerful architecture.",
    color: "bg-orange-50 border-orange-100",
  },
  {
    icon: "◈",
    title: "Materiality",
    desc: "Every material has a truth. Concrete wants to be heavy. Bamboo wants to flex. We celebrate these properties.",
    color: "bg-emerald-50 border-emerald-100",
  },
  {
    icon: "⊙",
    title: "Climate First",
    desc: "In tropical Vietnam, architecture must negotiate with heat, rain, and light. Climate analysis precedes every sketch.",
    color: "bg-sky-50 border-sky-100",
  },
  {
    icon: "⬡",
    title: "Place",
    desc: "Each project is a response to its specific context — its site, its culture, its neighbours, its history.",
    color: "bg-violet-50 border-violet-100",
  },
];

const awards = [
  { year: "2024", award: "Vietnam Architecture Award", category: "Residential", place: "Winner" },
  { year: "2024", award: "Hue Festival Architecture Prize", category: "Temporary Structures", place: "Winner" },
  { year: "2023", award: "ARCASIA Award for Architecture", category: "Public & Cultural", place: "Gold" },
  { year: "2022", award: "A+Awards, Architizer", category: "Unbuilt – Housing", place: "Finalist" },
  { year: "2022", award: "Dezeen Award", category: "House of the Year", place: "Longlist" },
  { year: "2021", award: "AR Emerging Architecture", category: "Commendation", place: "Commendation" },
  { year: "2020", award: "WAN Awards", category: "Education", place: "Winner" },
];

const clients = [
  "Ministry of Culture", "Vingroup", "Sun Group", "Hue Provincial Government",
  "Can Tho City", "Nam Long Group", "Novaland", "Ho Chi Minh City DOC",
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-12 pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-1.5 mb-8">
          <span className="text-xs font-semibold text-[#FF5C28] tracking-wide uppercase">
            Est. 2012 · Hanoi, Vietnam
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-gray-900 leading-[1.05] mb-6">
              Architecture
              <br />
              through the{" "}
              <span className="text-[#FF5C28]">lens</span>
              <br />
              of Vietnam.
            </h1>
          </div>
          <div>
            <p className="text-lg text-gray-500 leading-relaxed mb-4">
              Void Architects was founded in Hanoi in 2012 with a conviction: that the spaces
              left empty within a building are as architecturally significant as the spaces filled.
            </p>
            <p className="text-base text-gray-400 leading-relaxed">
              Over more than a decade, we have developed a body of work across Vietnam that
              tests this idea at every scale — from intimate domestic spaces to large cultural
              buildings and urban interventions.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF5C28] mb-3">
            Philosophy
          </p>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 mb-12">
            How we think about design.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className={`p-7 rounded-2xl border-2 ${v.color} hover:shadow-md transition-shadow`}
              >
                <span className="text-2xl text-gray-400 block mb-4">{v.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF5C28] mb-3">
            People
          </p>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 mb-12">
            The team behind the work.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div
                  className={`aspect-square bg-gradient-to-br ${member.gradient} rounded-2xl mb-5 flex items-end p-5 overflow-hidden relative`}
                >
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-black text-white/20 select-none">
                    {member.initial}
                  </span>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 w-full">
                    <p className="text-xs font-bold text-gray-900 truncate">{member.name}</p>
                  </div>
                </div>
                <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#FF5C28] mb-1">
                  {member.role}
                </p>
                <p className="text-xs text-gray-400 mb-3">{member.education}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="bg-gray-50 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF5C28] mb-3">
            Recognition
          </p>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 mb-12">
            Awards & Honours
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            {awards.map((item, i) => (
              <div
                key={item.award}
                className={`grid grid-cols-12 px-6 py-5 items-center hover:bg-orange-50 transition-colors ${
                  i < awards.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <span className="col-span-1 text-sm font-bold text-[#FF5C28]">{item.year}</span>
                <span className="col-span-6 text-sm font-semibold text-gray-900">{item.award}</span>
                <span className="col-span-3 text-sm text-gray-500 hidden md:block">{item.category}</span>
                <div className="col-span-2 flex justify-end">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    item.place === "Winner" || item.place === "Gold"
                      ? "bg-orange-100 text-[#FF5C28]"
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {item.place}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF5C28] mb-3 text-center">
            Clients & Partners
          </p>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 mb-12 text-center">
            Trusted by leading organisations.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {clients.map((client) => (
              <div
                key={client}
                className="border-2 border-gray-100 rounded-xl px-4 py-5 text-center hover:border-orange-200 hover:bg-orange-50 transition-colors"
              >
                <p className="text-sm font-semibold text-gray-600">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-gray-900 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            Let's work together.
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Tell us about your project and we'll get back to you within 48 hours.
          </p>
          <a
            href="mailto:studio@voidarchitects.vn"
            className="inline-flex items-center gap-2 bg-[#FF5C28] text-white text-sm font-bold px-8 py-4 rounded-full hover:bg-orange-600 transition-colors"
          >
            studio@voidarchitects.vn →
          </a>
        </div>
      </section>
    </div>
  );
}
