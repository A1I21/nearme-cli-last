import axios from 'axios';
import { baseurl } from '../..';

export async function getall() {
	const { data: place } = await axios.get(baseurl + '/placeRouts/place');
	const formattedContacts = place.map((c: any) => [c.name, c.rating, c.price, c.category].join(' - '));
	console.log(formattedContacts);
}
