import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { SolutionsSection } from '@/components/solutions-section'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { VideoSection } from '@/components/video-section'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'AI compliance agents for consumer products. Automate ingredient verification, label claims, packaging compliance, and supplier documentation across global regulations.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="https://calendly.com/bastien-askcerto/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
            >
              Book a demo - see Certo&apos;s compliance checks in action
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Stay compliant.
          </h1>
          <p className="mt-8 max-w-xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Certo <strong className="font-semibold text-gray-950">AI compliance agents</strong> turns ever-<strong className="font-semibold text-gray-950">changing</strong> global <strong className="font-semibold text-gray-950">regulations</strong> into dynamic,
            product-specific checks, so you can move <strong className="font-semibold text-gray-950">faster</strong> with <strong className="font-semibold text-gray-950">less risk</strong>.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button
              href="https://calendly.com/bastien-askcerto/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a demo
            </Button>
            {/* <Button variant="secondary" href="#how-it-works">
              See how it works
            </Button> */}
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          Compliance automated at scale across global regulations
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-144 sm:h-auto sm:w-304"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Compliance</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        AI Agents for Every Regulatory Workflow
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Ingestion"
          title="Turn files into facts"
          description="Upload product and regulatory documents. Certo extracts and structures key data, from ingredients and CAS to claims and certificates, then validates it against applicable rules with exact source citations."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/profile.png)] bg-size-[792px_446px] bg-position-[left_-210px_top_-80px] bg-no-repeat sm:bg-position-[left_-50px_top_-80px]" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Formula"
          title="Explainable formula checks"
          description="Check ingredients and totals against market rules with detailed justifications. Each issue includes the relevant regulation and rule citation to support fast, confident decisions."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-size-[800px_465px] bg-position-[left_-38px_top_-25px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Documents"
          title="Auto-generate compliance files"
          description="Generate regulator-grade documents like SDS, PIF, and CPSR with required data and citations for submissions."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/down-land.png)] bg-size-[825px_465px] bg-position-[left_-10px_top_-45px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Regulations"
          title="Scan applicable regulations"
          description="Automatically map your product to latest applicable regulations and retailer policies by market, then automatically run the checks that apply."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Coverage"
          title="Global coverage."
          description="Understand market readiness by region, with effective dates and local exceptions surfaced automatically."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Operations</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Run compliance operations with clarity
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Materials"
            title="Manage raw materials"
            description="Ingest supplier documents, structure key data, and unify records by INCI and supplier. Surface compliance gaps across allergens, constituents, and impurities while tracking versions, approvals, and a full audit trail."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Updates"
            title="Live regulatory feeds"
            description="Continuously monitor new regulations from official sources on a daily basis so you don't miss any changes."
            graphic={<LogoTimeline />}
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Monitoring"
            title="Automatic rechecks"
            description="When a product or regulation changes, related checks run again automatically. See impacted products, effective dates, and required actions."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Impact"
            title="Preview change impact"
            description="Try a new raw material, update a supplier document, or adjust a level and preview affected products and markets. See which checks would fail, which documents need updates, and what tests are required to proceed."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        {/* <Container className="mt-10">
          <LogoCloud />
        </Container> */}
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
        <SolutionsSection />
        <VideoSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
