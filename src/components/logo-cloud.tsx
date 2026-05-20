import { clsx } from 'clsx'

// `visibility` controls how many logos show as the viewport narrows: trailing
// logos are dropped at smaller breakpoints so the row always stays centered and
// never wraps to a second line.
const logos = [
  { alt: 'Carrefour', src: '/logo-cloud/carrefour.png', visibility: '' },
  { alt: 'Horace', src: '/logo-cloud/horace.png', visibility: '' },
  { alt: 'Daphni', src: '/logo-cloud/daphni.png', visibility: '' },
  { alt: 'Cosmed', src: '/logo-cloud/cosmed.png', visibility: 'hidden sm:block' },
  { alt: 'FEBEA', src: '/logo-cloud/febea.png', visibility: 'hidden md:block' },
  { alt: 'PCPC', src: '/logo-cloud/pcpc.png', visibility: 'hidden lg:block' },
  {
    alt: 'Cosmetic Valley',
    src: '/logo-cloud/cosmetic-valley.png',
    visibility: 'hidden xl:block',
  },
]

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex flex-nowrap items-center justify-center gap-x-8 sm:gap-x-10 lg:gap-x-12',
      )}
    >
      {logos.map((logo) => (
        <img
          key={logo.alt}
          alt={logo.alt}
          src={logo.src}
          className={clsx(
            logo.visibility,
            'h-12 w-auto max-w-40 object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-11 lg:h-14',
          )}
        />
      ))}
    </div>
  )
}
