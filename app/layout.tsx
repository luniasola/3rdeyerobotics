import type { Metadata } from 'next'
import { Geist } 		 from 'next/font/google'

import '@/app/assets/style/tailwind.css'

const fontGeist = Geist({ variable : '--font-geist-sans', subsets : [ 'latin' ] })

export const metadata: Metadata = {
	title	    : '3rd Eye Robotics',
	description : '3rd Eye Robotics Description',
}

export default function RootLayout({ children }: Readonly<{children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body className={fontGeist.variable + 'antialiased'}>
				{children}
			</body>
		</html>
	)
}
