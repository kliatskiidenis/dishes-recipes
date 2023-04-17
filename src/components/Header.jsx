import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='text-center py-3 text-accent border-b border-solid border-accent mb-4'>
            <Link href='/'>Dishes Recipes DB</Link>
        </div>
    </header>
  )
}

export default Header