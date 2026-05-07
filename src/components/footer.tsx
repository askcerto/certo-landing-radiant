import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { businessTypes, industries } from '@/data/solutions'
import { SITE, URLS } from '@/utils/constants'
import { Button } from './button'
import { Container } from './container'
import { Link } from './link'
import { Logo } from './logo'
import { Subheading } from './text'

function CallToAction() {
  return (
    <div className="relative pt-20 pb-16 text-center sm:py-24">
      <hgroup>
        <Subheading>Ready to get started?</Subheading>
        <p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          Book a demo with our team
          <br />
          and see Certo in action
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-xs text-sm/6 text-gray-500">
        See how Certo automates product compliance checks across global
        regulations.
      </p>
      <div className="mt-6">
        <Button
          className="w-full sm:w-auto"
          href={URLS.CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Demo
        </Button>
      </div>
    </div>
  )
}

function SitemapHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm/6 font-medium text-gray-950/50">{children}</h3>
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-gray-950 data-hover:text-gray-950/75"
      />
    </li>
  )
}

function Sitemap() {
  return (
    <>
      <div>
        <SitemapHeading>Industries</SitemapHeading>
        <SitemapLinks>
          {industries.map((solution) => (
            <SitemapLink
              key={solution.slug}
              href={`/solutions/industries/${solution.slug}`}
            >
              {solution.shortName}
            </SitemapLink>
          ))}
          <SitemapLink href="/solutions">All Solutions</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Business Types</SitemapHeading>
        <SitemapLinks>
          {businessTypes.map((solution) => (
            <SitemapLink
              key={solution.slug}
              href={`/solutions/business-types/${solution.slug}`}
            >
              {solution.shortName}
            </SitemapLink>
          ))}
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Company</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/company">About Us</SitemapLink>
          <SitemapLink
            href={URLS.CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Demo
          </SitemapLink>
          <SitemapLink
            href={`mailto:${SITE.EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Email Us
          </SitemapLink>
          <SitemapLink
            href={URLS.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </SitemapLink>
          <SitemapLink href="/privacy">Privacy Policy</SitemapLink>
          <SitemapLink href="/terms">Terms of Service</SitemapLink>
        </SitemapLinks>
      </div>
    </>
  )
}

function SocialIconEmail(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
    </svg>
  )
}

function SocialIconLinkedIn(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href={`mailto:${SITE.EMAIL}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send us an email"
        className="text-gray-950 data-hover:text-gray-950/75"
      >
        <SocialIconEmail className="size-5" />
      </Link>
      <Link
        href={URLS.LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit us on LinkedIn"
        className="text-gray-950 data-hover:text-gray-950/75"
      >
        <SocialIconLinkedIn className="size-4" />
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-gray-950">
      &copy; {new Date().getFullYear()} Certo
    </div>
  )
}

export function Footer() {
  return (
    <footer>
      <Container>
        <CallToAction />
        <PlusGrid className="pb-16">
          <PlusGridRow>
            <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
              <div className="col-span-2 flex">
                <PlusGridItem className="pt-6 lg:pb-6">
                  <Logo className="h-9" />
                </PlusGridItem>
              </div>
              <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-6">
                <Sitemap />
              </div>
            </div>
          </PlusGridRow>
          <PlusGridRow className="flex justify-between">
            <div>
              <PlusGridItem className="py-3">
                <Copyright />
              </PlusGridItem>
            </div>
            <div className="flex">
              <PlusGridItem className="flex items-center gap-8 py-3">
                <SocialLinks />
              </PlusGridItem>
            </div>
          </PlusGridRow>
        </PlusGrid>
      </Container>
    </footer>
  )
}
