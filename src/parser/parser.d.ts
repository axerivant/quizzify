interface QuestionSource {
	prompt: string
	options: string[]
	correctAnswerIndex: number
}

interface QuizSource {
	title: string
	questions: QuestionSource[]
}
