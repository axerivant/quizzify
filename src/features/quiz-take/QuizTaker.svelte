<script lang="ts">
	import CurrentQuestion from './CurrentQuestion.svelte'
	import Results from './Results.svelte'

	export let quiz: QuizSource
	console.log('Taking quiz: ', quiz)

	const { questions } = quiz

	// quiz flow state
	let currentState: 'started' | 'finished' = 'started'
	let currentQuestionIndex = 0
	let numOfQuestions = questions.length

	$: currentQuestionNum = currentQuestionIndex + 1

	const answers: AnswerSource[] = []

	// quiz flow handlers
	const previousQuestion = () => {
		if (currentQuestionIndex - 1 !== -1) currentQuestionIndex--
	}
	const nextQuestion = (ev: CustomEvent) => {
		const answer: AnswerSource = {
			questionIndex: currentQuestionIndex,
			optionIndex: ev.detail
		}
		console.log('Added to answers:  ', answers)
		answers.push(answer)
		console.log('NEXT')

		if (currentQuestionIndex + 1 === questions.length) {
			// finish flow
			currentState = 'finished'
			console.log('FINISHED')
			return
		} else currentQuestionIndex++
	}
</script>

{#if currentState === 'started'}
	<div>{currentQuestionNum} / {numOfQuestions}</div>
	<div class="w-full m-24">
		<CurrentQuestion
			index={currentQuestionIndex}
			{questions}
			on:prev={previousQuestion}
			on:select={nextQuestion}
		/>
	</div>
{/if}

{#if currentState === 'finished'}
	<Results {questions} {answers} />
{/if}
