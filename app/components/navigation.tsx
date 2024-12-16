'use client'

import Image from 'next/image'

import { ArrowRight } from 'lucide-react'
import { motion }     from 'motion/react'

import { Nav, Div }  from '@/components/canggu/block'
import { Button }    from '@/components/canggu/button'
import { Paragraph } from '@/components/canggu/text'

export default function Navigation() {
    const animationList = { hidden : { opacity : 0, y : -10 }, visible : (index: number) => ({ opacity : 1, y : 0, transition : { delay : index * .2, duration : 0.3, type : 'spring', stiffness : 50, damping : 30 } })}
    
    return (
        <Nav className={'fixed z-50 w-screen p-4 md:p-6 lg:p-8'}>
            <Div className={'mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between'}>
                <motion.div animate={{ opacity : 1, y : 0 }} initial={{ opacity : 0, y : -10 }} transition={{ duration : 0.5 }}>
                    <a className={'flex items-center'} href={''}>
                        <Image alt={'3rd Eye Robotics Visual Brand'} className={'w-32'} height={125} src={'assets/static/brand/3rdeyerobotics/main.svg'} width={125} priority />
                    </a>
                </motion.div>

                <Div className={'hidden w-full md:w-auto lg:block'}>
                    <ul className={'z-50 flex flex-row gap-x-12 rounded-lg font-medium'}>
                        {[ 'Home', 'About', 'Industries', 'Dealers', 'Careers', 'Contact' ].map((item, index) => (
                            <motion.li animate={'visible'} custom={index} exit={'hidden'} initial={'hidden'} key={item} variants={animationList}>
                                <a href={'#'}>
                                    <Paragraph className={'font-normal'}>{item}</Paragraph>
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </Div>

                <motion.div animate={{ opacity : 1, y : 0 }} initial={{ opacity : 0, y : -10 }} transition={{ duration : 0.5, delay : 1.15 }}>
                    <Button appearance={'primary'} className={'group'} size={'xl'}>
                        <ArrowRight className={'-ml-1.5 mr-3.5 -rotate-45 transition-transform duration-300 group-hover:rotate-0'} />
                        Request Demo
                    </Button>
                </motion.div>
            </Div>
        </Nav>
    )
}
