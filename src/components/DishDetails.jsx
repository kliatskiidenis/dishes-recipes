import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {IoLogoYoutube} from "react-icons/io";

const DishDetails = ({ data }) => {
	const dish = data[0];

	const dishesKey = Object.keys(dish);
	const ingredientsKeyArr = dishesKey.filter((item) => dish[item] !== '' && item.includes('strIngredient'));
	
	const recipeList = ingredientsKeyArr.map((item, idx) => (
		{ 
			ingredient : dish[`strIngredient${idx + 1}`],
			count: dish[`strMeasure${idx + 1}`],
	 	}		
	));

	console.log(recipeList)


	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-8 pb-7'>
			<div className=''>
				<Image src={dish.strMealThumb} alt='Dish Image' width={500} height={500} className=' rounded-2xl' />
			</div>

			<div>
				<h1 className=' text-accent text-4xl mb-6'>{dish.strMeal }</h1>

				<div className='flex items-center gap-3 mb-4'>
					<p className='border rounded-lg border-solid border-accent px-2 py-2 text-gray'>{dish.strArea}</p>
					<p className='border rounded-lg border-solid border-accent px-2 py-2 text-gray'>{dish.strCategory}</p>
				</div>

				<p className='text-gray mb-6 text-lg leading-[150%]'>{dish.strInstructions}</p>
				
				<ul className='mb-6'>
					{recipeList.map((item) => (
						<li className='' key={`${item.ingredient}_${item.count}`}>
							<span className='text-accent'>{item.ingredient} :</span>
							<span className='text-slate-500 text-sm ml-2'>{item.count}</span>
						</li>
					))}
				</ul>			
				
				<Link href={dish.strYoutube} className='group'>
					<div className='overflow-hidden w-full h-[200px] rounded-2xl relative before:bg-black before:opacity-50 before:top-0 before:left-0 before:absolute before:w-full before:h-full before:block] before:z-10'>
						<Image src={dish.strMealThumb} alt='Dish Image' width={500} height={500} className='w-full max-w-full h-auto group relative rounded-xl overflow-hidden group-hover:scale-125 transition-transform duration-300' />
						<IoLogoYoutube className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-white z-20 group-hover:scale-125 group-hover:text-red-500 transition-all duration-300' />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default DishDetails;