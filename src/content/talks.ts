import type { Talk } from '@/types'

// focusAreas names the focus areas (by title, see focusAreas.ts) each talk draws on.
export const talks: Talk[] = [
  {
    title: 'From Zero to Production: Pragmatic Cloud Migrations That Actually Stick',
    focusAreas: ['Cloud Architecture'],
  },
  {
    title: 'Building Developer Platforms People Actually Want to Use',
    focusAreas: ['DevOps & Platform Engineering', 'Developer Productivity'],
  },
  {
    title: 'The Honest Guide to AI in the Enterprise',
    focusAreas: ['AI in Production'],
  },
  {
    title: 'Engineering Culture at Scale: What Nobody Tells You',
    focusAreas: ['Engineering Leadership'],
  },
]
