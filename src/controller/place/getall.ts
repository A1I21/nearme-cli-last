import axios from 'axios';
import { baseurl, loginaxios } from '../..';

export async function getall() {
	const { data: place } = await loginaxios.get(baseurl + '/placeRouts/place');
	const formattedContacts = place.map((c: any) => [c.name, c.rating, c.price, c.category].join(' - '));
	console.log(formattedContacts);
}
