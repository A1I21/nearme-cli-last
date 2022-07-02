import { getall } from './controller/place/getall';
import { searchPlace } from './controller/place/searchPlace';
import { q1 } from './questions/q1';
import { q2 } from './questions/q2';
import { q3 } from './questions/q3';

export const baseurl = 'http://127.0.0.1:3000';

async function start() {
	//put some Gerafics here
	//get GM OR GE from the time of the day
	console.log('----------------------------------------');
	console.log('Hello, I am the Near Me!');
	console.log('----------------------------------------');
	let date = new Date();
	let hour = date.getHours();
	if (hour >= 6 && hour <= 10) {
		console.log('Good morning,🌞 ');
	}
	if (hour >= 10 && hour <= 14) {
		console.log('Good afternoon,🌞');
	}
	if (hour >= 14 || hour <= 5) {
		console.log('Good evening,🌝 ');
	}

	console.log('Are you hungry?');
	console.log('do you know the best choice \n for you?');
	console.log('Dont worry, I can help you find it!');
	const name = await q1();
	await q2(name);
	await q3();
}
start();
