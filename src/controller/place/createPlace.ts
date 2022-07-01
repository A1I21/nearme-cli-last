import { prompt } from 'inquirer';

export async function createplace() {
	const placedata = await prompt([
		{
			type: 'input',
			name: 'name',
			message: 'Enter the name of the place 🔤 ',
		},
		{
			type: 'input',
			name: 'address',
			message: 'Enter the address of the place 🗺 ',
		},
		{
			type: 'input',
			name: 'phone',
			message: 'Enter the phone number of the place 📱 ',
		},
		{
			type: 'input',
			name: 'website',
			message: 'Enter the website of the place 🌐 ',
		},
		{
			type: 'input',
			name: 'price',
			message: 'Enter the price of the place 💰 ',
		},
		{
			type: 'input',
			name: 'rating',
			message: 'Enter the rating of the place 🌟 ',
		},
		{
			type: 'input',
			name: 'image',
			message: 'Enter the image of the place 🌄 ',
		},
		{
			type: 'input',
			name: 'description',
			message: 'Enter the description of the place 📝 ',
		},
	]);
}
