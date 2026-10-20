import { useEffect, useMemo, useState } from "react"

interface UseCase {
  id: string
  title: string
  role: string
  summary: string
  challenge: string
  process: string
  outcome: string
}

const useCases: UseCase[] = [
  {
    id: "finpay-onboarding",
    title: "FinPay Onboarding",
    role: "Mobile App UX",
    summary: "Placeholder case study for simplifying account setup with a guided multi-step flow.",
    challenge: "Placeholder challenge: new users drop off before finishing identity verification.",
    process: "Placeholder process: mapped friction points, prototyped alternative layouts, and tested a streamlined form sequence.",
    outcome: "Placeholder outcome: concept demonstrates clearer progress cues and reduced cognitive load."
  },
  {
    id: "health-scheduler",
    title: "Health Scheduler",
    role: "Service Design",
    summary: "Placeholder case study for making appointment booking easier for first-time patients.",
    challenge: "Placeholder challenge: users struggled to compare providers and available time slots.",
    process: "Placeholder process: organized information architecture, built low-fidelity wireframes, and refined interaction patterns.",
    outcome: "Placeholder outcome: redesigned flow supports faster booking and better clarity."
  },
  {
    id: "tripnest-checkout",
    title: "TripNest Checkout",
    role: "E-commerce UX",
    summary: "Placeholder case study focused on reducing checkout friction in a travel booking experience.",
    challenge: "Placeholder challenge: travelers abandoned checkout when pricing details felt unclear.",
    process: "Placeholder process: redesigned page hierarchy, surfaced key details earlier, and validated through usability sessions.",
    outcome: "Placeholder outcome: updated concept encourages confidence before payment."
  },
  {
    id: "bento-admin",
    title: "Bento Admin Tools",
    role: "B2B Dashboard UX",
    summary: "Placeholder case study for improving discoverability of daily tasks in an operations dashboard.",
    challenge: "Placeholder challenge: teams relied on workarounds due to inconsistent navigation patterns.",
    process: "Placeholder process: created one-column mobile-first layouts, prioritized actions, and simplified status views.",
    outcome: "Placeholder outcome: the concept reduces visual clutter and improves task focus."
  }
]

const getCaseIdFromHash = (hash: string) => {
  const match = hash.match(/^#\/use-cases\/([a-z0-9-]+)$/i)
  return match?.[1] ?? null
}

function App() {
  const [hash, setHash] = useState(() => window.location.hash || "#/")

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash || "#/")
    window.addEventListener("hashchange", updateHash)
    return () => window.removeEventListener("hashchange", updateHash)
  }, [])

  const activeUseCase = useMemo(() => {
    const useCaseId = getCaseIdFromHash(hash)
    if (!useCaseId) return null
    return useCases.find((item) => item.id === useCaseId) ?? null
  }, [hash])

  if (activeUseCase) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <main className="mx-auto flex w-full max-w-md flex-col gap-8 px-5 py-8">
          <a
            href="#/"
            className="type-ui inline-flex w-fit items-center gap-2 text-accent hover:text-accent/80"
          >
            ← Back to landing
          </a>

          <header className="space-y-3">
            <p className="type-ui text-muted-foreground">{activeUseCase.role}</p>
            <h1 className="type-h2 text-foreground">{activeUseCase.title}</h1>
            <p className="type-body text-muted-foreground">{activeUseCase.summary}</p>
          </header>

          <div className="aspect-[4/3] rounded-2xl border border-border bg-gradient-to-br from-accent/20 to-primary/10 p-4">
            <div className="flex h-full items-end rounded-xl border border-border/60 bg-card/60 p-4">
              <p className="type-ui text-muted-foreground">Placeholder visual</p>
            </div>
          </div>

          <section className="space-y-6">
            <article className="rounded-2xl border border-border bg-card p-5">
              <h2 className="type-h3 mb-2 text-foreground">Challenge</h2>
              <p className="type-body text-muted-foreground">{activeUseCase.challenge}</p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-5">
              <h2 className="type-h3 mb-2 text-foreground">Process</h2>
              <p className="type-body text-muted-foreground">{activeUseCase.process}</p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-5">
              <h2 className="type-h3 mb-2 text-foreground">Outcome</h2>
              <p className="type-body text-muted-foreground">{activeUseCase.outcome}</p>
            </article>
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex w-full max-w-md flex-col gap-10 px-5 py-8">
        <header className="space-y-4">
          <p className="type-ui text-accent">UX Designer Portfolio</p>
          <h1 className="type-h1 text-foreground">Hi, I’m Alex — I design clear digital experiences.</h1>
          <p className="type-body text-muted-foreground">
            Placeholder intro text about design approach, collaboration style, and product impact.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="type-h2 text-foreground">Use Cases</h2>
          <p className="type-body text-muted-foreground">
            Explore four placeholder case studies. Each card opens an inner detail page.
          </p>
          <ul className="flex flex-col gap-4">
            {useCases.map((useCase, index) => (
              <li key={useCase.id}>
                <a
                  href={`#/use-cases/${useCase.id}`}
                  className="block rounded-2xl border border-border bg-card p-4 transition-colors hover:border-accent/60"
                >
                  <div className="mb-4 aspect-[4/3] rounded-xl border border-border/70 bg-gradient-to-br from-primary/10 to-accent/20 p-4">
                    <div className="type-ui inline-flex rounded-full border border-border bg-background px-3 py-1 text-muted-foreground">
                      Placeholder visual {index + 1}
                    </div>
                  </div>
                  <p className="type-ui mb-1 text-accent">{useCase.role}</p>
                  <h3 className="type-h3 mb-2 text-foreground">{useCase.title}</h3>
                  <p className="type-body text-muted-foreground">{useCase.summary}</p>
                  <p className="type-ui mt-3 text-foreground">View details →</p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App