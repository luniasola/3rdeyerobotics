'use client'

import { useEffect } from 'react'

import About        from '@/app/components/page/about'
import Action       from '@/app/components/page/action'
import Contact      from '@/app/components/page/contact'
import Dealer       from '@/app/components/page/dealer'
import Feature      from '@/app/components/page/feature'
import Hero         from '@/app/components/page/hero'
import Industry     from '@/app/components/page/industry'
import Innovation   from '@/app/components/page/innovation'
import Sector       from '@/app/components/page/sector'
import { Main }     from '@/components/canggu/block'
import { viewport } from '@/components/utility'

export default function Home() {
    useEffect(() => { viewport() })

    return (
        <Main>
            <Hero />
            <Feature />
            <Innovation />
            <Sector />
            <Industry />
            <About />
            <Contact />
            <Action />
            <Dealer />
        </Main>
    )
}
