import chalk from 'chalk';
import { createSecureServer } from 'http2';
import { prompt } from 'inquirer';
import { userCreate } from '../controller/createUser';
import { Login } from '../controller/Login';
let token = '';
export async function q1() {
	let name = '';
	let msg = chalk.redBright('Are you new?,register\n') + chalk.yellowBright('our friend? pleas Login or Exit');
	const { q1Answer } = await prompt({
		type: 'list',
		name: 'q1Answer',
		message: msg,
		choices: ['register', 'Login', chalk.red('Quit the app')],
		filter: (val: string) => val.toLowerCase(),
	});
	switch (q1Answer) {
		case 'register':
			console.log('welcome to the app');
			await userCreate();
			break;
		case 'login':
			const object = await Login();
			name = object.name;
			token = object.token;
			break;
		case 'quit the app':
			process.exit(0);
			break;
		default:
			process.exit(0);
	}

	return { name, token };
}
