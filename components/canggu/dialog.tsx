'use client'

import * as React from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X }                from 'lucide-react'

import { Div, Span }  from '@/components/canggu/block'
import { classNames } from '@/components/utility'

export const Dialog        = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogPortal  = DialogPrimitive.Portal
export const DialogClose   = DialogPrimitive.Close
export const DialogOverlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay className={classNames('fixed inset-0 z-50 bg-black/50', className)} ref={ref} {...props} />
))

export const DialogHeader = ({ className, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
    <Div className={classNames('flex flex-col text-left', className )} {...props} />
)

export const DialogTitle = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title className={classNames('scroll-m-20 text-lg font-semibold leading-normal tracking-normal text-black dark:text-white', className)} ref={ref} {...props} />
))

export const DialogDescription = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Description>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description className={classNames('scroll-m-20 text-sm font-normal leading-normal tracking-normal text-muted dark:text-muted', className)} ref={ref} {...props} />
))

export const DialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(({ className, children, ...props }, ref) => (
    <DialogPortal>
        <DialogOverlay />

        <DialogPrimitive.Content className={classNames('fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 border bg-foundation p-6 shadow-lg duration-200 sm:rounded-lg dark:border-foundation', className)} ref={ref} {...props}>
            {children}

            <DialogPrimitive.Close className={'absolute right-5 top-5 rounded-sm opacity-70 ring-offset-foundation transition-opacity hover:opacity-100 focus:outline-none  disabled:pointer-events-none data-[state=open]:text-muted-foreground'}>
                <X className={'relative right-1 top-2 size-5 dark:text-white'} />
                <Span className={'sr-only'}>Close</Span>
            </DialogPrimitive.Close>
        </DialogPrimitive.Content>
    </DialogPortal>
))

export const DialogBody = ({ className, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
    <Div className={classNames('flex flex-col py-4 text-left', className )} {...props} />
)

export const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <Div className={classNames('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
)

DialogOverlay.displayName     = DialogPrimitive.Overlay.displayName
DialogHeader.displayName      = 'DialogHeader'
DialogTitle.displayName       = DialogPrimitive.Title.displayName
DialogDescription.displayName = DialogPrimitive.Description.displayName
DialogContent.displayName     = DialogPrimitive.Content.displayName
DialogBody.displayName        = 'DialogBody'
DialogFooter.displayName      = 'DialogFooter'
