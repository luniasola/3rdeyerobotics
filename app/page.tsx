'use client'

import { useEffect } from 'react'

import Feature      from '@/app/components/page/feature'
import Hero         from '@/app/components/page/hero'
import { Main }     from '@/components/canggu/block'
import { viewport } from '@/components/utility'

export default function Home() {
    useEffect(() => { viewport() })

    return (
        <Main>
            <Hero />
            <Feature />
        </Main>
    )
}
