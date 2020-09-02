import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 8,
		min: 4
	},
	wordsPerSentence: {
		max: 16,
		min: 4
	}
});

export const data = [
	{
		id: 1,
		heading: 'testOne',
		description: lorem.generateSentences(7 * Math.random())
	},
	{
		id: 2,
		heading: 'testTwo',
		description: lorem.generateSentences(7 * Math.random())
	},
	{
		id: 3,
		heading: 'testThree',
		description: lorem.generateSentences(7 * Math.random())
	},
	{
		id: 4,
		heading: 'testFour',
		description: lorem.generateSentences(7 * Math.random())
	}
];
