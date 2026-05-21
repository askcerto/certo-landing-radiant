'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { Mark } from './logo'

function Circle({
  size,
  delay,
  opacity,
}: {
  size: number
  delay: number
  opacity: string
}) {
  return (
    <motion.div
      variants={{
        idle: { width: `${size}px`, height: `${size}px` },
        active: {
          width: [`${size}px`, `${size + 10}px`, `${size}px`],
          height: [`${size}px`, `${size + 10}px`, `${size}px`],
          transition: {
            duration: 0.75,
            repeat: Infinity,
            repeatDelay: 1.25,
            ease: 'easeInOut',
            delay,
          },
        },
      }}
      style={{ '--opacity': opacity } as React.CSSProperties}
      className={clsx(
        'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full',
        'bg-[radial-gradient(circle,transparent_25%,color-mix(in_srgb,var(--color-blue-500)_var(--opacity),transparent)_100%)]',
        'ring-1 ring-blue-500/8 ring-inset',
      )}
    />
  )
}

function Circles() {
  return (
    <div className="absolute inset-0">
      <Circle size={264} opacity="3%" delay={0.45} />
      <Circle size={196} opacity="5%" delay={0.3} />
      <Circle size={132} opacity="5%" delay={0.15} />
      <Circle size={80} opacity="10%" delay={0} />
    </div>
  )
}

function MainLogo() {
  return (
    <div className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-500 shadow-sm ring-1 ring-blue-500/20">
      <Mark className="h-9 fill-white" />
    </div>
  )
}

function Logo({
  src,
  left,
  top,
  hover,
  imageSize = 'h-12 w-12',
}: {
  src: string
  left: number
  top: number
  hover: { x: number; y: number; rotate: number; delay: number }
  imageSize?: string
}) {
  return (
    <motion.div
      variants={{
        idle: { x: 0, y: 0, rotate: 0 },
        active: {
          x: [0, hover.x, 0],
          y: [0, hover.y, 0],
          rotate: [0, hover.rotate, 0],
          transition: {
            duration: 0.75,
            repeat: Infinity,
            repeatDelay: 1.25,
            ease: 'easeInOut',
            delay: hover.delay,
          },
        },
      }}
      style={{ left, top } as React.CSSProperties}
      className="absolute flex size-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5"
    >
      <img src={src} alt="" className={imageSize} />
    </motion.div>
  )
}

export function LogoCluster() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden bg-linear-to-b from-white to-gray-50"
    >
      {/* 280px-wide centered stage, mirroring the SVG animations' max-w-[280px] */}
      <div className="absolute top-1/2 left-1/2 size-[280px] -translate-x-1/2 -translate-y-1/2">
        <Circles />
        <MainLogo />
        {/* regulatory logos orbiting the hub at radius ~95px */}
        <Logo
          src="/logo-cluster/ifra.svg"
          left={108}
          top={13}
          hover={{ x: 0, y: -5, rotate: 6, delay: 0.3 }}
          imageSize="h-10 w-10"
        />
        <Logo
          src="/logo-cluster/kr.svg"
          left={190}
          top={60}
          hover={{ x: 5, y: -3, rotate: 5, delay: 0.38 }}
          imageSize="h-12 w-12"
        />
        <Logo
          src="/logo-cluster/eu.svg"
          left={190}
          top={155}
          hover={{ x: 5, y: 3, rotate: 7, delay: 0.2 }}
          imageSize="h-10 w-14"
        />
        <Logo
          src="/logo-cluster/mx.png"
          left={108}
          top={203}
          hover={{ x: 0, y: 5, rotate: 3, delay: 0.15 }}
          imageSize="h-5 w-16"
        />
        <Logo
          src="/logo-cluster/fda.svg"
          left={26}
          top={155}
          hover={{ x: -5, y: 3, rotate: -6, delay: 0.35 }}
          imageSize="h-12 w-12"
        />
        <Logo
          src="/logo-cluster/ch.svg"
          left={26}
          top={60}
          hover={{ x: -5, y: -3, rotate: -6, delay: 0.15 }}
          imageSize="h-10 w-10"
        />
      </div>
    </div>
  )
}
