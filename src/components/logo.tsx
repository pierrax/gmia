'use client'

import { clsx } from 'clsx'

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/gmai_logo_color.png"
      alt="Good Morning IA Logo"
      className={clsx(className, 'h-8 w-auto')}
    />
  )
}

export function Mark({ className }: { className?: string }) {
  return (
    <img
      src="/gmai_icone.png"
      alt="Good Morning IA Icon"
      className={clsx(className, 'h-8 w-auto')}
    />
  )
}
