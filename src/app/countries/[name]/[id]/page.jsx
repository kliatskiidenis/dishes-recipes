import React from 'react';
import DishDetails from "@/components/DishDetails";

const fetchDishDetails= async (id) => {
	const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
	console.log(id);

	if (!res.ok) {
		console.log('https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}');
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	return await res.json();
}

const Page = async ({ params }) => {
	const dishDetails = await fetchDishDetails(params.id);

	return (
		<div>
			<DishDetails data={dishDetails.meals} />
		</div>
	);
};

export default Page;