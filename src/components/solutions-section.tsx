import { Container } from '@/components/container'
import { Link } from '@/components/link'
import { Heading, Subheading } from '@/components/text'
import { businessTypes, industries } from '@/data/solutions'
import { ArrowRightIcon } from '@heroicons/react/16/solid'

function SolutionLink({
  href,
  label,
}: {
  href: string
  label: string
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-xs ring-1 ring-black/5 transition data-hover:shadow-md data-hover:ring-black/10"
    >
      <span className="text-sm/6 font-medium text-gray-950">{label}</span>
      <ArrowRightIcon className="size-4 text-gray-400 transition group-data-hover:translate-x-1 group-data-hover:text-gray-950" />
    </Link>
  )
}

export function SolutionsSection() {
  return (
    <Container className="py-32">
      <Subheading>Solutions</Subheading>
      <Heading as="h2" className="mt-2 max-w-3xl">
        A space for every team in the consumer product chain
      </Heading>
      <p className="mt-4 max-w-2xl text-base/7 text-gray-600">
        Certo adapts to your industry and your role, with tailored workflows,
        rule sets, and documentation paths.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <div className="flex items-baseline justify-between">
            <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase">
              By Industry
            </h3>
            <Link
              href="/solutions"
              className="text-xs font-medium text-gray-500 data-hover:text-gray-700"
            >
              View all →
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {industries.map((solution) => (
              <SolutionLink
                key={solution.slug}
                href={`/solutions/industries/${solution.slug}`}
                label={solution.shortName}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between">
            <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase">
              By Business Type
            </h3>
            <Link
              href="/solutions"
              className="text-xs font-medium text-gray-500 data-hover:text-gray-700"
            >
              View all →
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {businessTypes.map((solution) => (
              <SolutionLink
                key={solution.slug}
                href={`/solutions/business-types/${solution.slug}`}
                label={solution.shortName}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
