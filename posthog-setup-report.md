<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of your Next.js portfolio. PostHog is initialized via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), which initializes the client-side SDK before the app loads. Because the project uses `output: "export"` (static site), the PostHog host is set directly to the EU endpoint rather than through a reverse proxy.

Nine events were instrumented across five components, covering the full visitor journey: Hero CTAs → project exploration → contact conversion, plus CV downloads and social link engagement.

| Event | Description | File |
|---|---|---|
| `hero_cta_clicked` | User clicks "Mon parcours" or "Me contacter" CTA in the Hero section | `components/sections/Hero.tsx` |
| `hero_social_link_clicked` | User clicks GitHub, GitLab, or LinkedIn in the Hero section | `components/sections/Hero.tsx` |
| `project_clicked` | User clicks on a project card in the Projects list | `components/sections/Projects.tsx` |
| `project_external_link_clicked` | User clicks a live site, app store, play store, GitHub or GitLab link on a project detail page | `app/projects/[slug]/page.tsx` |
| `contact_email_clicked` | User clicks the email address in the Contact section | `components/sections/Contact.tsx` |
| `contact_social_link_clicked` | User clicks GitHub, GitLab, or LinkedIn in the Contact section | `components/sections/Contact.tsx` |
| `cv_downloaded` | User clicks the CV download button in the Contact section | `components/sections/Contact.tsx` |
| `cv_downloaded` | User clicks the CV download link in the Navbar (desktop or mobile menu) | `components/shared/Navbar.tsx` |
| `nav_contact_clicked` | User clicks "Me contacter" in the Navbar | `components/shared/Navbar.tsx` |

## New files created

- `instrumentation-client.ts` — Client-side PostHog initialization
- `components/projects/ProjectExternalLink.tsx` — Client component wrapping external links with PostHog capture

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://eu.posthog.com/project/100280/dashboard/582034
- **Engagement clés (30 derniers jours)**: https://eu.posthog.com/project/100280/insights/6pFgixZV
- **Entonnoir de conversion visiteur → contact**: https://eu.posthog.com/project/100280/insights/Tj5EieRU
- **Engagement projets**: https://eu.posthog.com/project/100280/insights/gQ27sx8M
- **Source des téléchargements du CV**: https://eu.posthog.com/project/100280/insights/UvYELHBQ
- **Clics réseaux sociaux**: https://eu.posthog.com/project/100280/insights/bPuH2nWz

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
