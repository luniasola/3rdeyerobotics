import Image from 'next/image'

import { useEffect, useState } from 'react'

import autoplay from 'embla-carousel-autoplay'

import Container                                                                                     from '@/app/components/global/container'
import { Heading, Chip }                                                                             from '@/app/components/global/element'
import { Section, Div }                                                                              from '@/components/canggu/block'
import { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/canggu/carousel'
import { Heading1, Paragraph }                                                                       from '@/components/canggu/text'

const sectors = [
    {
        image         : '/assets/static/page/homepage/sector/infrastructure-heavy-civil.jpg',
        carouselTitle : 'Heavy Civil',
    },
    {
        image         : '/assets/static/page/homepage/sector/environmental.jpg',
        carouselTitle : 'Environmental',
    },
]

export default function Sector() {
    const [ API, setAPI ] = useState<CarouselApi>()

    const [ carouselCurrent, setCarouselCurrent ] = useState(0)
    const [ carouselCount, setCarouselCount ]     = useState(0)
    const [ carouselTitle, setCarouselTitle ]     = useState(sectors[0]['carouselTitle'])

    useEffect(() => {
        if (!API)
            return

        setCarouselCount(API.scrollSnapList().length)
        setCarouselCurrent(API.selectedScrollSnap() + 1)

        API.on('select', () => {
            const newCurrent = API.selectedScrollSnap() + 1
            
            setCarouselCurrent(newCurrent)
            setCarouselTitle(sectors[newCurrent - 1]?.carouselTitle || '')
        })
    }, [ API, carouselCurrent ])
    
    return (
        <Section className={'pt-4 md:pt-8'} id={'sector'}>
            <Container className={'flex-col'}>
                <Div className={'grid items-start gap-4 md:grid-cols-2'}>
                    <Heading appearance={'primary'} text={'Our Sectors'} />
                    <Heading appearance={'primary'} className={'text-[1.700rem] lg:text-3xl'} separator={false} text={(<>Transforming Safety Across <br /> the Construction Industry</>)} />
                </Div>
            </Container>

            <Carousel className={'mt-6'} opts={{ align : 'start', loop : true }} plugins={[ autoplay({ delay : 5000 }) ]} setApi={setAPI}>
                <CarouselContent>
                    {
                        sectors.map((sector, key) => (
                            <CarouselItem className={'relative'} key={key}>
                                <Image alt={sector.carouselTitle} className={'w-full'} height={1000} src={sector.image} width={1000} />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>

                <Div className={'bottom-0 right-0 w-full bg-white p-4 md:p-8 lg:absolute lg:w-1/2  lg:p-12'}>
                    <Div className={'grid w-full lg:grid-cols-2'}>
                        <Div className={'flex flex-col gap-2.5 pr-6'}>
                            <Chip appearance={'primary'} text={'Our Sectors'} />
                            <Heading1 className={'w-full text-[2.000rem] font-semibold'}>{carouselTitle}</Heading1>
                        </Div>

                        <Div className={'flex flex-col lg:ml-auto lg:items-end'}>
                            <Div className={'relative top-3 ml-auto flex-row items-end lg:top-0'}>
                                <Paragraph>{carouselCurrent}/{carouselCount}</Paragraph>
                            </Div>

                            <Div className={'relative top-2.5 flex flex-row gap-2.5 lg:left-1 lg:top-9'}>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Carousel>
        </Section>
    )
}
