'use client'

import { businessTypes, industries } from '@/data/solutions'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'

const links = [{ href: '/company', label: 'Company' }]

function SolutionsMenu() {
  return (
    <Popover className="relative flex">
      <PopoverButton className="flex items-center gap-1 px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5 focus:outline-none">
        Solutions
        <ChevronDownIcon className="size-4 transition data-[open]:rotate-180" />
      </PopoverButton>
      <PopoverPanel
        anchor={{ to: 'bottom end', gap: 8 }}
        transition
        className="z-20 w-[680px] origin-top rounded-2xl bg-white p-3 shadow-xl ring-1 ring-black/5 transition duration-150 ease-out data-closed:scale-95 data-closed:opacity-0"
      >
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-gray-50 p-5">
            <p className="px-2 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase">
              By Industry
            </p>
            <ul className="mt-3 flex flex-col">
              {industries.map((solution) => (
                <li key={solution.slug}>
                  <Link
                    href={`/solutions/industries/${solution.slug}`}
                    className="group flex flex-col gap-0.5 rounded-lg px-2 py-2 data-hover:bg-white"
                  >
                    <span className="text-sm font-medium text-gray-950">
                      {solution.shortName}
                    </span>
                    <span className="text-xs/5 text-gray-500 group-data-hover:text-gray-700">
                      {solution.tagline}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/solutions"
              className="mt-3 inline-flex items-center gap-1 px-2 text-xs font-medium text-gray-500 data-hover:text-gray-950"
            >
              View all solutions →
            </Link>
          </div>
          <div className="rounded-xl bg-gray-50 p-5">
            <p className="px-2 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase">
              By Business Type
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-0.5">
              {businessTypes.map((solution) => (
                <li key={solution.slug}>
                  <Link
                    href={`/solutions/business-types/${solution.slug}`}
                    className="block rounded-lg px-2 py-1.5 text-sm font-medium text-gray-950 data-hover:bg-white"
                  >
                    {solution.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex">
      <PlusGridItem className="relative flex">
        <SolutionsMenu />
      </PlusGridItem>
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5"
          >
            {label}
          </Link>
        </PlusGridItem>
      ))}
      <PlusGridItem className="relative flex">
        <Link
          href="https://calendly.com/bastien-askcerto/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5"
        >
          Schedule a demo
        </Link>
      </PlusGridItem>
      <PlusGridItem className="relative flex">
        <Link
          href="https://demo.askcerto.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5"
        >
          Login
        </Link>
      </PlusGridItem>
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        <motion.div
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.15,
            ease: 'easeInOut',
            rotateX: { duration: 0.3, delay: 0 },
          }}
        >
          <Link
            href="/solutions"
            className="text-base font-medium text-gray-950"
          >
            Solutions
          </Link>
        </motion.div>
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: (linkIndex + 1) * 0.1 },
            }}
            key={href}
          >
            <Link href={href} className="text-base font-medium text-gray-950">
              {label}
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.15,
            ease: 'easeInOut',
            rotateX: { duration: 0.3, delay: (links.length + 1) * 0.1 },
          }}
        >
          <Link
            href="https://calendly.com/bastien-askcerto/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-gray-950"
          >
            Schedule a demo
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.15,
            ease: 'easeInOut',
            rotateX: { duration: 0.3, delay: (links.length + 2) * 0.1 },
          }}
        >
          <Link
            href="https://demo.askcerto.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-gray-950"
          >
            Login
          </Link>
        </motion.div>
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header" className="pt-12 sm:pt-16">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex gap-6">
            <PlusGridItem className="py-3">
              <Link href="/" title="Home">
                <Logo className="h-9" />
              </Link>
            </PlusGridItem>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav />
          <MobileNavButton />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav />
    </Disclosure>
  )
}
