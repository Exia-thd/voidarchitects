export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: "project" | "blog";
  coverGradient: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  published: boolean;
  author: string;
  location?: string;
  year?: string;
  area?: string;
}

export const defaultPosts: Post[] = [
  {
    id: "1",
    title: "Void House – Minimalist Residence",
    slug: "void-house-hanoi",
    excerpt:
      "A 4-storey urban home in Hanoi's Old Quarter that carves open courtyards into every level, flooding the interior with tropical light and cross-ventilation.",
    content: `## The Brief

The client — a young couple returning from Berlin — wanted a home that felt both rooted in Hanoi and cosmopolitan. The 4.5 × 22 m plot in Tây Hồ district demanded creative thinking about light and air.

## Design Strategy

We introduced three vertical voids of varying sizes that pierce the building section from roof to ground. Rather than the typical Vietnamese tube house that becomes darker and hotter the further you go from the street, every room here has direct access to sky and breeze.

## Materials & Construction

- Board-formed concrete for the primary structure
- Oxidised steel screens at the street facade
- Locally quarried Thanh Hóa stone for all floor finishes
- Hand-fired ceramic tiles for wet areas
- Mature bamboo planted in the internal courtyards

## Recognition

Shortlisted for the Vietnam Architecture Award 2024 in the Residential category. Featured in Dezeen, ArchDaily Vietnam, and Wallpaper* magazine.`,
    category: "project",
    coverGradient: "from-orange-200 via-amber-100 to-yellow-200",
    tags: ["Residential", "Hanoi"],
    publishedAt: "2024-11-15",
    updatedAt: "2024-11-15",
    published: true,
    author: "Void Architects",
    location: "Tây Hồ, Hanoi",
    year: "2024",
    area: "320 m²",
  },
  {
    id: "2",
    title: "Mekong Cultural Centre",
    slug: "mekong-cultural-centre",
    excerpt:
      "A riverside pavilion in Cần Thơ celebrating the agricultural heritage of the Mekong Delta through a floating bamboo lattice structure.",
    content: `## Context

The Mekong Delta is the rice bowl of Southeast Asia, yet its architectural heritage is rapidly disappearing beneath concrete urbanisation. This cultural centre, commissioned by Cần Thơ provincial government, attempts to anchor this heritage in a contemporary form.

## Structural System

The building is organised around a central performance space that can open completely on three sides to the riverside, transforming the boundary between interior and landscape. The primary structure is a 3D bamboo lattice engineered in collaboration with IBUKU Bali, lashed with traditional techniques by local craftspeople.

## Programme

The 1,800 sqm facility houses:
- 350-seat flexible performance hall
- Permanent exhibition on Mekong ecology and culture
- Research library and archive
- Floating market demonstration space
- Restaurant and cafe overlooking the river

## Environmental Performance

The building generates 40% of its energy needs through integrated photovoltaic panels woven into the roof lattice. All rainwater is harvested and treated on-site for toilet flushing and landscape irrigation.`,
    category: "project",
    coverGradient: "from-emerald-200 via-teal-100 to-cyan-200",
    tags: ["Cultural", "Cần Thơ"],
    publishedAt: "2024-07-10",
    updatedAt: "2024-07-10",
    published: true,
    author: "Void Architects",
    location: "Cần Thơ City",
    year: "2024",
    area: "1,800 m²",
  },
  {
    id: "3",
    title: "Lotus Tower – Mixed-Use",
    slug: "lotus-tower-danang",
    excerpt:
      "A 28-storey mixed-use tower on Da Nang's beachfront whose cascading sky gardens reduce solar gain by 35% while creating a vertical neighbourhood.",
    content: `## Vision

Vietnam's coastal cities are at a tipping point. Da Nang's beachfront is rapidly being colonised by glass-box towers that amplify heat, block sea breezes, and offer no public value. Lotus Tower is our attempt at an alternative model.

## Sky Gardens

Every four floors, the building steps back to create a shared sky garden — a shaded, planted terrace accessible to all residents on those levels. These gardens are not decorative; they are programmed with seating, vegetable plots, children's play areas, and small retail.

## Facade Design

The primary skin is a parametrically designed ceramic screen derived from the geometry of the lotus petal. At different times of day, the screens cast shifting shadow patterns across the interior spaces, turning sun angle into architectural event.

## Performance Data

- 35% reduction in solar heat gain vs conventional curtain wall
- Sky gardens reduce ambient temperature on each level by 3–5°C
- Green roof and rain gardens manage 85% of stormwater on site`,
    category: "project",
    coverGradient: "from-sky-200 via-blue-100 to-indigo-200",
    tags: ["Mixed-Use", "Da Nang"],
    publishedAt: "2023-12-01",
    updatedAt: "2023-12-01",
    published: true,
    author: "Void Architects",
    location: "Mỹ Khê Beach, Da Nang",
    year: "2023",
    area: "18,400 m²",
  },
  {
    id: "4",
    title: "Bamboo Pavilion – Hue Festival",
    slug: "bamboo-pavilion-hue",
    excerpt:
      "A temporary event pavilion for the Hue Festival of Arts constructed by 8 craftspeople in 72 hours from locally sourced bamboo, then fully dismantled and reused.",
    content: `## Commission

The Hue Festival of Arts and Culture commissioned a temporary pavilion for its 2024 edition with an unusual brief: it must be beautiful, structurally innovative, built entirely from local bamboo, erected in under 4 days, and fully reusable after the 2-week festival.

## Structural Innovation

Working with structural engineer Nguyễn Bá Đạt, we developed a tensegrity-bamboo hybrid system where steel tension cables work with bamboo compression members to create a 22-metre clear span with no intermediate supports. The form derives from the aerodynamics of the traditional nón lá (conical hat).

## Construction

A team of 8 master craftspeople from Vĩnh Phúc province — all with generational bamboo-working expertise — erected the primary structure in 68 hours. Their knowledge of material behaviour proved more valuable than any computational model.

## After the Festival

The bamboo was dismantled and donated to three rural schools for classroom furniture construction, fulfilling the original brief's commitment to circularity.`,
    category: "project",
    coverGradient: "from-lime-200 via-green-100 to-emerald-200",
    tags: ["Temporary", "Hue"],
    publishedAt: "2024-03-20",
    updatedAt: "2024-03-20",
    published: true,
    author: "Void Architects",
    location: "Hue Imperial City",
    year: "2024",
    area: "480 m²",
  },
  {
    id: "5",
    title: "Sun Villa – Beachfront Retreat",
    slug: "sun-villa-phu-quoc",
    excerpt:
      "Six pavilion villas on Phú Quốc island where every room opens completely to the sea breeze, blurring the line between interior and tropical landscape.",
    content: `## Site

The 2.2-hectare site sits on a promontory on the western coast of Phú Quốc, with 180° views across the Gulf of Thailand. The existing vegetation — mature Casuarina and Ficus trees — became the primary organising element of the plan.

## Villa Organisation

Six independent guest villas are positioned among the existing trees, each elevated slightly above the forest floor on concrete pilots. The elevation serves three purposes: it preserves the root systems of the trees, captures the sea breeze above the undergrowth, and provides dramatic views from the living spaces.

## Material Palette

We worked exclusively with materials found within 200 km of the site:
- Kiên Giang granite for structural elements and outdoor surfaces
- Treated Mekong driftwood for ceiling linings and joinery
- Traditional Khmer weaving patterns interpreted in handmade ceramic screens
- Local rattan and bamboo for all furniture

## Landscape

The landscape was designed by Vo Thi Xuan Nhi of Saigon Landscapes. The garden makes no distinction between planted and wild areas; native species are encouraged to grow freely between the maintained plantings.`,
    category: "project",
    coverGradient: "from-violet-200 via-purple-100 to-pink-200",
    tags: ["Hospitality", "Phú Quốc"],
    publishedAt: "2023-09-14",
    updatedAt: "2023-09-14",
    published: true,
    author: "Void Architects",
    location: "Phú Quốc, Kiên Giang",
    year: "2023",
    area: "2,600 m²",
  },
  {
    id: "6",
    title: "The Space Between: On Courtyards",
    slug: "on-courtyards-vietnam",
    excerpt:
      "The courtyard is the most Vietnamese of architectural devices. A meditation on how this ancient spatial idea remains the most radical tool available to the contemporary architect in tropical Asia.",
    content: `Stand in the centre of a traditional Vietnamese courtyard at noon. The walls are close, the sky is framed, the shadow lines are sharp. You are simultaneously inside and outside, sheltered and exposed. This is not a compromise between architecture and landscape — it is the most intense form of both.

The courtyard has been the organisational heart of Vietnamese domestic space for as long as people have built here. The nha tu, the nhà rường, the shop houses of Hội An — all are organised around the void at the centre. Light enters from above. Rain enters from above. Air moves through because of the chimney effect of the vertical void. The courtyard is a climate machine before it is anything else.

## The Problem With Contemporary Practice

Contemporary Vietnamese residential architecture has largely abandoned the courtyard. Land prices in Hanoi and Ho Chi Minh City mean that every square metre must be built. Air conditioning has substituted for natural ventilation. The result is buildings that are climatically inefficient, ecologically costly, and — we would argue — less pleasant to inhabit.

## The Courtyard as Resistance

To insist on the courtyard today is a political act as much as an architectural one. It says: we refuse to accept that density and climate comfort are incompatible. It says: we refuse to abandon the spatial intelligence of our architectural heritage.

## How We Work With Courtyards

In our residential projects, we treat the courtyard not as amenity but as necessity. It is the first thing determined in the section — how big must this void be to draw light to the back of the plan? How must it be oriented to catch the prevailing breeze? What happens when it rains?

Only then do we build the walls around it.`,
    category: "blog",
    coverGradient: "from-amber-200 via-orange-100 to-rose-200",
    tags: ["Essay", "Tropical Design"],
    publishedAt: "2024-09-05",
    updatedAt: "2024-09-05",
    published: true,
    author: "Nguyễn Minh Khoa",
    location: "",
    year: "",
    area: "",
  },
  {
    id: "7",
    title: "Bamboo & Rattan: Vietnam's Forgotten Materials",
    slug: "bamboo-rattan-vietnamese-materials",
    excerpt:
      "Two materials that built Vietnam for centuries are being displaced by concrete and steel. We argue for their urgent rediscovery — not as nostalgia, but as structural necessity.",
    content: `Bamboo grows faster than any other plant on earth. A Phyllostachys bamboo culm can reach 12 metres in 60 days. It sequesters carbon as it grows. Its tensile strength exceeds structural steel by weight. It can be harvested without killing the plant, which immediately begins regenerating.

Why, then, do we build almost nothing with it?

## The Stigma Problem

In Vietnam as in most of Southeast Asia, bamboo carries a stigma: it is the material of poverty, of provisional structures, of things that need to be replaced. Concrete and steel are modern. Bamboo is backward.

This association is economically logical but architecturally catastrophic. A material of extraordinary structural and environmental properties has been abandoned in favour of materials whose production is among the most carbon-intensive on the planet.

## Engineering Comes of Age

What has changed in the past decade is engineering knowledge. Organisations like IBUKU in Bali and various academic research groups have developed rigorous understanding of bamboo's structural behaviour — how to connection it, how to treat it against moisture and insects, how to design for its anisotropic properties.

## Our Approach

In the Hue Festival Pavilion, we worked with bamboo engineers and traditional craftspeople simultaneously. The engineers provided structural calculations; the craftspeople provided knowledge of material behaviour that no simulation can capture — how a particular culm will behave under lateral load, when a joint needs lashing and when it needs a connector.

This collaboration between digital engineering and embodied craft knowledge is, we believe, the only legitimate way to work with these materials.

## Rattan's Moment

Rattan is experiencing a more visible renaissance, driven largely by the international furniture market's appetite for sustainable natural materials. Vietnamese rattan furniture is now exported globally. But the application of rattan to architecture — to screens, ceilings, structural elements — remains largely unexplored.

We are currently researching a building component system using compressed rattan panels as non-structural cladding. Early prototypes are promising.`,
    category: "blog",
    coverGradient: "from-green-200 via-teal-100 to-emerald-200",
    tags: ["Materials", "Sustainability"],
    publishedAt: "2024-06-18",
    updatedAt: "2024-06-18",
    published: true,
    author: "Trần Thị Lan",
    location: "",
    year: "",
    area: "",
  },
  {
    id: "8",
    title: "What We Talk About When We Talk About Climate",
    slug: "climate-architecture-vietnam",
    excerpt:
      "Every architecture studio claims to be climate-responsive. Almost none of them are. A frank conversation about what climate-conscious design actually requires — and costs.",
    content: `Climate is the most misused word in contemporary architectural discourse. It appears in every practice statement, every competition entry, every grant application. It has been so thoroughly appropriated by marketing that it has almost lost meaning.

We want to try to say something specific.

## The Monsoon Is Not A Problem To Be Solved

When we say climate-responsive architecture in the Vietnamese context, we mean something precise: buildings that are designed around the specific thermal, solar, and moisture conditions of the place where they sit. The monsoon is not an inconvenience to be managed by better waterproofing. It is a resource — potentially the most powerful natural cooling mechanism available to the architect.

## What Buildings Actually Do

The typical contemporary Vietnamese building — the glass-curtain office block, the hermetically sealed apartment tower — is a climate catastrophe. It absorbs solar radiation all day, re-emits it all night, and uses enormous quantities of electricity to cool the interiors that the skin has overheated.

We know this. It is not a controversial claim. It is thermodynamics.

## The Economic Argument

The argument we most often hear against climate-responsive design is cost. Natural ventilation systems, shading devices, high-performance glazing, green roofs — all cost more upfront than a conventional envelope.

This is sometimes true in the short term. It is never true over the building's lifetime. The energy savings from a properly ventilated, well-shaded building in a tropical climate repay the additional upfront cost within 5-8 years, typically.

## What We Require

In our practice, climate analysis precedes design. Before any sketching begins, we commission a computational fluid dynamics study of the site, map solar angles throughout the year, and analyse local weather data. This is not additional work — it is the foundation of design.`,
    category: "blog",
    coverGradient: "from-sky-200 via-cyan-100 to-blue-200",
    tags: ["Climate", "Research"],
    publishedAt: "2024-04-12",
    updatedAt: "2024-04-12",
    published: true,
    author: "Lê Đức Hùng",
    location: "",
    year: "",
    area: "",
  },
];
