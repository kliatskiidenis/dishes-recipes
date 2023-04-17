import React from 'react';
import DishesList from "@/components/DishesList";

const fetchDishes = async (name) => {
	const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return await res.json();
}

const Page = async ({params}) => {
	const dishesList = await fetchDishes(params.name);
	
	return (
		<DishesList dishesList={dishesList.meals} name={params.name}  />
	);
};

export default Page;