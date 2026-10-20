import type { LucideIcon } from "lucide-react"

export type BadgeColor = "teal" | "purple" | "blue" | "red" | "pink" | "yellow"

export interface LandingItem {
  readonly title: string
  readonly subtitle: string
}

export interface NavItem {
  readonly name: string
  readonly id: string
  readonly icon: LucideIcon
}

export interface AboutItem {
  readonly icon: LucideIcon
  readonly text: string
}

export interface EducationItem {
  readonly title: string
  readonly description: string
  readonly contents: readonly string[]
}

export interface ProjectItem {
  readonly title: string
  readonly description: string
  readonly content: string
  /** Optional: projects without public material render as a non-clickable card. */
  readonly link?: string
  readonly badges: readonly string[]
  readonly badgeColor: BadgeColor
}

export interface PublicationAuthor {
  readonly name: string
  /** Highlights the site owner in the author list. */
  readonly isMe?: boolean
}

/** Decides the icon of a publication link button. */
export type PublicationLinkKind = "paper" | "code" | "data"

export interface PublicationLink {
  readonly label: string
  readonly url: string
  readonly kind: PublicationLinkKind
}

export interface PublicationItem {
  readonly title: string
  readonly authors: readonly PublicationAuthor[]
  /** Venue line, shown uppercase like the other cards (e.g. "ICSOC 2026 · CORE A · Lodz, Poland"). */
  readonly description: string
  /** e.g. "Accepted" / "Published". */
  readonly status: string
  readonly content: string
  readonly links: readonly PublicationLink[]
  readonly badges: readonly string[]
  readonly badgeColor: BadgeColor
}

export interface ExperienceItem {
  readonly title: string
  readonly description: string
  readonly contents: readonly string[]
}

export interface CertificationItem {
  readonly title: string
  readonly description: string
  readonly content: string
}

export interface SiteData {
  readonly landing: readonly LandingItem[]
  readonly navItems: readonly NavItem[]
  readonly about: readonly AboutItem[]
  readonly education: readonly EducationItem[]
  readonly projects: readonly ProjectItem[]
  readonly publications: readonly PublicationItem[]
  readonly experiences: readonly ExperienceItem[]
  readonly certifications: readonly CertificationItem[]
}
