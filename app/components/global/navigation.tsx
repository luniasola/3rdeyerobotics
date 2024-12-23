'use client'

import Image from 'next/image'
import Link  from 'next/link'

import { useEffect, useState } from 'react'

import { ArrowRight, Menu, X }     from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

import Container                 from '@/app/components/global/container'
import Demo                      from '@/app/components/global/demo'
import { Nav, Div }              from '@/components/canggu/block'
import { Button }                from '@/components/canggu/button'
import { Dialog, DialogTrigger } from '@/components/canggu/dialog'
import { Heading1, Paragraph }   from '@/components/canggu/text'
import { classNames }            from '@/components/utility'

const menu = [
    {
        label : 'About',
        href  : '#about',
    },
    {
        label : 'Industries',
        href  : '#industry',
    },
    {
        label : 'Safety Innovation',
        href  : '#innovation',
    },
    {
        label : 'Dealers',
        href  : '#dealer',
    },
    {
        label : 'Contact',
        href  : '#contact',
    },
]

export default function GlobalNavigation() {
    const [ active, setActive ]       = useState(false)
    const [ offsetNav, setOffsetNav ] = useState(false)

    const animationOffsetNav = {
        hidden : {
            clipPath : 'inset(0% 0% 100% 0%)',
        },
        visible : {
            clipPath   : 'inset(0% 0% 0% 0%)',
            transition : {
                type      : 'spring',
                stiffness : 75,
                damping   : 12.5,
                mass      : 1,
                delay     : 0.25,
            },
        },
        exit : {
            clipPath   : 'inset(0% 0% 100% 0%)',
            transition : {
                type      : 'spring',
                stiffness : 80,
                damping   : 10,
                mass      : 0.5,
                delay     : 0.25,
            },
        },
    }

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

                {
                    offsetNav ? (
                        <X className={classNames('z-50 size-8 text-white lg:hidden')} onClick={() => setOffsetNav(!offsetNav)} />
                    ) : (
                        <Menu className={classNames('z-50 size-8 text-white lg:hidden', active && 'text-black')} onClick={() => setOffsetNav(!offsetNav)} />
                    )
                }
                
                <AnimatePresence>
                    {
                        offsetNav && (
                            <motion.div
                                animate={'visible'}
                                className={'fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-primary'}
                                exit={'exit'}
                                initial={'hidden'}
                                variants={animationOffsetNav}
                            >
                                <ul className={'z-50 flex flex-col gap-y-2 rounded-lg text-center'}>
                                    {
                                        menu.map((item, key) => (
                                            <motion.li animate={'visible'} custom={key} exit={'hidden'} initial={'hidden'} key={key} variants={animationList}>
                                                <Link href={item.href}>
                                                    <Heading1 className={classNames('text-white')}>{item.label}</Heading1>
                                                </Link>
                                            </motion.li>
                                        ))
                                    }
                                </ul>

                                <Div className={'flex flex-row gap-4'}>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button appearance={'white'} className={'group'} size={'xl'}>
                                                <ArrowRight className={'-ml-1.5 mr-3.5 -rotate-45 transition-transform duration-300 group-hover:rotate-0'} />
                                                Request Demo
                                            </Button>
                                        </DialogTrigger>

                                        <Demo />
                                    </Dialog>

                                    <Button appearance={'white'} className={'group md:flex'} size={'xl'} asChild>
                                        <Link href={'https://fleet.3rdeyerobotics.com/auth/login'}>
                                            <ArrowRight className={'-ml-1.5 mr-3.5 -rotate-45 transition-transform duration-300 group-hover:rotate-0'} />
                                            Sign In
                                        </Link>
                                    </Button>
                                </Div>
                            </motion.div>
                        )
                    }
                </AnimatePresence>

                <motion.div animate={{ opacity : 1, y : 0 }} className={'hidden flex-row gap-2 lg:flex'} initial={{ opacity : 0, y : -10 }} transition={{ duration : 0.5, delay : 1.15 }}>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button appearance={'primary'} className={'group'} size={'xl'}>
                                <ArrowRight className={'-ml-1.5 mr-3.5 -rotate-45 transition-transform duration-300 group-hover:rotate-0'} />
                                Request Demo
                            </Button>
                        </DialogTrigger>

                        <Demo />
                    </Dialog>

                    <Button appearance={'white'} className={'group hidden md:flex'} size={'xl'} asChild>
                        <Link href={'https://fleet.3rdeyerobotics.com/auth/login'}>
                            <ArrowRight className={'-ml-1.5 mr-3.5 -rotate-45 transition-transform duration-300 group-hover:rotate-0'} />
                            Sign In
                        </Link>
                    </Button>
                </motion.div>
            </Container>
        </Nav>
    )
}
