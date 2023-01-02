import { tokenize } from './utils'

const parse = (sourceText: string): QuizSource => {
	const lines = tokenize(sourceText)
	const questions = []
	let currentQuestion = {
		question: '',
		options: [],
		correctAnswerIndex: 0
	}

	for (const line of lines) {
		// if option line
		if (line.startsWith('-')) {
			const cline = line.slice(1).trim().replaceAll('*', '')
			currentQuestion.options.push(cline)
			if (line.includes('*')) {
				currentQuestion.correctAnswerIndex =
					currentQuestion.options.indexOf(cline)
			}
		} else if (line.endsWith('?')) {
			if (currentQuestion.question) {
				questions.push(currentQuestion)
			}
			currentQuestion = {
				question: '',
				options: [],
				correctAnswerIndex: 0
			}
			currentQuestion.question = line.trim()
		}
	}

	questions.push(currentQuestion)
	return questions
}

export default parse
