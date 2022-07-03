import axios from 'axios';
import { prompt } from 'inquirer';
import { baseurl } from '..';
export async function Login() {
	let nameoftheuser = '';
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

		const { data: User } = await axios.post(baseurl + '/userrouts/userlogin', {
			...logdata,
		});

		nameoftheuser = User.name;
	} catch (err) {
		console.log(err);
	}

	return nameoftheuser;
}
