// temporary backend handlers
import dummmy from './seed'

/**fetch a quiz source from the server */
export const fetchQuizSourceByID = (id: string): QuizSource => {
	//const queryResult = Dummies.find((q) => q.id === id)
	return dummmy
}
