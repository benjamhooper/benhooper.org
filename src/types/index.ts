export interface Talk {
  title: string
  description?: string
  event?: string
  year?: number
}

export interface FocusArea {
  title: string
  description: string
  icon: string
}

export interface SocialLink {
  platform: string
  href: string
  label: string
}
