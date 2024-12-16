'use client'

import { useEffect } from 'react'

import Hero         from '@/app/components/hero'
import { Main }     from '@/components/canggu/block'
import { viewport } from '@/components/utility'

export default function Home() {
    useEffect(() => { viewport() })

    return (
        <Main>
            <Hero />
        </Main>
    )
}
