import { SolutionPage } from '@/components/solution-page'
import { businessTypes, findSolution } from '@/data/solutions'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Params = { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  return businessTypes.map((bt) => ({ slug: bt.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const solution = findSolution('business-type', slug)
  if (!solution) return {}
  return {
    title: `${solution.name} Compliance`,
    description: solution.tagline,
  }
}

export default async function BusinessTypePage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const solution = findSolution('business-type', slug)
  if (!solution) notFound()
  return <SolutionPage solution={solution} />
}
