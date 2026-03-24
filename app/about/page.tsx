import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – Void Architects",
};

const team = [
  {
    name: "Nguyễn Minh Khoa",
    role: "Principal Architect",
    bio: "Graduated from Hanoi Architectural University, with postgraduate studies at the Berlage Institute, Rotterdam. 15 years of practice across residential, cultural, and urban projects in Vietnam and Southeast Asia.",
  },
  {
    name: "Trần Thị Lan",
    role: "Design Director",
    bio: "Specialises in material research and tectonic expression. Her work explores the intersection of Vietnamese vernacular building traditions and contemporary construction technology.",
  },
  {
    name: "Lê Đức Hùng",
    role: "Project Architect",
    bio: "Responsible for leading complex mixed-use and cultural projects. Brings expertise in computational design methods and sustainable construction systems.",
  },
];

const values = [
  {
    title: "Restraint",
    desc: "We resist the temptation to fill every space. The discipline of doing less, of leaving things out, often produces the most powerful architecture.",
  },
  {
    title: "Materiality",
    desc: "Every material has a truth. Concrete wants to be heavy. Bamboo wants to flex. Our work celebrates these properties rather than concealing them.",
  },
  {
    title: "Climate",
    desc: "In tropical Vietnam, architecture must negotiate with heat, rain, and light. We treat these conditions not as problems to be solved but as generative forces.",
  },
  {
    title: "Place",
    desc: "Each project is a response to its specific context — its site, its culture, its neighbours, its history. We do not design from a fixed aesthetic.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Header */}
      <section className="pt-20 pb-16 border-b border-[#1a1a1a]">
        <p className="text-xs tracking-[0.2em] uppercase text-[#c8a96e] mb-8">
          About
        </p>
        <div className="grid md:grid-cols-2 gap-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#ededed]">
            A studio built on
            <br />
            the principle
            <br />
            of emptiness.
          </h1>
          <div className="flex flex-col justify-end">
            <p className="text-sm text-[#666] leading-relaxed mb-4">
              Void Architects was founded in Hanoi in 2012 with a simple
              conviction: that the spaces left empty within a building are as
              architecturally significant as the spaces filled.
            </p>
            <p className="text-sm text-[#666] leading-relaxed">
              Over more than a decade, we have developed a body of work across
              Vietnam that tests this idea at every scale — from intimate
              domestic interiors to large cultural buildings and urban
              interventions.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 border-b border-[#1a1a1a]">
        <p className="text-xs tracking-[0.2em] uppercase text-[#444] mb-12">
          Philosophy
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((v) => (
            <div key={v.title} className="border border-[#1a1a1a] p-8 hover:border-[#2a2a2a] transition-colors">
              <h3 className="text-sm font-semibold text-[#c8a96e] mb-4 tracking-wider uppercase">
                {v.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 border-b border-[#1a1a1a]">
        <p className="text-xs tracking-[0.2em] uppercase text-[#444] mb-12">
          Team
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member) => (
            <div key={member.name}>
              <div className="aspect-square bg-[#111] border border-[#1a1a1a] mb-6 flex items-center justify-center">
                <span className="text-[#1e1e1e] text-4xl font-thin">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-[#ededed] mb-1">
                {member.name}
              </h3>
              <p className="text-xs tracking-widest uppercase text-[#c8a96e] mb-4">
                {member.role}
              </p>
              <p className="text-xs text-[#555] leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20">
        <p className="text-xs tracking-[0.2em] uppercase text-[#444] mb-12">
          Recognition
        </p>
        <div className="space-y-0">
          {[
            { year: "2024", award: "Vietnam Architecture Award", category: "Residential" },
            { year: "2023", award: "Hue Festival Architecture Prize", category: "Temporary Structures" },
            { year: "2022", award: "ARCASIA Award for Architecture", category: "Public & Cultural" },
            { year: "2021", award: "A+Awards, Architizer", category: "Unbuilt – Housing" },
            { year: "2019", award: "Dezeen Award", category: "Longlist – House of the Year" },
          ].map((item) => (
            <div
              key={item.year + item.award}
              className="flex items-baseline gap-8 py-5 border-b border-[#1a1a1a] hover:bg-[#0d0d0d] transition-colors px-2"
            >
              <span className="text-xs text-[#444] w-12 shrink-0">{item.year}</span>
              <span className="text-sm text-[#ededed] flex-1">{item.award}</span>
              <span className="text-xs text-[#555] hidden md:block">{item.category}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
