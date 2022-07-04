import axios from 'axios';
import { prompt } from 'inquirer';
import { join } from 'path';
import { baseurl } from '../..';
import { placeUrl } from './placeUrl';

export async function searchPlace() {
	console.log('searching place');
	const query = await prompt([
		{
			type: 'input',
			name: 'name',
			message: 'Enter name to search 🔤 ',
		},
	]);

	const { data: place } = await axios.get(baseurl + '/placeRouts/place', {
		params: query,
		headers: {
			token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhoIiwiaWF0IjoxNjU2OTIzMjgzfQ.wRbuL4FU5RY037pOU1rOPN1ZLTOSTgUVI1YZUy0y3Ag`,
		},
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
			//userfavs: c.userfavs,
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
}
