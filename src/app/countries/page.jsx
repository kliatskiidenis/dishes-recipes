import Link from 'next/link';
import React from 'react'
import { GiHotMeal } from 'react-icons/gi';

const fetchCountries = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const response = await res.json();

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return await response.meals.map((item) => item.strArea);
}

const page = async () => {
    const countriesList = await fetchCountries();

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {countriesList.map((country, idx) => (
                <Link 
                    className='flex items-center gap-5 justify-between border border-solid border-green py-4 px-5 rounded-xl shadow-[-10px_-10px_30px_#FFFFFF,10px_10px_30px_rgba(174,174,192,0.4)] text-accent overflow-hidden relative' 
                    key={idx} 
                    href={`/countries/${country}`}                    
                >
                    <GiHotMeal size='25px' />
                    {country}
                </Link>
            ))}
        </div>
    )
}

export default page;