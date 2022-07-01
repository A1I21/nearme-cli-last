import axios from 'axios';
import { baseurl } from '../..';

export async function placeUrl(latitude: number, longitude: number) {
	const { data: place } = await axios.get(baseurl + '/placeRouts/getgooglemapsurl', {
		params: {
			latitude,
			longitude,
		},
	});
	console.log(place);
	return place;
}
