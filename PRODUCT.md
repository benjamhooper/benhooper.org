# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences, all arriving to vet Ben Hooper before acting:
- Prospective consulting clients: technology leaders and engineering teams who want to know if Ben is credible, then move on to StackShift.
- Conference and event organizers: deciding whether to invite Ben to speak, using the speaking page, Sessionize profile, or the contact form.
- Peers and recruiters: checking background via about page, resume, LinkedIn, and GitHub.

## Product Purpose

benhooper.org is Ben Hooper's personal site. It establishes who Ben is (cloud architect, engineering leader, conference speaker, Kansas-based) and routes visitors to the right next step. Success: a client clicks through to StackShift, an organizer sends a speaking inquiry, or a peer finds the profile they were looking for.

## Positioning

A personal hub that funnels to StackShift (stack-shift.net), Ben's consulting and IT company. Commercial services live there; this site carries the person, the voice, and the speaking. The claim a neighbor could not copy: one practitioner who diagnoses why enterprise systems stop shipping and treats the technical and the human as one problem ("the real problem is rarely the one on the ticket").

## Operating Context

Ben's work spans Azure, AWS, GCP, .NET and the Microsoft enterprise ecosystem, platform engineering, and AI advisory. Speaking profile is hosted on Sessionize; resume is a PDF at /Resume.pdf.

## Capabilities and Constraints

- Next.js (App Router) static export (`output: 'export'`, trailing slashes), Tailwind CSS 4, TypeScript. Deployed to Azure Static Web Apps via GitHub Actions. No server runtime.
- Routes: home, about, speaking, contact, not-found.
- Content lives in `src/content/` (focus areas, talks, social links).
- Offers (via StackShift): Infrastructure & Systems, AI Advisory, Technical Coaching.
- Talk titles currently listed (four); focus areas: Cloud Architecture, DevOps & Platform Engineering, Engineering Leadership, Developer Productivity, AI in Production.

## Brand Commitments

- Names: "Ben Hooper"; "StackShift".
- Voice: first person, dry and plainspoken, practical over theatrical (e.g. "Recovering monolith wrangler", "Practical expertise, not conference theater").

## Evidence on Hand

Real: headshot (`public/images/headshot.png`), resume PDF, Sessionize profile, LinkedIn, GitHub, X profile. Absent and must not be fabricated: testimonials, client logos, case studies, named past conferences or talk dates, metrics.

## Product Principles

1. Get each visitor to their next step fast: StackShift, speaking inquiry, or profile links.
2. Credibility comes from specificity and plain voice, not invented proof.
3. The site is a hub; service detail belongs to StackShift, speaking detail to Sessionize.
4. Stay honest: claim only what Ben can back up.
