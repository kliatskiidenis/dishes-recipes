"use client"
import Link from 'next/link';
import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { usePathname, useSearchParams } from 'next/navigation';

const BackNav = () => {
    const pathname = usePathname().split('/');
    console.log(pathname)
    const countryList = pathname[1];
    const currentCountry = pathname[2];
    const currentDish = pathname[3];
    const home = 'Home'

    let url;
    let backText

    if (currentDish) {
        url = `/countries/${currentCountry}`;
        backText = `Back to ${currentCountry} cousines`;
    } else if (currentCountry && !currentDish) {
        url = '/countries';
        backText = 'Back to countries list';
    } else {
        url = '/';
        backText = 'Back to home';
    }

    if(!countryList) {
        return null;
    }
  return (
    <Link  href={url} className='flex items-center gap-2 text-accent cursor-default mb-5'>
        <IoMdArrowRoundBack className=' text-lg' />
        {backText}
    </Link>
  )
}

export default BackNav;
