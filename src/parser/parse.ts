import { tokenize } from './utils'

const parse = (title: string, sourceText: string): QuizSource => {
	const lines = tokenize(sourceText)
	const questions = []

	let currentQuestion: QuestionSource = {
		prompt: '',
		options: [],
		correctAnswerIndex: 0
	}

	for (const line of lines) {
		// if option line
		if (line.startsWith('-')) {
			const cleanedLine = line.slice(1).trim().replaceAll('*', '')
			currentQuestion.options.push(cleanedLine)
			if (line.includes('*')) {
				currentQuestion.correctAnswerIndex =
					currentQuestion.options.indexOf(cleanedLine)
			}
		} else if (line.endsWith('?')) {
			if (currentQuestion.prompt) {
				questions.push(currentQuestion)
			}
			currentQuestion = {
				prompt: '',
				options: [],
				correctAnswerIndex: 0
			}
			currentQuestion.prompt = line.trim()
			questions.push(currentQuestion)
		}
	}

	const result: QuizSource = {
		title: title,
		questions: questions
	}
	return result
}

export default parse
