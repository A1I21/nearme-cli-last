import axios from 'axios';
import { prompt } from 'inquirer';
import { baseurl } from '..';

export async function userCreate() {
	const userdata = await prompt([
		{
			type: 'input',
			name: 'user_id',
			message: 'Enter your user_id 🥸 ',
		},
		{
			type: 'input',
			name: 'username',
			message: 'Enter your username 🔑 ',
		},
		{
			type: 'password',
			name: 'password',
			message: 'Enter your password 🥸 ',
		},
		{
			type: 'input',
			name: 'email',
			message: 'Enter your email 🔑 ',
		},
		{
			type: 'input',
			name: 'phone',
			message: 'Enter your phone 🥸 ',
		},
		{
			type: 'input',
			name: 'name',
			message: 'Enter your name 🔑 ',
		},
	]);
	await axios
		.post(baseurl + '/userrouts/usercreate', {
			...userdata,
		})
		.catch((err) => {
			console.log(err);
		});
	console.log('user created');
}
