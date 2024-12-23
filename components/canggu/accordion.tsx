'use client'

import * as React from 'react'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown }         from 'lucide-react'

import { Div }        from '@/components/canggu/block'
import { classNames } from '@/components/utility'

export const Accordion     = AccordionPrimitive.Root
export const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item className={classNames('border-b-gray-200 dark:border-b-gray-100/5', className)} ref={ref} {...props} />
))

export const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className={'flex'}>
        <AccordionPrimitive.Trigger className={classNames('relative flex flex-1 py-2 font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:text-primary', className)} ref={ref} {...props}>
            {children}

            <ChevronDown className={'absolute right-0 ml-auto mt-8 size-9 shrink-0 transition-transform duration-200'} />
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
))

export const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content className={'overflow-hidden text-sm transition-all'} ref={ref} {...props}>
        <Div className={classNames('pb-3.5 pt-0', className)}>{children}</Div>
    </AccordionPrimitive.Content>
))

AccordionItem.displayName    = 'AccordionItem'
AccordionContent.displayName = AccordionPrimitive.Content.displayName
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName
