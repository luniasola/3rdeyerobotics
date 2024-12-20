'use client'

import Image from 'next/image'
import Link  from 'next/link'

import { useEffect, useState } from 'react'

import { ArrowRight } from 'lucide-react'
import { motion }     from 'motion/react'

import Container      from '@/app/components/global/container'
import { Nav, Div }   from '@/components/canggu/block'
import { Button }     from '@/components/canggu/button'
import { Paragraph }  from '@/components/canggu/text'
import { classNames } from '@/components/utility'

const menu = [
    {
        label : 'About',
        href  : '#about',
    },
    {
        label : 'Industries',
        href  : '#sector',
    },
    {
        label : 'Safety Innovation',
        href  : '#',
    },
    {
        label : 'Dealers',
        href  : '#',
    },
    {
        label : 'Contact',
        href  : '#',
    },
]

export default function Navigation() {
    const [ active, setActive ] = useState(false)

    const animationList = { hidden : { opacity : 0, y : -10 }, visible : (index: number) => ({ opacity : 1, y : 0, transition : { delay : index * .2, duration : 0.3, type : 'spring', stiffness : 50, damping : 30 } })}

    useEffect(() => {
        const scroll = () => setActive(window.scrollY > 0)

        scroll()
        window.addEventListener('scroll', scroll)

        return () => window.removeEventListener('scroll', scroll)
    }, [])
    
    return (
        <Nav className={classNames('fixed z-50 w-screen scroll-m-40', active && 'bg-white')}>
            <Container className={'flex-wrap items-center justify-between'}>
                <motion.div animate={{ opacity : 1, y : 0 }} initial={{ opacity : 0, y : -10 }} transition={{ duration : 0.5 }}>
                    <a className={'flex items-center'} href={''}>
                        {
                            active ? (
                                <Image alt={'3rd Eye Robotics Visual Brand'} className={'w-32'} height={125} src={'assets/static/global/brand/3rdeyerobotics/main.svg'} width={125} priority />
                            ) : (
                                <Image alt={'3rd Eye Robotics Visual Brand'} className={'w-32'} height={125} src={'assets/static/global/brand/3rdeyerobotics/white.svg'} width={125} priority />
                            )
                        }
                    </a>
                </motion.div>

                <Div className={'hidden w-full md:w-auto lg:block'}>
                    <ul className={'z-50 flex flex-row gap-x-12 rounded-lg font-medium'}>
                        {
                            menu.map((item, key) => (
                                <motion.li animate={'visible'} custom={key} exit={'hidden'} initial={'hidden'} key={key} variants={animationList}>
                                    <Link href={item.href}>
                                        <Paragraph className={classNames('font-normal text-white', active && 'text-black')}>{item.label}</Paragraph>
                                    </Link>
                                </motion.li>
                            ))
                        }
                    </ul>
                </Div>

                <motion.div animate={{ opacity : 1, y : 0 }} initial={{ opacity : 0, y : -10 }} transition={{ duration : 0.5, delay : 1.15 }}>
                    <Button appearance={'primary'} className={'group'} size={'xl'}>
                        <ArrowRight className={'-ml-1.5 mr-3.5 -rotate-45 transition-transform duration-300 group-hover:rotate-0'} />
                        Request Demo
                    </Button>
                </motion.div>
            </Container>
        </Nav>
    )
}
