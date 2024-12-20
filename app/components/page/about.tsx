import Image from 'next/image'

import Container                         from '@/app/components/global/container'
import { Heading, Chip }                 from '@/app/components/global/element'
import { Section, Div }                  from '@/components/canggu/block'
import { Separator }                     from '@/components/canggu/separator'
import { Heading2, Heading3, Paragraph } from '@/components/canggu/text'

export default function About() {
    return (
        <Section className={'scroll-m-20 py-10'} id={'about'}>
            <Container className={'flex-col gap-16'}>
                <Div className={'relative grid grid-cols-2 gap-4 md:grid-cols-2'}>
                    <Div>
                        <Chip appearance={'primary'} className={'absolute left-0'} text={'Vision & Mission'} />
                    </Div>

                    <Div>
                        <Heading appearance={'primary'} separator={false} text={'About Us'} />
                    </Div>
                </Div>

                <Separator />

                <Div className={'grid lg:grid-cols-2'}>
                    <Div className={'flex lg:mb-12 lg:pr-12'}>
                        <Image alt={'3rd Eye Robotics AI Visualization'} className={'w-full'} height={1000} src={'/assets/static/page/homepage/about/main.png'} width={1000} priority />
                    </Div>

                    <Div className={'flex flex-col justify-center gap-10 py-8 lg:py-0'}>
                        <Div className={'flex flex-col gap-4'}>
                            <Heading2 className={'font-semibold'}>Our Mission</Heading2>
                            <Heading3>Building Safer Job Sites, One Innovation at a Time</Heading3>
                            <Paragraph className={'leading-loose'}>At 3rd Eye Robotics, our mission is to save lives, reduce risks, and revolutionize job site safety with advanced AI technology. OmniVai® is at the forefront of this mission, providing proactive AI vision solutions that ensure every worker comes home safe.</Paragraph>
                        </Div>

                        <Div className={'flex flex-col gap-4'}>
                            <Heading2 className={'font-semibold'}>Our Vision</Heading2>
                            <Heading3>Transforming the Future of Job Site Safety</Heading3>
                            <Paragraph className={'leading-loose'}>We envision a world where every construction site operates safely and efficiently with the help of intelligent, AI-driven solutions like OmniVai®. At 3rd Eye Robotics, we are committed to creating technologies that redefine safety and mitigates risk.</Paragraph>
                        </Div>

                        <Div className={'flex flex-row items-center gap-5'}>
                            <Image alt={'Associated General Contractors Brand'} className={'w-16'} height={100} src={'/assets/static/global/brand/agc/main.png'} width={100} priority />
                            <Paragraph><strong>3rd Eye Robotics</strong> is a member of the <strong>Associated General Contractors (AGC)</strong>.</Paragraph>
                        </Div>
                    </Div>
                </Div>
            </Container>
        </Section>
    )
}
