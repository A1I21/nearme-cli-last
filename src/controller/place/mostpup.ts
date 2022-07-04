import axios from 'axios';
import { prompt } from 'inquirer';
import { baseurl, loginaxios } from '../..';
import { placeUrl } from './placeUrl';
export async function mostFavs() {
	console.log('searching place');
	const query = await prompt([
		{
			type: 'input',
			name: 'category',
			message: 'Enter category 🔤 ',
		},
	]);
	try {
		const { data: place } = await loginaxios.get(baseurl + '/placeRouts/searchfav', {
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
				c.radius,
				c.category,
				c.delevryapps,
				c.userfavs,
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
		//get the lat and lng from the xx
		let lat = xx[2];
		let lng = xx[3];
		//console.log(lat, lng);
		placeUrl(lat, lng);
	} catch (err) {
		console.log(err);
	}
}
