import { q1 } from './questions/q1';
import { q2 } from './questions/q2';
import { q3 } from './questions/q3';
import chalk from 'chalk';
import figlet from 'figlet';
import axios from 'axios';

export const baseurl = 'http://127.0.0.1:3000';
export let loginaxios = axios.create({});
async function start() {
	console.log(chalk.blue('----------------------------------------'));
	console.log(chalk.redBright(figlet.textSync('Hello im near me ')));
	console.log(chalk.blue('----------------------------------------'));
	let date = new Date();
	let hour = date.getHours();
	if (hour >= 6 && hour <= 10) {
		console.log(chalk.blue.bold('Good morning 🌞 '));
	}
	if (hour >= 10 && hour < 14) {
		console.log(chalk.blue.bold('Good afternoon,🌞'));
	}
	if (hour >= 14 || hour <= 5) {
		console.log(chalk.blue.bold('Good evening,🌝 '));
	}
	console.log(
		chalk.yellowBright(
			' Are you hungry?\n' +
				chalk.blue.underline.white.bold('do you know the best choice for you?') +
				' Dont worry, I can help you find it!'
		)
	);
	const { name, token } = await q1();
	loginaxios = axios.create({
		headers: {
			token: token,
		},
	});
	await q2(name);
	await q3();
}
start();
