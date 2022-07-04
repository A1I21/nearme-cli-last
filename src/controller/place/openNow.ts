import axios from 'axios';
import { prompt } from 'inquirer';
import { join } from 'path';
import { baseurl } from '../..';
import { userCreate } from '../createUser';
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
	const nn = 'myname';
	//push nn to usersfavs

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
}
