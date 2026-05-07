'use client'

import { clsx } from 'clsx'
import { motion, useReducedMotion } from 'framer-motion'

type BlobProps = {
  className: string
  background: string
  animate: { x: string[]; y: string[]; scale: number[] }
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
        'bg-linear-115 from-[#dbeafe] from-28% via-[#60a5fa] via-70% to-[#94a3b8] sm:bg-linear-145',
      )}
    >
      <AuroraBlob
        className="-top-[15%] -left-[10%] h-[75%] w-[65%]"
        background="radial-gradient(circle at center, #ffffff 0%, rgba(255,255,255,0) 65%)"
        opacity={0.85}
        animate={{
          x: ['0%', '40%', '0%'],
          y: ['0%', '-25%', '0%'],
          scale: [1, 1.3, 1],
        }}
        duration={7}
        delay={0}
        shouldAnimate={shouldAnimate}
      />
      <AuroraBlob
        className="-right-[10%] -bottom-[20%] h-[80%] w-[70%]"
        background="radial-gradient(circle at center, #67e8f9 0%, rgba(103,232,249,0) 65%)"
        opacity={0.45}
        animate={{
          x: ['0%', '-25%', '0%'],
          y: ['0%', '15%', '0%'],
          scale: [1, 0.88, 1],
        }}
        duration={9}
        delay={0}
        shouldAnimate={shouldAnimate}
      />
      <AuroraBlob
        className="top-[25%] left-[35%] h-[55%] w-[50%]"
        background="radial-gradient(circle at center, #c7d2fe 0%, rgba(199,210,254,0) 70%)"
        opacity={0.7}
        animate={{
          x: ['0%', '28%', '-20%', '0%'],
          y: ['0%', '-18%', '15%', '0%'],
          scale: [1, 1.25, 0.85, 1],
        }}
        duration={7}
        delay={0}
        shouldAnimate={shouldAnimate}
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
