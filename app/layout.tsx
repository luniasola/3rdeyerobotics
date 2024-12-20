import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'

import '@/app/assets/style/tailwind.css'

import Navigation     from '@/app/components/global/navigation'
import { HTML, Body } from '@/components/canggu/block'

const fontIBMPlexSans = IBM_Plex_Sans({ variable : '--font-ibm-plex-sans', weight : [ '300', '400', '500', '600' ], subsets : [ 'latin' ] })

export const metadata: Metadata = {
    title  	    : '3rd Eye Robotics',
    description : '3rd Eye Robotics Description',
}

export default function RootLayout({ children }: Readonly<{children : React.ReactNode }>) {
    return (
        <HTML className={'scroll-smooth'} lang={'en'}>
            <Body className={fontIBMPlexSans.variable}>
                <Navigation />
                {children}
            </Body>
        </HTML>
    )
}
