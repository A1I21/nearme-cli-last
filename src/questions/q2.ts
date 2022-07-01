import { prompt } from 'inquirer';
import { q1 } from './q1';

export async function q2(name: string) {
	let choice = '';
	const { q2Answer } = await prompt({
		type: 'list',
		name: 'q2Answer',
		message: `its a lovely ${name} day to go out \n how may we can help you to make your day better?`,
		choices: ['yes please help me', 'no im depressed'],
		filter: (val: string) => val.toLowerCase(),
	});
	console.log('surely we can help you to make your day better');
	console.log('we will help you to find the best choice for you');

	if (q2Answer === 'yes please help me') {
		const { q2Answer2 } = await prompt({
			type: 'list',
			name: 'q2Answer2',
			message: 'what are you looking for?',
			choices: ['Restaurant', 'Coffee', 'Cafe', 'Parks'],
			filter: (val: string) => val.toLowerCase(),
		});
		choice = q2Answer;
	}
	if (q2Answer === 'no im depressed') {
		console.log('you will be missed \n call your love ones dont be alone');
		process.exit(0);
	}
	return choice;
}
