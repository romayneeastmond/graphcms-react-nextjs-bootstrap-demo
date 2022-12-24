import React from 'react'
import Link from 'next/link'

const Header = ({ }) => {
    return (
        <header>
            <div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4'>
                <h5 className='my-0 mr-md-auto font-weight-normal'><Link href='/' className='logo'>Home</Link></h5>
                <nav className='my-2 my-md-0 mr-md-3 header-menu'>
                    <Link href='/' className='p-2'>Home</Link> /
                    <Link href='/about' className='p-2'>About</Link> /
                    <Link href='/episodes' className='p-2'>Episodes</Link> /
                    <Link href='/books' className='p-2'>Book List</Link> /
                    <Link href='/contact' className='p-2'>Contact</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
