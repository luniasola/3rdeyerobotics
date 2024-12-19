'use client'

import * as React from 'react'

import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { classNames } from '@/components/utility'

export const Separator = React.forwardRef<React.ElementRef<typeof SeparatorPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>>(({ orientation = 'horizontal', decorative = true, className, ...props }, ref) => (
    <SeparatorPrimitive.Root className={classNames('shrink-0 bg-gray-200 dark:bg-gray-100/5', orientation === 'horizontal' ? 'h-[1.5px] w-full' : 'h-full w-[1.5px]', className)} decorative={decorative} orientation={orientation} ref={ref} {...props} />
))

Separator.displayName = SeparatorPrimitive.Root.displayName
