import axios from 'axios';
import { prompt } from 'inquirer';
import { baseurl, loginaxios } from '..';
export async function Login() {
	let nameoftheuser = '';
	let token_and_name: { name: string; token: string } = { name: '', token: '' };
	try {
		const logdata = await prompt([
			{
				type: 'input',
				name: 'username',
				message: 'Enter your username 🥸 ',
			},
			{
				type: 'password',
				name: 'password',
				message: 'Enter your password 🔑 ',
			},
		]);

		const { data: User } = await loginaxios.post(baseurl + '/userrouts/userlogin', {
			...logdata,
		});

		nameoftheuser = User.name;
		token_and_name = User;
	} catch (err) {
		console.log(err);
	}

	return token_and_name;
}
