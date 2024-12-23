import { Rss, PersonStanding, View, RadioTower, DatabaseZap, ShieldCheck } from 'lucide-react'

import Container                                                        from '@/app/components/global/container'
import { Heading, Chip }                                                from '@/app/components/global/element'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/canggu/accordion'
import { Section, Div }                                                 from '@/components/canggu/block'
import { Separator }                                                    from '@/components/canggu/separator'
import { Heading3, Heading4, Paragraph }                                from '@/components/canggu/text'

export default function Impact() {
    return (
        <Section className={'scroll-m-20 bg-white pt-12'} id={'impact'}>
            <Container className={'flex-col'}>
                <Div className={'flex flex-col gap-8'}>
                    <Div className={'grid grid-cols-1 gap-4 lg:grid-cols-8 lg:gap-16'}>
                        <Div>
                            <Chip appearance={'primary'} text={'Impact'} />
                        </Div>

                        <Div className={'relative -top-1.5 col-span-4 grid'}>
                            <Heading appearance={'primary'} separator={false} text={'AI\'s Impact on Safety'} />
                        </Div>

                        <Div className={'col-span-3'}>
                            <Paragraph>Artificial Intelligence (AI) is transforming safety across industries by introducing proactive, precise, and scalable solutions. <br /><br /> Here is how AI significantly improves safety:</Paragraph>
                        </Div>
                    </Div>

                    <Separator />
                </Div>

                <Accordion defaultValue={'Proactive Hazard Detection'} type={'single'} collapsible>
                    <AccordionItem className={'flex flex-col border-b border-b-gray-200'} value={'Proactive Hazard Detection'}>
                        <AccordionTrigger className={'grid grid-cols-8 py-8 text-left lg:grid-cols-8'}>
                            <Div className={'col-span-1'}>
                                <Rss className={'relative -top-0.5 size-9 text-primary'} />
                            </Div>
                        
                            <Div className={'col-span-7'}>
                                <Heading3 className={'text-xl font-semibold md:text-2xl'}>Proactive Hazard Detection</Heading3>
                            </Div>
                        </AccordionTrigger>

                        <AccordionContent className={'grid grid-cols-2 text-left lg:grid-cols-8'}>
                            <Div />
                        
                            <Div className={'col-span-3 mb-4 flex flex-col gap-4 pr-6'}>
                                <Heading4 className={'font-semibold'}>How It Works</Heading4>
                                <Paragraph className={'leading-loose'}>AI systems analyze real-time data from cameras and sensors to detect hazards, such as workers in unsafe zones, equipment malfunctions, or obstacles.</Paragraph>
                            </Div>

                            <Div className={'col-span-3 mb-4 flex flex-col gap-4'}>
                                <Heading4 className={'text-xl font-semibold'}>Impact</Heading4>
                                <Paragraph className={'leading-loose'}>Incidents are prevented before they occur, reducing accidents and ensuring a safer work environment.</Paragraph>
                            </Div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem className={'flex flex-col border-b border-b-gray-200'} value={'Reduced Human Error'}>
                        <AccordionTrigger className={'grid grid-cols-8 py-8 text-left lg:grid-cols-8'}>
                            <Div className={'col-span-1'}>
                                <PersonStanding className={'relative -top-0.5 size-9 text-primary'} />
                            </Div>
                        
                            <Div className={'col-span-7'}>
                                <Heading3 className={'text-xl font-semibold md:text-2xl'}>Reduced Human Error</Heading3>
                            </Div>
                        </AccordionTrigger>

                        <AccordionContent className={'grid grid-cols-2 text-left lg:grid-cols-8'}>
                            <Div />
                        
                            <Div className={'col-span-3 mb-4 flex flex-col gap-4 pr-6'}>
                                <Heading4 className={'font-semibold'}>How It Works</Heading4>
                                <Paragraph className={'leading-loose'}>AI monitors environments consistently, without the fatigue or oversight limitations of humans.</Paragraph>
                            </Div>

                            <Div className={'col-span-3 mb-4 flex flex-col gap-4'}>
                                <Heading4 className={'text-xl font-semibold'}>Impact</Heading4>
                                <Paragraph className={'leading-loose'}>Human errors, a leading cause of workplace incidents, are minimized.</Paragraph>
                            </Div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem className={'flex flex-col border-b border-b-gray-200'} value={'Enhanced Visibility'}>
                        <AccordionTrigger className={'grid grid-cols-8 py-8 text-left lg:grid-cols-8'}>
                            <Div className={'col-span-1'}>
                                <View className={'relative -top-0.5 size-9 text-primary'} />
                            </Div>
                        
                            <Div className={'col-span-7'}>
                                <Heading3 className={'text-xl font-semibold md:text-2xl'}>Enhanced Visibility</Heading3>
                            </Div>
                        </AccordionTrigger>

                        <AccordionContent className={'grid grid-cols-2 text-left lg:grid-cols-8'}>
                            <Div />
                        
                            <Div className={'col-span-3 mb-4 flex flex-col gap-4 pr-6'}>
                                <Heading4 className={'font-semibold'}>How It Works</Heading4>
                                <Paragraph className={'leading-loose'}>AI-powered vision systems provide operators with enhanced situational awareness, including blind-spot detection and 360-degree monitoring.</Paragraph>
                            </Div>

                            <Div className={'col-span-3 mb-4 flex flex-col gap-4'}>
                                <Heading4 className={'text-xl font-semibold'}>Impact</Heading4>
                                <Paragraph className={'leading-loose'}>Reduces the likelihood of collisions or overlooked hazards.</Paragraph>
                            </Div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem className={'flex flex-col border-b border-b-gray-200'} value={'Real-Time Alerts & Decision-Making'}>
                        <AccordionTrigger className={'grid grid-cols-8 py-8 text-left lg:grid-cols-8'}>
                            <Div className={'col-span-1'}>
                                <RadioTower className={'relative -top-0.5 size-9 text-primary'} />
                            </Div>
                        
                            <Div className={'col-span-7'}>
                                <Heading3 className={'text-xl font-semibold md:text-2xl'}>Real-Time Alerts & Decision-Making</Heading3>
                            </Div>
                        </AccordionTrigger>

                        <AccordionContent className={'grid grid-cols-2 text-left lg:grid-cols-8'}>
                            <Div />
                        
                            <Div className={'col-span-3 mb-4 flex flex-col gap-4 pr-6'}>
                                <Heading4 className={'font-semibold'}>How It Works</Heading4>
                                <Paragraph className={'leading-loose'}>AI processes live data and sends instant alerts or instructions when safety risks are identified.</Paragraph>
                            </Div>

                            <Div className={'col-span-3 mb-4 flex flex-col gap-4'}>
                                <Heading4 className={'text-xl font-semibold'}>Impact</Heading4>
                                <Paragraph className={'leading-loose'}>Faster response times to potential dangers save lives and prevent damage.</Paragraph>
                            </Div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem className={'flex flex-col border-b border-b-gray-200'} value={'Data-Driven Insights'}>
                        <AccordionTrigger className={'grid grid-cols-8 py-8 text-left lg:grid-cols-8'}>
                            <Div className={'col-span-1'}>
                                <DatabaseZap className={'relative -top-0.5 size-9 text-primary'} />
                            </Div>
                        
                            <Div className={'col-span-7'}>
                                <Heading3 className={'text-xl font-semibold md:text-2xl'}>Data-Driven Insights</Heading3>
                            </Div>
                        </AccordionTrigger>

                        <AccordionContent className={'grid grid-cols-2 text-left lg:grid-cols-8'}>
                            <Div />
                        
                            <Div className={'col-span-3 mb-4 flex flex-col gap-4 pr-6'}>
                                <Heading4 className={'font-semibold'}>How It Works</Heading4>
                                <Paragraph className={'leading-loose'}>AI collects and analyzes data over time to identify safety trends and risk patterns.</Paragraph>
                            </Div>

                            <Div className={'col-span-3 mb-4 flex flex-col gap-4'}>
                                <Heading4 className={'text-xl font-semibold'}>Impact</Heading4>
                                <Paragraph className={'leading-loose'}>Enables organizations to refine training programs, improve safety protocols, and allocate resources more effectively.</Paragraph>
                            </Div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem className={'flex flex-col border-b border-b-gray-200'} value={'Equipment Protection'}>
                        <AccordionTrigger className={'grid grid-cols-8 py-8 text-left lg:grid-cols-8'}>
                            <Div className={'col-span-1'}>
                                <ShieldCheck className={'relative -top-0.5 size-9 text-primary'} />
                            </Div>
                        
                            <Div className={'col-span-7'}>
                                <Heading3 className={'text-xl font-semibold md:text-2xl'}>Equipment Protection</Heading3>
                            </Div>
                        </AccordionTrigger>

                        <AccordionContent className={'grid grid-cols-2 text-left lg:grid-cols-8'}>
                            <Div />
                        
                            <Div className={'col-span-3 mb-4 flex flex-col gap-4 pr-6'}>
                                <Heading4 className={'font-semibold'}>How It Works</Heading4>
                                <Paragraph className={'leading-loose'}>AI systems monitor equipment health and usage, preventing misuse or damage.</Paragraph>
                            </Div>

                            <Div className={'col-span-3 mb-4 flex flex-col gap-4'}>
                                <Heading4 className={'text-xl font-semibold'}>Impact</Heading4>
                                <Paragraph className={'leading-loose'}>Reduces downtime, repair costs, and risks associated with equipment failure.</Paragraph>
                            </Div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Container>
        </Section>
    )
}
