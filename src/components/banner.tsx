import { URLS } from '@/utils/constants'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { Link } from './link'

// Flip this flag to show/hide the announcement banner site-wide.
export const BANNER_ENABLED = true

const BANNER_TEXT = 'Certo raises $4M to scale AI compliance for consumer products'
const BANNER_HREF = URLS.LINKEDIN

export function Banner() {
  if (!BANNER_ENABLED) return null
  return (
    <div className="bg-gray-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-6 px-4 py-2.5 text-sm/6 sm:px-6 lg:px-8">
        <p className="text-center font-medium">{BANNER_TEXT}</p>
        <Link
          href={BANNER_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-0.5 text-xs font-semibold tracking-wider whitespace-nowrap text-cyan-300 uppercase data-hover:text-cyan-200"
        >
          Read more
          <ChevronRightIcon className="size-4" />
        </Link>
      </div>
    </div>
  )
}
