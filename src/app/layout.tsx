import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from './components/header/Header'
import { Suspense } from 'react'
import CarShow from './components/car-show/CarShow'

const roboto = Roboto({
    weight: '400',
    subsets: ['vietnamese'],
    variable: '--font-roboto',
})
export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' className={roboto.variable}>
            <body className='bg-background text-foreground'>
                <Header />
                <CarShow />
                <main>{children}</main>
            </body>
        </html>
    )
}
