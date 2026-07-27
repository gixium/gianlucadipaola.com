import type { BadgeColor } from "./types"

const BADGE_COLOR_MAP: Record<BadgeColor, string> = {
  teal: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
  purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  pink: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  yellow: "bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
}

export function getBadgeColorClasses(color: BadgeColor): string {
  return BADGE_COLOR_MAP[color]
}
