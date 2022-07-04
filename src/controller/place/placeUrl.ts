import axios from 'axios';
import { baseurl, loginaxios } from '../..';

export async function placeUrl(latitude: number, longitude: number) {
	const { data: place } = await loginaxios.get(baseurl + '/placeRouts/getgooglemapsurl', {
		params: {
			latitude,
			longitude,
		},
	});
	console.log(place);
	return place;
}
