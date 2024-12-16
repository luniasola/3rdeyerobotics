import * as React from 'react'

import { Slot }                   from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { classNames } from '@/components/utility'

export const ButtonVariant = cva('inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-sm font-normal transition duration-150 hover:ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none motion-reduce:hover:transform-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0', {
    variants : {
        appearance : {
            primary : 'hover:bg-primary/90 active:bg-primary/75 bg-primary text-white hover:ring-orange-500/50 focus-visible:ring focus-visible:ring-orange-500/50 active:ring-0',
            white   : 'hover:bg-primary/90 bg-white text-primary hover:ring-white/50 focus-visible:ring focus-visible:ring-white/50 active:bg-white/75 active:ring-0',
            outline : 'border-[1.5px] bg-transparent hover:text-black hover:ring-gray-200/65 focus-visible:ring focus-visible:ring-gray-200/65 active:bg-gray-200 active:ring-0 dark:border-gray-100/25 dark:text-white dark:hover:bg-gray-100/15 dark:hover:text-white dark:hover:ring-gray-100/15 dark:focus-visible:ring-gray-100/15 dark:active:bg-gray-100/25',
            ghost   : 'bg-transparent hover:bg-gray-200/65 hover:text-black hover:ring-gray-200/65 focus-visible:bg-gray-200/65 focus-visible:ring focus-visible:ring-gray-200/65 active:bg-gray-200 dark:text-white dark:hover:bg-gray-100/15 dark:hover:text-white dark:hover:ring-gray-100/15 dark:focus-visible:bg-gray-100/15 dark:focus-visible:ring-gray-100/15 dark:active:bg-gray-100/25',
        },
        size : {
            'xs'  : 'size-6 px-2',
            'sm'  : 'h-8 px-3',
            'md'  : 'h-9 px-4',
            'lg'  : 'h-10 px-5',
            'xl'  : 'h-12 px-6  text-base',
            '2xl' : 'h-14 px-10 text-base',
        },
        shape : {
            square  : 'rounded-none',
            round   : 'rounded-md',
            ellipse : 'rounded-3xl',
            circle  : 'rounded-full',
        },
        icon : {
            true : 'p-0 active:scale-90',
        },
    },
    defaultVariants : {
        appearance : 'primary',
        shape      : 'round',
        size       : 'md',
    },
    compoundVariants : [
        {
            icon      : true,
            size      : 'sm',
            className : 'size-8',
        },
        {
            icon      : true,
            size      : 'md',
            className : 'size-9',
        },
        {
            icon      : true,
            size      : 'lg',
            className : 'size-10',
        },
    ],
})

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariant> {
    appearance? : 'primary' | 'white' | 'outline' | 'ghost',
    size?       : 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    icon?       : boolean,
    asChild?    : boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ appearance, size, icon, shape, className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : 'button'

    return <Component className={classNames(ButtonVariant({ appearance, size, icon, shape, className }))} ref={ref} type={'button'} {...props} />
})

Button.displayName = 'Button'
