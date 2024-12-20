import { ArrowRight } from 'lucide-react'

import Container                  from '@/app/components/global/container'
import Demo                       from '@/app/components/global/demo'
import { Section, Div, Span }     from '@/components/canggu/block'
import { Button }                 from '@/components/canggu/button'
import {  Dialog, DialogTrigger } from '@/components/canggu/dialog'
import { Heading1, Paragraph }    from '@/components/canggu/text'

export default function Action() {
    return (
        <Section className={'bg-[url(/assets/static/global/pattern/line/primary.svg)] bg-cover py-32'} id={'action'}>
            <Container className={'flex-col'}>
                <Div className={'relative flex flex-col items-center gap-6'}>
                    <Div className={'flex flex-col items-center gap-4 text-center'}>
                        <Paragraph className={'rounded-2xl bg-white/25 px-3 py-1 text-sm text-white'}>Learn About Our Vision</Paragraph>
                        <Heading1 className={'text-5xl font-semibold leading-normal text-white lg:text-4xl'}>Want to Learn More About OmniVai®?</Heading1>
                        <Paragraph className={'text-lg leading-relaxed text-white'}>At 3rd Eye Robotics, we’re driven by a mission to save lives and redefine safety in construction.</Paragraph>
                    </Div>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button appearance={'white'} className={'group cursor-pointer'} size={'2xl'}>
                                <ArrowRight className={'-ml-5 mr-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0'} />
                                <Span>Request Demo</Span>
                            </Button>
                        </DialogTrigger>

                        <Demo />
                    </Dialog>
                </Div>
            </Container>
        </Section>
    )
}
