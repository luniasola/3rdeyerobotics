import Image from 'next/image'

import Container               from '@/app/components/global/container'
import { Heading, Chip }       from '@/app/components/global/element'
import { Section, Div }        from '@/components/canggu/block'
import { Heading5, Paragraph } from '@/components/canggu/text'

export default function Feature() {
    return (
        <Section className={'bg-[url(/assets/static/global/pattern/line/primary.svg)] py-8'}>
            <Container className={'flex-col'}>
                <Div className={'flex w-full flex-row items-start justify-between gap-16'}>
                    <Heading appearance={'primary'} text={'Why OmniVai®?'} />
                    <Chip appearance={'primary'} className={'ml-auto'} text={'Feature'} />
                </Div>

                <Div className={'mt-14 grid grid-cols-2 gap-4 gap-y-10 lg:grid-cols-4'}>
                    <Div className={'flex flex-col gap-6'}>
                        <Div>
                            <Image alt={'Real-time Object Detection Icon'} height={100} src={'/assets/static/page/homepage/feature/realtime.png'} width={100} />
                        </Div>

                        <Div className={'flex flex-col gap-1.5'}>
                            <Heading5 className={'font-semibold'}>Real-time Object Detection</Heading5>
                            <Paragraph>Detects people and objects instantly.</Paragraph>
                        </Div>
                    </Div>
                    
                    <Div className={'flex flex-col gap-6'}>
                        <Div>
                            <Image alt={'Configurable Detection Zones Icon'} height={100} src={'/assets/static/page/homepage/feature/detection.png'} width={100} />
                        </Div>

                        <Div className={'flex flex-col gap-1.5'}>
                            <Heading5 className={'font-semibold'}>Configurable Detection Zones</Heading5>
                            <Paragraph>Customize for each job site.</Paragraph>
                        </Div>
                    </Div>

                    <Div className={'flex flex-col gap-6'}>
                        <Div>
                            <Image alt={'Remote Safety Management Icon'} height={100} src={'/assets/static/page/homepage/feature/remote.png'} width={100} />
                        </Div>

                        <Div className={'flex flex-col gap-1.5'}>
                            <Heading5 className={'font-semibold'}>Remote Safety Management</Heading5>
                            <Paragraph>Set safety policies from the back office.</Paragraph>
                        </Div>
                    </Div>

                    <Div className={'flex flex-col gap-6'}>
                        <Div>
                            <Image alt={'Advanced Object Detection Icon'} height={100} src={'/assets/static/page/homepage/feature/advanced.png'} width={100} />
                        </Div>

                        <Div className={'flex flex-col gap-1.5'}>
                            <Heading5 className={'font-semibold'}>Advanced Object Detection</Heading5>
                            <Paragraph>Select what matters most with detection for each job task.</Paragraph>
                        </Div>
                    </Div>
                </Div>
            </Container>
        </Section>
    )
}
