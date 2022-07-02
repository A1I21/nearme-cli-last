import { prompt } from 'inquirer';
import Choices from 'inquirer/lib/objects/choices';
import { cheap } from '../controller/place/cheap';
import { mostFavs } from '../controller/place/mostpup';
import { openNow } from '../controller/place/openNow';
import { trendy } from '../controller/place/popRating';
import { price } from '../controller/place/price';
import { rating } from '../controller/place/rating';
import { searchPlace } from '../controller/place/searchPlace';

export async function q3() {
	const { q3answer } = await prompt({
		type: 'list',
		name: 'q3answer',
		message: 'what the search methode do you want ',
		choices: [
			'1-search by name🔤',
			'2-search by the best rating📉',
			'3-search by the price most expensive 💰',
			'4-search by the most popular👁👁',
			'5-search by the most popular and the best rating 🔥🔥',
			'6-search by the most cheap 💸😔',
			'7-is it open now🏠',
		],
	});
	switch (q3answer) {
		case '1-search by name🔤':
			searchPlace();
			break;
		case '2-search by the best rating📉':
			rating();
			break;
		case '3-search by the price most expensive 💰':
			price();
			break;
		case '4-search by the most popular👁👁':
			mostFavs();
			break;
		case '5-search by the most popular and the best rating 🔥🔥':
			trendy();
			break;
		case '6-search by the most cheap 💸😔':
			cheap();
			break;
		case '7-is it open now🏠':
			openNow();
			break;
	}
}
