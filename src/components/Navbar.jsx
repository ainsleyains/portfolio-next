'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
    { url: '/portfolio', title: 'Portfolio' },
    { url: '/contact', title: 'Contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <div className='h-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
            {/* LOGO */}
            <div className=''>
                <Link
                    href='/'
                    className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'
                >
                    <span className='text-white mr-1'>Lama</span>
                    <span className='w-12 h-8 rounded bg-white text-black flex justify-center items-center'>
                        .dev
                    </span>
                </Link>
            </div>
            <div className='hidden md:flex gap-4'>
                {links.map((link) => (
                    <Link
                        key={link.title}
                        href={link.url}
                    >
                        {link.title}
                    </Link>
                ))}
            </div>

            {/* Responsive menu */}
            <div className='md:hidden'>
                {/* Menu button */}
                <button
                    className='w-10 h-8 flex flex-col justify-between z-50 relative'
                    onClick={() => setOpen(!open)}
                >
                    <div className='w-10 h-1 bg-black rounded'></div>
                    <div className='w-10 h-1 bg-black rounded'></div>
                    <div className='w-10 h-1 bg-black rounded'></div>
                </button>
                {/* menu list */}
                {open && (
                    <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>
                        {links.map((link) => (
                            <Link
                                key={link.title}
                                href={link.url}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
