import chalk from 'chalk';
import figlet from 'figlet';
import { prompt } from 'inquirer';
import { q1 } from './q1';

export async function q2(name: string) {
	let choice = '';
	if (name === undefined) {
		console.log(chalk.bgRedBright('yor are a stranger 🤖 \n plase register or login'));
		process.exit(0);
	}
	const { q2Answer } = await prompt({
		type: 'list',
		name: 'q2Answer',
		message:
			chalk.yellowBright(` its a lovely ${name} day to go out \n`) +
			chalk.greenBright(` how may we can help you to make your day better?`),
		choices: ['yes please help me', 'no im depressed'],
		filter: (val: string) => val.toLowerCase(),
	});
	console.log('surely we can help you to make your day better 🤗');
	console.log('we will help you to find the best choice for you 🤗');

	if (q2Answer === 'yes please help me') {
		const { q2Answer2 } = await prompt({
			type: 'list',
			name: 'q2Answer2',
			message:
				chalk.blueBright('what are you looking for?🔎 \n we can help to search for you\n') +
				chalk.greenBright(' Restaurant 🍽, Coffee 🫖, etc.'),
			choices: ['ready to search🔎'],
			filter: (val: string) => val.toLowerCase(),
		});
		choice = q2Answer;
	}
	if (q2Answer === 'no im depressed') {
		console.log('you will be missed \n call your love ones dont be alone');
		console.log(chalk.redBright(figlet.textSync('call 911 ')));
		process.exit(0);
	}
	return choice;
}
