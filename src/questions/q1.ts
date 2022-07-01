import { createSecureServer } from 'http2';
import { prompt } from 'inquirer';
import { userCreate } from '../controller/createUser';
import { Login } from '../controller/Login';
export async function q1() {
	let name = '';
	const { q1Answer } = await prompt({
		type: 'list',
		name: 'q1Answer',
		message: 'Are you new? \n register\n our friend\n pleasr Login\n or Exit',
		choices: ['register', 'Login', 'Quit the app'],
		filter: (val: string) => val.toLowerCase(),
	});
	switch (q1Answer) {
		case 'register':
			console.log('welcome to the app');
			await userCreate();
			break;
		case 'login':
			await Login();
			break;
		case 'quit the app':
			console.log('bye bye');
			console.log('you will be missed ');
			process.exit(0);
	}

	return name;
}
