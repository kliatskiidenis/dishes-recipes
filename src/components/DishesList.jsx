import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { GiHotMeal } from 'react-icons/gi';

const DishesList = ({ dishesList, name }) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
			{dishesList.map((dish) => (
				<Link key={dish.idMeal} href={`/countries/${name}/${dish.idMeal}`} className='group relative rounded-xl overflow-hidden before:bg-[linear-gradient(180deg,#000000_0%,rgba(0,0,0,0)_62.33%)] before:top-0 before:left-0 before:absolute before:w-full before:h-full before:block] before:z-10'>
					<Image className='group-hover:scale-125 transition-transform duration-300' alt='Dish Image' width={500} height={500} src={dish.strMealThumb} />

					<div className='absolute top-1/4 left-5 max-w-[80%] z-20'>
						<div className='mb-2 flex items-center gap-2'>
							<GiHotMeal className='text-accent text-base'/>
							<p className='text-accent text-sm'>{name} Cuisine</p>
						</div>

						<div className='text-white font-medium text-xl'>{dish.strMeal}</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default DishesList;