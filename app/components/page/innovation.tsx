import Image from 'next/image'

import { Check, ChevronsRight, ChevronsDown } from 'lucide-react'

import Container                         from '@/app/components/global/container'
import { Heading }                       from '@/app/components/global/element'
import { Section, Div }                  from '@/components/canggu/block'
import { Heading2, Heading4, Paragraph } from '@/components/canggu/text'

export default function Innovation() {
    return (
        <Section className={'scroll-m-20 bg-[url(/assets/static/global/pattern/line/gray.svg)] py-12'} id={'innovation'}>
            <Container className={'flex-col'}>
                <Div className={'flex w-full flex-col items-center justify-center gap-6 text-center md:gap-4'}>
                    <Heading appearance={'primary'} center={true} text={'Safety Innovation'} />

                    <Heading2 className={'text-2xl leading-loose md:text-3xl'}>
                        From Mirrors to AI Vision: <br />
                        The Evolution of Equipment Safety
                    </Heading2>

                    <Paragraph className={'leading-loose'}>
                        For decades, equipment safety has relied on various technologies. But these technologies have limitations. <br />
                        AI vision represents the next leap forward, offering real-time hazard detection and prevention, ensuring unparalleled operator awareness and worker safety.
                    </Paragraph>
                </Div>
            </Container>

            <Container className={'max-w-full flex-col'}>
                <Div className={'mx-auto mb-8 w-full md:mb-52 md:mt-72 md:p-0 lg:mb-44 lg:mt-52 lg:p-4'}>
                    <Div className={'relative'}>
                        <Div className={'absolute left-5 top-0 h-full w-0.5 bg-primary opacity-15 sm:left-0 sm:top-5 sm:h-1 sm:w-full'}></Div>

                        <Div className={'relative grid grid-cols-1 gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-0 md:grid-cols-5'}>
                            <Div className={'relative flex flex-row items-center gap-4 sm:flex-col sm:gap-0'}>
                                <Div className={'z-10 flex items-center justify-center rounded-full border-white bg-background p-2 md:size-10'}>
                                    <ChevronsRight className={'hidden size-6 text-black md:flex'} />
                                    <ChevronsDown className={'size-6 text-black md:hidden'} />
                                </Div>

                                <Div className={'border-primary/20 mt-6 hidden rounded-lg bg-white px-4 py-2 backdrop-blur-sm md:flex'}>
                                    <Paragraph className={'text-sm font-medium'}>From Mirrors</Paragraph>
                                </Div>

                                <Div className={'ml-8 flex w-full flex-col gap-5 sm:absolute sm:ml-0 md:top-[-16.500rem] md:ml-4 md:text-center lg:top-[-14.500rem]'}>
                                    <Image alt={'Safety Innovation Mirror Icon'} className={'md:mx-auto'} height={100} src={'/assets/static/page/homepage/innovation/mirror.png'} width={100} />

                                    <Div className={'flex flex-col gap-2'}>
                                        <Heading4 className={'font-semibold'}>Mirrors</Heading4>
                                        <Paragraph className={'text-sm'}>Detects people and objects instantly.</Paragraph>
                                    </Div>
                                </Div>
                            </Div>
                                
                            <Div className={'relative flex flex-row items-center gap-4 sm:flex-col sm:gap-0'}>
                                <Div className={'z-10 -mt-12 flex items-center justify-center rounded-full border-white bg-primary p-2 md:size-10'}>
                                    <Check className={'size-6 text-white'} />
                                </Div>

                                <Div className={'top-6 ml-8 flex w-full flex-col gap-5 sm:absolute sm:ml-0 md:ml-4 md:text-center'}>
                                    <Image alt={'Safety Innovation Mirror Icon'} className={'md:mx-auto'} height={100} src={'/assets/static/page/homepage/innovation/ultrasonic.png'} width={100} />

                                    <Div className={'flex flex-col gap-2'}>
                                        <Heading4 className={'font-semibold'}>Ultrasonic Sensors</Heading4>
                                        <Paragraph className={'text-sm'}>Object detection in close range.</Paragraph>
                                    </Div>
                                </Div>
                            </Div>

                            <Div className={'relative flex flex-row items-center gap-4 sm:flex-col sm:gap-0'}>
                                <Div className={'z-10 -mt-12 flex items-center justify-center rounded-full border-white bg-primary p-2 md:size-10'}>
                                    <Check className={'size-6 text-white'} />
                                </Div>

                                <Div className={'ml-8 flex w-full flex-col gap-5 sm:absolute sm:ml-0 md:top-[-20.000rem] md:ml-4 md:text-center lg:top-[-17.750rem]'}>
                                    <Image alt={'Safety Innovation Backup Cameras Icon'} className={'md:mx-auto'} height={100} src={'/assets/static/page/homepage/innovation/camera.png'} width={100} />

                                    <Div className={'flex flex-col gap-2'}>
                                        <Heading4 className={'font-semibold'}>Backup Cameras</Heading4>
                                        <Paragraph className={'text-sm'}>Enhanced rear visibility with live video.</Paragraph>
                                    </Div>
                                </Div>
                            </Div>

                            <Div className={'relative flex flex-row items-center gap-4 sm:flex-col sm:gap-0'}>
                                <Div className={'z-10 -mt-12 flex items-center justify-center rounded-full border-white bg-primary p-2 md:size-10'}>
                                    <Check className={'size-6 text-white'} />
                                </Div>

                                <Div className={'top-6 ml-8 flex w-full flex-col gap-5 sm:absolute sm:ml-0 md:ml-4 md:text-center'}>
                                    <Image alt={'Safety Innovation Radar Icon'} className={'md:mx-auto'} height={100} src={'/assets/static/page/homepage/innovation/radar.png'} width={100} />

                                    <Div className={'flex flex-col gap-2'}>
                                        <Heading4 className={'font-semibold'}>Radar</Heading4>
                                        <Paragraph className={'text-sm'}>Basic detection; limited object differentiation.</Paragraph>
                                    </Div>
                                </Div>
                            </Div>

                            <Div className={'relative flex flex-row items-center gap-4 sm:flex-col sm:gap-0'}>
                                <Div className={'z-10 flex items-center justify-center rounded-full border-primary bg-primary p-2 md:size-10'}>
                                    <Check className={'size-6 text-white'} />
                                </Div>

                                <Div className={'border-primary/20 mt-6 hidden rounded-lg bg-primary px-4 py-2 backdrop-blur-sm md:flex'}>
                                    <Paragraph className={'text-sm font-medium text-white'}>To AI Vision</Paragraph>
                                </Div>

                                <Div className={'ml-8 flex w-full flex-col gap-5 sm:absolute sm:ml-0 md:top-[-17.000rem] md:ml-4 md:text-center lg:top-[-14.500rem]'}>
                                    <Image alt={'Safety Innovation AI Vision Icon'} className={'md:mx-auto'} height={100} src={'/assets/static/page/homepage/innovation/vision.png'} width={100} />

                                    <Div className={'flex flex-col gap-2'}>
                                        <Heading4 className={'font-semibold'}>AI Vision</Heading4>
                                        <Paragraph className={'text-sm'}>Real-time hazard detection, prevention, and intelligent decision-making.</Paragraph>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Container>
        </Section>
    )
}
