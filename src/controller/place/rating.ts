import axios from 'axios';
import { prompt } from 'inquirer';
import { baseurl, loginaxios } from '../..';
import { placeUrl } from './placeUrl';
export async function rating() {
	const rating = await prompt([
		{
			type: 'input',
			name: 'rating',
			message: 'Enter your rating 🔥 ',
		},
		{
			type: 'input',
			name: 'category',
			message: 'Enter your category 💬 ',
		},
		{
			type: 'input',
			name: 'city',
			message: 'Where are you? 🗺️ ',
		},
	]);
	const { data: place } = await loginaxios.get(baseurl + '/placeRouts/rating', {
		params: rating,
	});
	const formattedplace = place.map((c: any) =>
		[
			c.name,
			c.city,
			c.latitude,
			c.longitude,
			c.price,
			c.rating,
			c.openinghours,
			c.radius,
			c.category,
			c.delevryapps,
		].join(' - ')
	);
	const { placeProm } = await prompt([
		{
			type: 'list',
			name: 'placeProm',
			message: 'Do you like the direction? ',
			choices: formattedplace,
		},
	]);
	let xx = placeProm.split(' - ');
	let lat = xx[2];
	let lng = xx[3];
	placeUrl(lat, lng);
} //end of rating
