import Link from 'next/link'

const Header = () => {
    return (
        <div className='header'>
            <Link
                href='/'
                className='flex h-10 w-10 items-center justify-center rounded-lg bg-white font-bold shadow-md'
            >
                <p className='blue-gradient_text'>KK</p>
            </Link>
            <nav className='flex gap-7 text-lg font-medium'>
                <Link href={''} className=''>
                    About
                </Link>
                <Link href={''} className=''>
                    Projects
                </Link>
            </nav>
        </div>
    )
}
export default Header
