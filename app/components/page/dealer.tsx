import Link from 'next/link'

import { MapPinned } from 'lucide-react'

import Container               from '@/app/components/global/container'
import { Heading, Chip }       from '@/app/components/global/element'
import { Section, Div }        from '@/components/canggu/block'
import { Heading5, Paragraph } from '@/components/canggu/text'

export default function Industry() {
    return (
        <Section className={'bg-black-200 py-10'} id={'dealers'}>
            <Container className={'flex-col'}>
                <Div className={'relative grid items-start gap-4 md:grid-cols-2'}>
                    <Chip appearance={'white'} className={''} text={'Dealers'} />
                    <Heading appearance={'white'} className={'text-xl font-light'} separator={false} text={'Contact us to Join our Dealer Network'} />
                    <Chip appearance={'primary'} className={'absolute right-0'} />
                </Div>

                <Div className={'mt-14 grid grid-cols-1 gap-4 gap-y-10 md:grid-cols-2 lg:grid-cols-4'}>
                    <Div className={'flex flex-col gap-2'}>
                        <Heading5 className={'font-semibold text-white'}>SITECH Southwest | Mesa, AZ</Heading5>
                        <Paragraph className={'text-muted'}>555 W. Iron Ave. Mesa, AZ 85210</Paragraph>
                        <Paragraph className={'text-muted'}>Monday - Friday  7am - 4pm</Paragraph>
                        <Paragraph className={'text-muted'}>Main: 602-600-0214</Paragraph>
                        <Paragraph className={'text-muted'}>Support: 1-800-966-9749</Paragraph>

                        <Link className={'my-4 flex flex-row gap-2 text-white'} href={'https://www.google.com/maps?ll=33.384226,-111.84497&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=10834557581996223568'} target={'_blank'}>
                            <MapPinned /> Get Info/Directions
                        </Link>
                    </Div>

                    <Div className={'flex flex-col gap-2'}>
                        <Heading5 className={'font-semibold text-white'}>SITECH Southwest | Yuma, AZ</Heading5>
                        <Paragraph className={'text-muted'}>3885 E. Gila Ridge Rd. Yuma, AZ 85365</Paragraph>
                        <Paragraph className={'text-muted'}>Monday - Friday 7am - 4pm</Paragraph>
                        <Paragraph className={'text-muted'}>By Appointment: 602-600-0214</Paragraph>
                        <Paragraph className={'text-muted'}>&nbsp;</Paragraph>

                        <Link className={'my-4 flex flex-row gap-2 text-white'} href={'https://www.google.com/maps/place/SITECH+Southwest/@32.683882,-114.565377,16z/data=!4m6!3m5!1s0x80d6f60809e84671:0xff080d0b475f0812!8m2!3d32.683882!4d-114.5653767!16s%2Fg%2F1tfls95z?hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'} target={'_blank'}>
                            <MapPinned /> Get Info/Directions
                        </Link>
                    </Div>

                    <Div className={'flex flex-col gap-2'}>
                        <Heading5 className={'font-semibold text-white'}>SITECH Southwest | Henderson, NV</Heading5>
                        <Paragraph className={'text-muted'}>163 N Gibson Rd, Henderson, NV 89014</Paragraph>
                        <Paragraph className={'text-muted'}>Monday - Friday 7am - 4pm</Paragraph>
                        <Paragraph className={'text-muted'}>Main: 602-600-0214</Paragraph>
                        <Paragraph className={'text-muted'}>&nbsp;</Paragraph>

                        <Link className={'my-4 flex flex-row gap-2 text-white'} href={'https://www.google.com/maps?ll=36.038913,-115.030542&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=13483249549775799672'} target={'_blank'}>
                            <MapPinned /> Get Info/Directions
                        </Link>
                    </Div>

                    <Div className={'flex flex-col gap-2'}>
                        <Heading5 className={'font-semibold text-white'}>SITECH Southwest | Reno/Sparks, NV</Heading5>
                        <Paragraph className={'text-muted'}>605 Glendale Ave Suite 107, 89431</Paragraph>
                        <Paragraph className={'text-muted'}>Monday - Friday 7am - 4pm</Paragraph>
                        <Paragraph className={'text-muted'}>Main: 602-600-0214</Paragraph>
                        <Paragraph className={'text-muted'}>&nbsp;</Paragraph>

                        <Link className={'my-4 flex flex-row gap-2 text-white'} href={'https://www.google.com/maps?ll=39.526787,-119.751018&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=14461740761945399688'} target={'_blank'}>
                            <MapPinned /> Get Info/Directions
                        </Link>
                    </Div>
                </Div>
            </Container>
        </Section>
    )
}
