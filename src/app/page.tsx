import Image from 'next/image'
import bg from '../../public/background/home-background.png'
import Model from './components/home-model/Model'

export default function HomePage() {
    return (
        <section className='w-full h-screen relative'>

            <Model/>
        </section>
    )
}
