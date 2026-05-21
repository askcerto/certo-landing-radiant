import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { SolutionContent } from '@/data/solutions'
import { URLS } from '@/utils/constants'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

function Hero({ solution }: { solution: SolutionContent }) {
  return (
    <div className="relative">
      <Gradient className="absolute inset-0 ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href={URLS.CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
            >
              Book a demo - see Certo&apos;s compliance checks in action
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-28 md:pb-40">
          <p className="font-mono text-xs/5 font-semibold tracking-widest text-gray-950/70 uppercase">
            {solution.hero.eyebrow}
          </p>
          <h1 className="mt-6 font-display text-5xl/[1] font-medium tracking-tight text-balance text-gray-950 sm:text-7xl/[0.95] md:text-8xl/[0.9]">
            {solution.hero.title}
          </h1>
          <p className="mt-8 max-w-2xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            {solution.hero.description}
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button
              href={URLS.CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a demo
            </Button>
            <Button variant="secondary" href="#capabilities">
              See how it works
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function Challenges({ solution }: { solution: SolutionContent }) {
  return (
    <Container className="mt-32">
      <Subheading>The reality on the ground</Subheading>
      <Heading as="h2" className="mt-2 max-w-3xl">
        What teams in this space tell us
      </Heading>
      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {solution.challenges.map((challenge) => (
          <div
            key={challenge.title}
            className="rounded-2xl bg-white p-8 shadow-xs ring-1 ring-black/5"
          >
            <h3 className="text-xl font-medium tracking-tight text-gray-950">
              {challenge.title}
            </h3>
            <p className="mt-4 text-sm/6 text-gray-600">
              {challenge.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function Capabilities({ solution }: { solution: SolutionContent }) {
  return (
    <div id="capabilities" className="mx-2 mt-32 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>How Certo helps</Subheading>
        <Heading as="h2" dark className="mt-2 max-w-3xl">
          Capabilities purpose-built for {solution.shortName.toLowerCase()}
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {solution.capabilities.map((cap) => (
            <div
              key={cap.title}
              className="rounded-2xl bg-gray-800 p-8 ring-1 ring-white/15"
            >
              <p className="font-mono text-xs/5 font-semibold tracking-widest text-gray-400 uppercase">
                {cap.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-medium tracking-tight text-white">
                {cap.title}
              </h3>
              <p className="mt-3 text-sm/6 text-gray-400">{cap.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function CTA({ solution }: { solution: SolutionContent }) {
  return (
    <Container className="mt-32">
      <div className="rounded-4xl bg-gray-950 px-8 py-20 text-center sm:px-16">
        <Lead className="mx-auto max-w-2xl text-white">{solution.tagline}</Lead>
        <p className="mx-auto mt-6 max-w-xl text-sm/6 text-gray-400">
          See how Certo runs compliance for teams in your space. A live demo
          tailored to your products takes under 30 minutes.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href={URLS.CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a demo
          </Button>
          <Link
            href="/solutions"
            className="text-sm/6 font-medium text-white data-hover:text-white/75"
          >
            Explore other solutions →
          </Link>
        </div>
      </div>
    </Container>
  )
}

export function SolutionPage({ solution }: { solution: SolutionContent }) {
  return (
    <div className="overflow-hidden">
      <Hero solution={solution} />
      <main>
        <Challenges solution={solution} />
        <Capabilities solution={solution} />
        <CTA solution={solution} />
      </main>
      <div className="mt-32" />
      <Footer />
    </div>
  )
}
