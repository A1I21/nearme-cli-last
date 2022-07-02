import { prompt } from 'inquirer';
export async function Login() {
	let name = '';
	const { username, password } = await prompt([
		{
			type: 'input',
			name: 'username',
			message: 'Enter your username 🥸 ',
			filter: (val: string) => val.toLowerCase(),
		},
		{
			type: 'password',
			name: 'password',
			message: 'Enter your password 🔑 ',
		},
	]);
	name = username;
	console.log(name);
	return name;
}
