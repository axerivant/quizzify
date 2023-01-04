const dummy: QuizSource = {
	id: 'DEV',
	title: 'Basic earthly knowledge',
	description:
		'Lorem ipsum dolor sit amet consectetur. In amet suspendisse pretium feugiat vel consequat sed eget. Morbi non magna commodo aliquet. Amet enim sed eu ullamcorper eu aliquam et. Quam ipsum mauris lectus velit elit consequat aliquet in quam.',
	image: 'https://w0.peakpx.com/wallpaper/882/419/HD-wallpaper-no-mans-sky-in-space-no-mans-sky-games-2019-games.jpg',
	author: {
		id: crypto.randomUUID(),
		username: 'axerivant'
	},
	questions: [
		{
			prompt: 'How many states are in the United States?',
			options: ['50', '57', '45', '35'],
			correctAnswerIndex: 0
		},
		{
			prompt: 'What is the capital of France?',
			options: ['Paris', 'Rome', 'Madrid', 'Berlin'],
			correctAnswerIndex: 0
		},
		{
			prompt: 'What is the largest planet in our solar system?',
			options: ['Earth', 'Jupiter', 'Saturn', 'Neptune'],
			correctAnswerIndex: 1
		},
		{
			prompt: 'What is the currency of Japan?',
			options: ['Yen', 'Dollar', 'Euro', 'Pound'],
			correctAnswerIndex: 0
		},
		{
			prompt: 'What is the tallest mountain in the world?',
			options: [
				'Mount Everest',
				'Mount Kilimanjaro',
				'Mount Fuji',
				'Mount Kosciuszko'
			],
			correctAnswerIndex: 0
		},
		{
			prompt: 'What is the capital of Australia?',
			options: ['Sydney', 'Melbourne', 'Perth', 'Canberra'],
			correctAnswerIndex: 3
		},
		{
			prompt: 'What is the color of the sky?',
			options: ['Blue', 'Green', 'Yellow', 'Red'],
			correctAnswerIndex: 0
		},
		{
			prompt: 'What is the chemical symbol for Hydrogen?',
			options: ['H', 'He', 'O', 'C'],
			correctAnswerIndex: 0
		},
		{
			prompt: 'What is the capital of China?',
			options: ['Shanghai', 'Beijing', 'Hong Kong', 'Taipei'],
			correctAnswerIndex: 1
		},
		{
			prompt: 'What is the capital of Brazil?',
			options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
			correctAnswerIndex: 2
		}
	]
}

export default dummy
