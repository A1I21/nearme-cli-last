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
	console.log('Are you hungry?');
	console.log('do you know the best choice \n for you?');
	console.log('Dont worry, I can help you find it!');
	//ask log or reg
	const name = await q1();
	await q2(name);
	await q3();
	//console.log([[5, 4, 6], [2, 1], [1], []].sort((first, second) => second.length - first.length));
}
start();
