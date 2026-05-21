import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { SolutionsSection } from '@/components/solutions-section'
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
      <Gradient className="absolute inset-0 ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="https://calendly.com/bastien-askcerto/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
            >
              Book a demo
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

function UploadDocumentAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-linear-to-b from-white to-gray-50">
      <svg
        viewBox="0 0 240 200"
        className="h-full w-full max-w-[280px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Upload tray */}
        <rect
          x="50"
          y="120"
          width="140"
          height="60"
          rx="10"
          className="fill-gray-100 stroke-gray-300"
          strokeWidth="2"
        />
        <path
          d="M70 150 h20 M70 162 h40"
          className="stroke-gray-300"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Document floating up */}
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 30; 0 -6; 0 30"
            keyTimes="0; 0.5; 1"
            dur="3s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
          />
          <rect
            x="92"
            y="40"
            width="56"
            height="72"
            rx="6"
            className="fill-white stroke-blue-500"
            strokeWidth="2.5"
          />
          {/* folded corner */}
          <path
            d="M134 40 v14 h14"
            className="stroke-blue-500"
            strokeWidth="2.5"
            fill="none"
          />
          {/* text lines */}
          <path
            d="M102 64 h28 M102 74 h36 M102 84 h36 M102 94 h22"
            className="stroke-blue-200"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  )
}

function FormulaCheckAnimation() {
  const rows = [
    { cy: 56, len: 92 },
    { cy: 86, len: 78 },
    { cy: 116, len: 68 },
  ]
  // each check draws during a 15% slice of the 4.5s loop, then holds, then resets
  const drawKeys = [
    { values: '1; 0; 0; 1', keyTimes: '0; 0.15; 0.9; 1' },
    { values: '1; 1; 0; 0; 1', keyTimes: '0; 0.15; 0.3; 0.9; 1' },
    { values: '1; 1; 0; 0; 1', keyTimes: '0; 0.3; 0.45; 0.9; 1' },
  ]
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-linear-to-b from-white to-gray-50">
      <svg
        viewBox="0 0 240 200"
        className="h-full w-full max-w-[280px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {rows.map((row, i) => (
          <g key={i}>
            {/* check badge */}
            <circle
              cx="57"
              cy={row.cy}
              r="12"
              className="fill-blue-50 stroke-blue-200"
              strokeWidth="2"
            />
            <path
              d={`M51 ${row.cy} l4 5 l9 -11`}
              className="stroke-blue-500"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              strokeDasharray={1}
            >
              <animate
                attributeName="stroke-dashoffset"
                values={drawKeys[i].values}
                keyTimes={drawKeys[i].keyTimes}
                dur="4.5s"
                repeatCount="indefinite"
              />
            </path>
            {/* label line */}
            <path
              d={`M82 ${row.cy} h${row.len}`}
              className="stroke-gray-200"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </g>
        ))}

        {/* citation callout */}
        <g>
          <animate
            attributeName="opacity"
            values="0; 0; 1; 1; 0"
            keyTimes="0; 0.45; 0.55; 0.9; 1"
            dur="4.5s"
            repeatCount="indefinite"
          />
          <rect
            x="46"
            y="140"
            width="148"
            height="34"
            rx="8"
            className="fill-white stroke-blue-200"
            strokeWidth="2"
          />
          <circle cx="62" cy="157" r="4" className="fill-blue-500" />
          <text
            x="76"
            y="161"
            className="fill-blue-600"
            fontSize="12"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fontWeight="500"
          >
            cites: Annex V §3
          </text>
        </g>
      </svg>
    </div>
  )
}

