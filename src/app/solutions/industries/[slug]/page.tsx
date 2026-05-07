import { SolutionPage } from '@/components/solution-page'
import { findSolution, industries } from '@/data/solutions'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Params = { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  return industries.map((industry) => ({ slug: industry.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const solution = findSolution('industry', slug)
  if (!solution) return {}
  return {
    title: `${solution.name} Compliance`,
    description: solution.tagline,
  }
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const solution = findSolution('industry', slug)
  if (!solution) notFound()
  return <SolutionPage solution={solution} />
}
