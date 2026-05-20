'use client'

import { clsx } from 'clsx'
import { motion, useReducedMotion } from 'framer-motion'

// Fine fractal-noise texture used to dither the gradient. Large flat gradient
// fills band into visible (near-horizontal) steps on wide displays because of
// 8-bit color limits — and the heavily-blurred blobs make those transitions
// extra gradual, which is exactly when banding shows most. The noise is
// desaturated (full black<->white) so an `overlay` blend perturbs even light
// blue tones in both directions, scattering the steps.
const NOISE_TEXTURE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

type BlobProps = {
  className: string
  background: string
  animate: {
    x: string[]
    y: string[]
    scale: number[]
    opacity?: number[]
    filter?: string[]
  }
  duration: number
  delay: number
  opacity: number
  shouldAnimate: boolean
}

function AuroraBlob({
  className,
  background,
  animate,
  duration,
  delay,
  opacity,
  shouldAnimate,
}: BlobProps) {
  return (
    <motion.div
      aria-hidden
      className={clsx('pointer-events-none absolute rounded-full blur-2xl', className)}
      // `opacity` here is the static reduced-motion fallback; when animating,
      // the `animate` object's opacity array takes over.
      style={{ background, opacity }}
      animate={shouldAnimate ? animate : undefined}
      transition={
        shouldAnimate
          ? { duration, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay }
          : undefined
      }
    />
  )
}

export function Gradient({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const reducedMotion = useReducedMotion()
  const shouldAnimate = !reducedMotion

  return (
    <div
      {...props}
      className={clsx(
        className,
        'isolate overflow-hidden',
        // Eased multi-stop ramp (no flat plateau, no slope kink) so the gradient
        // has a continuous slope — this removes the Mach-band line that a plain
        // from/via/to gradient produces at its stop boundaries.
        'bg-[linear-gradient(115deg,#dbeafe_0%,#bad7fb_15%,#a1c7f6_30%,#90baee_45%,#86afe3_60%,#85a8d5_75%,#8ba4c5_90%,#94a3b8_100%)]',
        'sm:bg-[linear-gradient(145deg,#dbeafe_0%,#bad7fb_15%,#a1c7f6_30%,#90baee_45%,#86afe3_60%,#85a8d5_75%,#8ba4c5_90%,#94a3b8_100%)]',
      )}
    >
      <AuroraBlob
        className="-top-[15%] -left-[10%] h-[75%] w-[65%]"
        background="radial-gradient(circle at center, #ffffff 0%, rgba(255,255,255,0) 65%)"
        opacity={0.95}
        animate={{
          x: ['0%', '72%', '0%'],
          y: ['0%', '-45%', '0%'],
          scale: [1, 1.5, 1],
          opacity: [0.95, 1, 0.78, 0.95],
        }}
        duration={4.5}
        delay={0}
        shouldAnimate={shouldAnimate}
      />
      <AuroraBlob
        className="-right-[10%] -bottom-[20%] h-[80%] w-[70%]"
        background="radial-gradient(circle at center, #67e8f9 0%, rgba(103,232,249,0) 65%)"
        opacity={0.65}
        animate={{
          x: ['0%', '-52%', '0%'],
          y: ['0%', '32%', '0%'],
          scale: [1, 0.78, 1],
          opacity: [0.65, 0.85, 0.5, 0.65],
          filter: [
            'blur(40px) hue-rotate(0deg)',
            'blur(40px) hue-rotate(18deg)',
            'blur(40px) hue-rotate(0deg)',
          ],
        }}
        duration={7.5}
        delay={0.6}
        shouldAnimate={shouldAnimate}
      />
      <AuroraBlob
        className="top-[25%] left-[35%] h-[55%] w-[50%]"
        background="radial-gradient(circle at center, #c7d2fe 0%, rgba(199,210,254,0) 70%)"
        opacity={0.85}
        animate={{
          x: ['0%', '52%', '-42%', '0%'],
          y: ['0%', '-36%', '30%', '0%'],
          scale: [1, 1.42, 0.72, 1],
          opacity: [0.85, 1, 0.6, 0.85],
          filter: [
            'blur(40px) hue-rotate(0deg)',
            'blur(40px) hue-rotate(-14deg)',
            'blur(40px) hue-rotate(0deg)',
          ],
        }}
        duration={5.5}
        delay={0.3}
        shouldAnimate={shouldAnimate}
      />
      <AuroraBlob
        className="top-[10%] -left-[5%] h-[50%] w-[45%]"
        background="radial-gradient(circle at center, #bfdbfe 0%, rgba(191,219,254,0) 68%)"
        opacity={0.7}
        animate={{
          x: ['0%', '60%', '20%', '0%'],
          y: ['0%', '40%', '70%', '0%'],
          scale: [1, 1.25, 0.85, 1],
          opacity: [0.7, 0.95, 0.55, 0.7],
        }}
        duration={8}
        delay={1.2}
        shouldAnimate={shouldAnimate}
      />
      <AuroraBlob
        className="-bottom-[10%] left-[20%] h-[55%] w-[50%]"
        background="radial-gradient(circle at center, #a5f3fc 0%, rgba(165,243,252,0) 70%)"
        opacity={0.55}
        animate={{
          x: ['0%', '35%', '-25%', '0%'],
          y: ['0%', '-40%', '-15%', '0%'],
          scale: [1, 1.3, 0.9, 1],
          opacity: [0.55, 0.8, 0.4, 0.55],
          filter: [
            'blur(40px) hue-rotate(0deg)',
            'blur(40px) hue-rotate(16deg)',
            'blur(40px) hue-rotate(0deg)',
          ],
        }}
        duration={6.5}
        delay={0.9}
        shouldAnimate={shouldAnimate}
      />
      {/* Dither overlay: sits above the gradient/blobs but below the text
          (the Hero's Container is `relative`, so it paints on top). */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-overlay"
        style={{ backgroundImage: NOISE_TEXTURE }}
      />
      {children}
    </div>
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0',
          // Original gradient: 'bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff]'
          'bg-linear-115 from-[#dbeafe] from-28% via-[#60a5fa] via-70% to-[#94a3b8] sm:bg-linear-145',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}