function GenerateFilesAnimation() {
  const outputs = [
    {
      cy: 48,
      label: 'SDS',
      conn: { values: '1; 0; 0; 1', keyTimes: '0; 0.13; 0.9; 1' },
      card: { values: '0; 0; 1; 1; 0', keyTimes: '0; 0.13; 0.2; 0.9; 1' },
    },
    {
      cy: 100,
      label: 'DIP',
      conn: { values: '1; 1; 0; 0; 1', keyTimes: '0; 0.2; 0.33; 0.9; 1' },
      card: { values: '0; 0; 1; 1; 0', keyTimes: '0; 0.33; 0.4; 0.9; 1' },
    },
    {
      cy: 152,
      label: 'CPSR',
      width: 80,
      conn: { values: '1; 1; 0; 0; 1', keyTimes: '0; 0.4; 0.53; 0.9; 1' },
      card: { values: '0; 0; 1; 1; 0', keyTimes: '0; 0.53; 0.6; 0.9; 1' },
    },
  ]
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-linear-to-b from-white to-gray-50">
      <svg
        viewBox="0 0 240 200"
        className="h-full w-full max-w-[280px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* connectors (drawn first so cards sit on top) */}
        {outputs.map((o, i) => (
          <path
            key={`c-${i}`}
            d={`M68 100 C110 100, 110 ${o.cy}, 148 ${o.cy}`}
            className="stroke-blue-300"
            strokeWidth="2.5"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray={1}
          >
            <animate
              attributeName="stroke-dashoffset"
              values={o.conn.values}
              keyTimes={o.conn.keyTimes}
              dur="4.5s"
              repeatCount="indefinite"
            />
          </path>
        ))}

        {/* source data file */}
        <g>
          <rect
            x="22"
            y="72"
            width="46"
            height="58"
            rx="6"
            className="fill-blue-500 stroke-blue-500"
            strokeWidth="2"
          />
          <path
            d="M31 88 h28 M31 98 h28 M31 108 h20"
            className="stroke-white/80"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        {/* output files */}
        {outputs.map((o, i) => (
          <g key={`o-${i}`}>
            <animate
              attributeName="opacity"
              values={o.card.values}
              keyTimes={o.card.keyTimes}
              dur="4.5s"
              repeatCount="indefinite"
            />
            <rect
              x="150"
              y={o.cy - 16}
              width={o.width ?? 68}
              height="32"
              rx="7"
              className="fill-white stroke-blue-300"
              strokeWidth="2"
            />
            <circle cx="166" cy={o.cy} r="4" className="fill-blue-500" />
            <text
              x="178"
              y={o.cy + 5}
              className="fill-blue-700"
              fontSize="14"
              fontFamily="ui-sans-serif, system-ui, sans-serif"
              fontWeight="600"
            >
              {o.label}
            </text>
          </g>
        ))}
      </svg>
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
          graphic={<UploadDocumentAnimation />}
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Formula"
          title="Explainable formula checks"
          description="Check ingredients and totals against market rules with detailed justifications. Each issue includes the relevant regulation and rule citation to support fast, confident decisions."
          graphic={<FormulaCheckAnimation />}
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Documents"
          title="Auto-generate compliance files"
          description="Generate regulator-grade documents like SDS, PIF, and CPSR with required data and citations for submissions."
          graphic={<GenerateFilesAnimation />}
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

function RawMaterialsAnimation() {
  // supplier docs on the left feed into the central unified record
  const docs = [
    { y: 22, conn: 'M62 44 C108 44, 108 100, 152 100' },
    { y: 78, conn: 'M62 100 H152' },
    { y: 134, conn: 'M62 156 C108 156, 108 100, 152 100' },
  ]
  const connKeys = [
    { values: '1; 0; 0; 1', keyTimes: '0; 0.12; 0.9; 1' },
    { values: '1; 1; 0; 0; 1', keyTimes: '0; 0.12; 0.24; 0.9; 1' },
    { values: '1; 1; 0; 0; 1', keyTimes: '0; 0.24; 0.36; 0.9; 1' },
  ]
  // each unified row fills in once its supplier doc has connected
  const rows = [
    { cy: 96, status: 'fill-emerald-400', rowKeys: '0; 0.14; 0.2; 0.9; 1' },
    { cy: 122, status: 'fill-amber-400', rowKeys: '0; 0.26; 0.32; 0.9; 1' },
    { cy: 148, status: 'fill-emerald-400', rowKeys: '0; 0.38; 0.44; 0.9; 1' },
  ]
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-linear-to-b from-gray-900 to-gray-800">
      <svg
        viewBox="0 0 360 200"
        className="h-full w-full max-w-[460px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* connectors (drawn first so the panel sits on top) */}
        {docs.map((d, i) => (
          <path
            key={`c-${i}`}
            d={d.conn}
            className="stroke-blue-400"
            strokeWidth="2.5"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray={1}
          >
            <animate
              attributeName="stroke-dashoffset"
              values={connKeys[i].values}
              keyTimes={connKeys[i].keyTimes}
              dur="4.5s"
              repeatCount="indefinite"
            />
          </path>
        ))}

        {/* supplier documents */}
        {docs.map((d, i) => (
          <g key={`d-${i}`}>
            <rect
              x="18"
              y={d.y}
              width="44"
              height="44"
              rx="6"
              className="fill-white/5 stroke-white/15"
              strokeWidth="1.5"
            />
            <circle cx="30" cy={d.y + 12} r="3" className="fill-blue-400" />
            <path
              d={`M40 ${d.y + 12} h12 M27 ${d.y + 24} h25 M27 ${d.y + 32} h18`}
              className="stroke-white/20"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>
        ))}

        {/* unified record panel */}
        <rect
          x="152"
          y="36"
          width="172"
          height="128"
          rx="12"
          className="fill-white/5 stroke-white/15"
          strokeWidth="1.5"
        />
        {/* INCI tag */}
        <rect
          x="166"
          y="50"
          width="46"
          height="20"
          rx="6"
          className="fill-blue-500/20 stroke-blue-400/40"
          strokeWidth="1"
        />
        <text
          x="189"
          y="64"
          textAnchor="middle"
          className="fill-blue-300"
          fontSize="10"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontWeight="600"
        >
          INCI
        </text>
        {/* version badge */}
        <g>
          <animate
            attributeName="opacity"
            values="0; 0; 1; 1; 0"
            keyTimes="0; 0.5; 0.56; 0.9; 1"
            dur="4.5s"
            repeatCount="indefinite"
          />
          <rect
            x="280"
            y="50"
            width="30"
            height="20"
            rx="6"
            className="fill-white/10"
          />
          <text
            x="295"
            y="64"
            textAnchor="middle"
            className="fill-gray-300"
            fontSize="10"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fontWeight="600"
          >
            v3
          </text>
        </g>

        {/* unified data rows */}
        {rows.map((r, i) => (
          <g key={`r-${i}`}>
            <animate
              attributeName="opacity"
              values="0; 0; 1; 1; 0"
              keyTimes={r.rowKeys}
              dur="4.5s"
              repeatCount="indefinite"
            />
            <circle cx="172" cy={r.cy} r="4" className="fill-blue-400" />
            <rect
              x="186"
              y={r.cy - 3}
              width="86"
              height="6"
              rx="3"
              className="fill-white/10"
            />
            <circle cx="300" cy={r.cy} r="4" className={r.status} />
          </g>
        ))}
      </svg>
    </div>
  )
}

function DarkBentoSection() {
  return (
    <div className="mt-2 bg-gray-900 py-32">
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
            graphic={<RawMaterialsAnimation />}
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
        <Container className="mt-[90px]">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
        <SolutionsSection />
        <VideoSection />
      </main>
      <Footer />
    </div>
  )
}
