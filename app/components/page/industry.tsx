import Image from 'next/image'

import autoplay from 'embla-carousel-autoplay'

import Container                                   from '@/app/components/global/container'
import { Heading, Chip }                           from '@/app/components/global/element'
import { Section, Div }                            from '@/components/canggu/block'
import { Carousel, CarouselContent, CarouselItem } from '@/components/canggu/carousel'

const industries = [
    {
        title : 'Oil & Gas Pipeline',
        image : '/assets/static/page/homepage/industry/oil-gas.jpg',
    },

    {
        title : 'Forestry',
        image : '/assets/static/page/homepage/industry/forestry.jpg',
    },
    {
        title : 'Construction',
        image : '/assets/static/page/homepage/industry/construction.jpg',
    },
]

export default function Industry() {
    return (
        <Section className={'scroll-m-20 bg-[url(/assets/static/global/pattern/line/gray.svg)] bg-cover py-10'} id={'industry'}>
            <Container className={'flex-col'}>
                <Div className={'relative grid items-start gap-4 md:grid-cols-2'}>
                    <Heading appearance={'primary'} text={'Industries'} />
                    <Heading appearance={'primary'} className={'text-[1.700rem] lg:text-3xl'} separator={false} text={(<>Reimagining Safety for <br /> Every Industry</>)} />
                    <Chip appearance={'primary'} className={'absolute right-0'} />
                </Div>
            </Container>

            <Carousel className={'px-4 md:my-8'} opts={{ align : 'start', loop : true }} plugins={[ autoplay({ delay : 2000 }) ]}>
                <CarouselContent>
                    {
                        industries.map((industry, key) => (
                            <CarouselItem className={'flex flex-col gap-4 md:basis-1/2 lg:basis-1/2'} key={key}>
                                <Image alt={industry.title} className={'w-full object-cover'} height={1000} src={industry.image} width={1000} />
                                <Heading appearance={'gray'} className={'text-2xl'} text={industry.title} />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>
        </Section>
    )
}
