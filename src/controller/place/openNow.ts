import { prompt } from 'inquirer';
import { baseurl } from '../..';
import { placeUrl } from './placeUrl';
import { loginaxios } from '../..';

export async function openNow() {
	console.log('searching place');
	const query = await prompt([
		{
			type: 'input',
			name: 'category',
			message: 'Enter name to search 🔤 ',
		},
	]);

	const { data: place } = await loginaxios.get(baseurl + '/placeRouts/isitopen', {
		params: query,
	});
	const formattedPlace = place.map((c: any) =>
		[
			c.name,
			c.city,
			c.latitude,
			c.longitude,
			c.price,
			c.rating,
			c.openinghours,
			c.category,
			c.delevryapps,
			c.usersfavs,
		].join(' - ')
	);

	const { placeProm } = await prompt([
		{
			type: 'list',
			name: 'placeProm',
			message: 'Do you like the direction? ',
			choices: formattedPlace,
		},
	]);
	let xx = placeProm.split(' - ');
	let lat = xx[2];
	let lng = xx[3];
	placeUrl(lat, lng);
}
