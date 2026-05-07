import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { businessTypes, industries } from '@/data/solutions'
import { ArrowRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Certo solutions for cosmetics, supplements, pet care, and the businesses that make consumer products possible: raw material suppliers, contract manufacturers, brand owners, retailers, trade associations, certification bodies, and consulting firms.',
}

function SolutionCard({
  href,
  eyebrow,
  title,
  description,
}: {
  href: string
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between rounded-2xl bg-white p-8 shadow-xs ring-1 ring-black/5 transition data-hover:shadow-md data-hover:ring-black/10"
    >
      <div>
        <p className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase">
          {eyebrow}
        </p>
        <h3 className="mt-3 text-xl font-medium tracking-tight text-gray-950">
          {title}
        </h3>
        <p className="mt-3 text-sm/6 text-gray-600">{description}</p>
      </div>
      <div className="mt-6 flex items-center gap-1 text-sm/6 font-medium text-gray-950">
        Learn more
        <ArrowRightIcon className="size-4 transition group-data-hover:translate-x-1" />
      </div>
    </Link>
  )
}

function Header() {
  return (
    <Container className="mt-16">
      <Subheading>Solutions</Subheading>
      <Heading as="h1" className="mt-2 max-w-4xl">
        Built for every team along the consumer product chain
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Whether you formulate raw materials, manufacture for brands, own a
        portfolio, run retail, set industry standards, certify, or advise,
        Certo turns the regulations that affect your work into live, auditable
        checks.
      </Lead>
    </Container>
  )
}

function IndustriesSection() {
  return (
    <Container className="mt-24">
      <Subheading>By Industry</Subheading>
      <Heading as="h2" className="mt-2 max-w-3xl">
        Find your category
      </Heading>
      <p className="mt-4 max-w-2xl text-base/7 text-gray-600">
        Each industry brings its own regulatory frameworks, claim languages,
        and documentation expectations. Certo speaks them natively.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((solution) => (
          <SolutionCard
            key={solution.slug}
            href={`/solutions/industries/${solution.slug}`}
            eyebrow={`Industry · ${solution.shortName}`}
            title={solution.name}
            description={solution.tagline}
          />
        ))}
      </div>
    </Container>
  )
}

function BusinessTypesSection() {
  return (
    <Container className="mt-24">
      <Subheading>By Business Type</Subheading>
      <Heading as="h2" className="mt-2 max-w-3xl">
        Find your role
      </Heading>
      <p className="mt-4 max-w-2xl text-base/7 text-gray-600">
        Compliance work looks different depending on where you sit in the
        product chain. Certo adapts to how you operate.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {businessTypes.map((solution) => (
          <SolutionCard
            key={solution.slug}
            href={`/solutions/business-types/${solution.slug}`}
            eyebrow={`Business · ${solution.shortName}`}
            title={solution.name}
            description={solution.tagline}
          />
        ))}
      </div>
    </Container>
  )
}

export default function Solutions() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <IndustriesSection />
      <BusinessTypesSection />
      <div className="mt-32" />
      <Footer />
    </main>
  )
}
