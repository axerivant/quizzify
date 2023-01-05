interface Author {
	id: string
	username: string
}

interface QuizInfo {
	id: string
	title: string
	image: string
	author: Author
}

interface AnswerSource {
	questionIndex: number
	optionIndex: number
}

interface QuestionSource {
	prompt: string
	options: string[]
	correctAnswerIndex: number
}

interface QuizSource {
	id: string
	image: string
	title: string
	description: string
	author: Author
	questions: QuestionSource[]
}
