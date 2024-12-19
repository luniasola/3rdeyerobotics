import Image from 'next/image'

import { ArrowRight, Play } from 'lucide-react'
import { motion }           from 'motion/react'

import { Header, Div, Span }  from '@/components/canggu/block'
import { Button }             from '@/components/canggu/button'
import { Heading1, Heading4 } from '@/components/canggu/text'

export default function Hero() {
    return (
        <Header className={'h-screen w-full'}>
            <motion.div animate={{ opacity : 1,  y : 0, height : 0 }} initial={{ opacity : 0, y : -20, height : 0 }} transition={{ type : 'spring', stiffness : 50, damping : 30, duration : 0.5, delay : 0.5 }}>
                <Image alt={'3rd Eye Robotics AI Visualization'} className={'absolute left-0 z-10 hidden h-screen w-full text-clip object-cover object-right-bottom lg:block lg:object-bottom'} height={1000} src={'/assets/static/page/homepage/hero/main.png'} width={1000} priority />
                <Image alt={'3rd Eye Robotics AI Visualization'} className={'absolute left-0 z-10 hidden h-screen w-full text-clip object-cover object-left-bottom md:block lg:hidden'} height={1000} src={'/assets/static/page/homepage/hero/medium.png'} width={1000} priority />
                <Image alt={'3rd Eye Robotics AI Visualization'} className={'absolute left-0 z-10 h-screen w-full text-clip object-cover object-center md:hidden lg:hidden'} height={1000} src={'/assets/static/page/homepage/hero/small.png'} width={1000} priority />
            </motion.div>

            <Div className={'relative z-20 mx-auto flex h-screen max-w-screen-2xl items-center justify-between p-4 align-middle md:p-6 2xl:p-0'}>
                <Div className={'flex flex-col gap-4 md:gap-8'}>
                    <motion.div animate={{ opacity : 1,  y : 0 }} className={'mt-[29.000rem] flex flex-col gap-2 md:mt-0'} initial={{ opacity : 0, y : 20 }} transition={{ type : 'spring', stiffness : 50, damping : 30, duration : 0.5, delay : 0.5 }}>
                        <Heading4 className={'text-xl font-normal text-white'}>AI at Work: Where Vision Meets Safety</Heading4>
                        <Heading1 className={'text-[3.750rem] font-medium leading-tight text-white antialiased md:text-8xl lg:text-[6.500rem]'}>
                            Saving Lives, <br />
                            Reducing Risks.
                        </Heading1>
                    </motion.div>

                    <motion.div animate={{ opacity : 1, y : 0 }} className={'hidden gap-4 md:flex md:flex-row'} initial={{ opacity : 0, y : 20 }} transition={{ type : 'spring', stiffness : 50, damping : 30, duration : 0.5, delay : 0.5 }}>
                        <Button appearance={'primary'} className={'group cursor-pointer'} size={'2xl'}>
                            <Play className={'-ml-5 mr-5 transition-transform duration-300 group-hover:scale-125 group-hover:fill-white'} />
                            <Span>See Our Video</Span>
                        </Button>

                        <Button appearance={'white'} className={'group cursor-pointer'} size={'2xl'}>
                            <ArrowRight className={'-ml-5 mr-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0'} />
                            <Span>Request Demo</Span>
                        </Button>
                    </motion.div>

                    <motion.div animate={{ opacity : 1, y : 0 }} className={'flex flex-row gap-4 md:hidden md:flex-row'} initial={{ opacity : 0, y : 20 }} transition={{ type : 'spring', stiffness : 50, damping : 30, duration : 0.5, delay : 0.5 }}>
                        <Button appearance={'primary'} className={'group cursor-pointer'} size={'xl'}>
                            <Play className={'-ml-2.5 mr-2.5 transition-transform duration-300 group-hover:scale-125 group-hover:fill-white'} />
                            <Span>See Our Video</Span>
                        </Button>

                        <Button appearance={'white'} className={'group cursor-pointer'} size={'xl'}>
                            <ArrowRight className={'-ml-2 mr-2.5 -rotate-45 transition-transform duration-300 group-hover:rotate-0'} />
                            <Span>Request Demo</Span>
                        </Button>
                    </motion.div>

                    <motion.div animate={{ opacity : 1, y : 0 }} className={'absolute bottom-10 mt-auto flex md:bottom-20'} initial={{ opacity : 0, y : -20 }} transition={{ type : 'spring', stiffness : 50, damping : 30, duration : 0.5, delay : 0.5 }}>
                        <Heading4 className={'text-xl font-normal text-white'}>OmniVai®:  Your Safety. Our Mission.</Heading4>
                    </motion.div>
                </Div>                
            </Div>
        </Header>
    )
}
