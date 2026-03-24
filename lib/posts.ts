export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: "project" | "blog";
  coverImage: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  published: boolean;
  author: string;
}

export const defaultPosts: Post[] = [
  {
    id: "1",
    title: "The Void House – Minimalist Living in Hanoi",
    slug: "void-house-hanoi",
    excerpt:
      "A residence that embraces negative space as a design element, creating a dialogue between emptiness and form in the heart of Hanoi.",
    content: `## Concept

The Void House challenges conventional notions of enclosed living by introducing deliberate voids — large, open-air courtyards that punctuate the interior spaces. These absences are not wasted space; they are the soul of the architecture.

## Design Philosophy

Working within a 5x20m urban plot, the design stacks three levels around a central void that draws light deep into the plan. The structural language is raw concrete, softened by tropical planting cascading down the void walls.

## Materials

- Exposed board-formed concrete
- Weathering steel accents
- Locally sourced stone flooring
- Bamboo screen panels

## Recognition

Winner of the Vietnam Architecture Award 2024 in the Residential category.`,
    category: "project",
    coverImage: "/images/void-house.jpg",
    tags: ["residential", "hanoi", "concrete", "minimalism"],
    publishedAt: "2024-11-15",
    updatedAt: "2024-11-15",
    published: true,
    author: "Void Architects",
  },
  {
    id: "2",
    title: "Studio Thành – Creative Hub in Ho Chi Minh City",
    slug: "studio-thanh-hcmc",
    excerpt:
      "A converted warehouse transformed into a creative studio that retains the raw industrial character while introducing precision craft details.",
    content: `## Brief

The client — a multidisciplinary creative collective — needed a space that could function simultaneously as studio, gallery, and event space without losing its identity across modes.

## Response

Rather than subdividing the 800 sqm warehouse, we inserted a series of freestanding timber pavilions within the existing shell. The pavilions define zones without creating boundaries, allowing the space to breathe and adapt.

## Key Moves

A 12-meter skylight was cut through the original roof structure, flooding the central circulation with natural light. The steel moment frame was left entirely exposed, celebrated as the primary architectural element.`,
    category: "project",
    coverImage: "/images/studio-thanh.jpg",
    tags: ["commercial", "adaptive-reuse", "hcmc", "industrial"],
    publishedAt: "2024-08-20",
    updatedAt: "2024-08-20",
    published: true,
    author: "Void Architects",
  },
  {
    id: "3",
    title: "On Emptiness: Architecture as Negative Space",
    slug: "on-emptiness-architecture",
    excerpt:
      "A meditation on how the spaces we leave empty define architecture as powerfully as the spaces we fill.",
    content: `In traditional Vietnamese architecture, the courtyard is not merely a practical device for ventilation and light. It is a philosophical position — an acknowledgment that the outside world must be invited in, that the boundary between shelter and sky is negotiable.

We find ourselves returning to this idea constantly in our practice. The question is never simply *what to build*, but *what to leave unbuilt*.

## The Discipline of Subtraction

Western modernism gave us the open plan — the removal of walls as liberation. But there is a more radical act: the removal of roof. Of enclosure itself. When we carve a void into a building's heart, we are not simply solving a climatic problem. We are making a statement about the nature of dwelling.

## Light as Material

A void is not empty. It is full of light, of air, of sound, of weather. These are materials as much as concrete or steel. The architect who works with voids must develop sensitivity to these immaterial presences — must learn to design what cannot be touched.`,
    category: "blog",
    coverImage: "/images/emptiness-essay.jpg",
    tags: ["philosophy", "design-thinking", "vietnamese-architecture"],
    publishedAt: "2024-06-10",
    updatedAt: "2024-06-10",
    published: true,
    author: "Void Architects",
  },
  {
    id: "4",
    title: "Bamboo Pavilion – Temporary Structure for Arts Festival",
    slug: "bamboo-pavilion-arts-festival",
    excerpt:
      "A temporary pavilion constructed from local bamboo that questions the boundary between structure and landscape.",
    content: `## Context

Commissioned for the Hue Festival of Arts and Culture, the pavilion needed to be erected in 3 days by a team of 8 local craftspeople, host events for 2,000 visitors over 2 weeks, and be entirely dismantled and the bamboo reused.

## Structural Logic

The form derives from a study of bamboo's natural bending behaviour. Rather than fighting the material's tendency to curve, the structure celebrates it — each culm follows its natural arc, creating a complex three-dimensional lattice that is both structurally efficient and visually dynamic.

## After the Festival

True to the brief, the bamboo was dismantled and donated to a local school for construction of new classroom furniture. Architecture need not be permanent to be meaningful.`,
    category: "project",
    coverImage: "/images/bamboo-pavilion.jpg",
    tags: ["bamboo", "temporary", "landscape", "hue"],
    publishedAt: "2024-03-05",
    updatedAt: "2024-03-05",
    published: true,
    author: "Void Architects",
  },
  {
    id: "5",
    title: "Rethinking the Vietnamese Shophouse",
    slug: "rethinking-vietnamese-shophouse",
    excerpt:
      "The shophouse is the DNA of Vietnamese urbanism. How do we evolve this typology for contemporary life without erasing its essence?",
    content: `The tube house — nhà ống — is everywhere in Vietnamese cities. Narrow, deep, stacked. Born of colonial land-tax policies that penalised street frontage, it became the defining unit of Vietnamese urban life.

## The Problem

Contemporary life has different demands. We work from home. We need more natural light. We want connection to outdoor space. The 4x20m tube house, as built across millions of Vietnamese cities, struggles to meet these needs.

## Not Destruction but Evolution

Our approach is not to abandon the shophouse but to interrogate it. What if the 20-meter depth were interrupted — not just by courtyards but by voids, bridges, mezzanines? What if the street frontage were made porous — the shop becoming the living room, the boundary between public and private deliberately blurred?

These are the questions that animate our current residential work.`,
    category: "blog",
    coverImage: "/images/shophouse-essay.jpg",
    tags: ["urbanism", "vietnamese-architecture", "housing", "research"],
    publishedAt: "2024-01-22",
    updatedAt: "2024-01-22",
    published: true,
    author: "Void Architects",
  },
];
