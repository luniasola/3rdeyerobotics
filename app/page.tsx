'use client'

import { useEffect } from 'react'

import About        from '@/app/components/page/about'
import Feature      from '@/app/components/page/feature'
import Hero         from '@/app/components/page/hero'
import Industry     from '@/app/components/page/industry'
import Sector       from '@/app/components/page/sector'
import { Main }     from '@/components/canggu/block'
import { viewport } from '@/components/utility'

export default function Home() {
    useEffect(() => { viewport() })

    return (
        <Main id={'luxy'}>
            <Hero />
            <Feature />
            <Sector />
            <Industry />
            <About />
        </Main>
    )
}
