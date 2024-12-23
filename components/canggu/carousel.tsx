'use client'

import * as React from 'react'

import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import { ArrowLeft, ArrowRight }                       from 'lucide-react'

import { Div, Span }  from '@/components/canggu/block'
import { Button }     from '@/components/canggu/button'
import { classNames } from '@/components/utility'

export type CarouselApi    = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions       = UseCarouselParameters[0]
type CarouselPlugin        = UseCarouselParameters[1]

type CarouselProps = {
    opts?        : CarouselOptions
    orientation? : 'horizontal' | 'vertical'
    plugins?     : CarouselPlugin
    setApi?      : (api: CarouselApi) => void
}

type CarouselContextProps = {
    carouselRef   : ReturnType<typeof useEmblaCarousel>[0]
    api           : ReturnType<typeof useEmblaCarousel>[1]
    scrollPrev    : () => void
    scrollNext    : () => void
    canScrollPrev : boolean
    canScrollNext : boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

const useCarousel = () => {
    const context = React.useContext(CarouselContext)

    if (!context)
        throw new Error('useCarousel must be used within a <Carousel />')

    return context
}

export const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(({ orientation = 'horizontal', opts, setApi, plugins, className, children, ...props }, ref) => {
    const [ carouselRef, api ] = useEmblaCarousel({ ...opts, axis : orientation === 'horizontal' ? 'x' : 'y' }, plugins)

    const [ canScrollPrev, setCanScrollPrev ] = React.useState(false)
    const [ canScrollNext, setCanScrollNext ] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
        if (!api)
            return

        setCanScrollPrev(api.canScrollPrev())
        setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => api?.scrollPrev(), [ api ])
    const scrollNext = React.useCallback(() => api?.scrollNext(), [ api ])

    const handleKeyDown = React.useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
            event.preventDefault()
            scrollPrev()
        } else if (event.key === 'ArrowRight') {
            event.preventDefault()
            scrollNext()
        }
    }, [ scrollPrev, scrollNext ])

    React.useEffect(() => {
        if (!api || !setApi)
            return

        setApi(api)
    }, [ api, setApi ])

    React.useEffect(() => {
        if (!api)
            return

        onSelect(api)

        api.on('reInit', onSelect)
        api.on('select', onSelect)

        return () => { api?.off('select', onSelect) }
    }, [ api, onSelect ])

    return (
        <CarouselContext.Provider value={{ carouselRef, api : api, opts, orientation : orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'), scrollPrev, scrollNext, canScrollPrev, canScrollNext }}>
            <Div aria-roledescription={'carousel'} className={classNames('relative', className)} ref={ref} role={'region'} onKeyDownCapture={handleKeyDown} {...props}>
                {children}
            </Div>
        </CarouselContext.Provider>
    )
})

export const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel()

    return (
        <Div className={'overflow-hidden'} ref={carouselRef}>
            <Div className={classNames('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', className)} ref={ref} {...props} />
        </Div>
    )
})

export const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
    const { orientation } = useCarousel()

    return <Div aria-roledescription={'slide'} className={classNames('min-w-0 shrink-0 grow-0 basis-full', orientation === 'horizontal' ? 'pl-4' : 'pt-4', className )} ref={ref} role={'group'} {...props} />
})

export const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(({ className, appearance = 'outline', icon = true, ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel()

    return (
        <Button appearance={appearance} className={classNames('size-12', orientation === 'horizontal' ? '-left-12 top-1/2 -translate-y-1/2' : '-top-12 left-1/2 -translate-x-1/2 rotate-90', className)} disabled={!canScrollPrev} icon={icon} ref={ref} shape={'circle'} onClick={scrollPrev} {...props}>
            <ArrowLeft className={'size-4 stroke-primary'} />
            <Span className={'sr-only'}>Previous Slide</Span>
        </Button>
    )
})

export const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(({ className, appearance = 'outline', icon = true, ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel()

    return (
        <Button appearance={appearance} className={classNames('size-12 rounded-full', orientation === 'horizontal' ? '-right-12 top-1/2 -translate-y-1/2' : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90', className)} disabled={!canScrollNext} icon={icon} ref={ref} shape={'circle'} onClick={scrollNext} {...props}>
            <ArrowRight className={'size-4 stroke-primary'} />
            <Span className={'sr-only'}>Next Slide</Span>
        </Button>
    )
})

Carousel.displayName         = 'Carousel'
CarouselContent.displayName  = 'CarouselContent'
CarouselItem.displayName     = 'CarouselItem'
CarouselNext.displayName     = 'CarouselNext'
CarouselPrevious.displayName = 'CarouselPrevious'
