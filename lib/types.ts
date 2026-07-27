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
  readonly link: string
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
  readonly experiences: readonly ExperienceItem[]
  readonly certifications: readonly CertificationItem[]
}
