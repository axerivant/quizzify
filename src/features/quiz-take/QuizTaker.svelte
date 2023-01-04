<script lang="ts">
	import CurrentQuestion from './CurrentQuestion.svelte'

	export let quiz: QuizSource
	console.log('Taking quiz: ', quiz)

	const { questions } = quiz

	// quiz flow state
	let currentState: 'started' | 'finished' = 'started'
	let currentQuestionIndex = 0
	$: currentQuestionNum = currentQuestionIndex + 1
	let numOfQuestions = questions.length
	// quiz flow handlers
	const previousQuestion = () => {
		if (currentQuestionIndex - 1 !== -1) currentQuestionIndex--
	}
	const nextQuestion = () => {
		if (currentQuestionIndex + 1 !== questions.length)
			currentQuestionIndex++
	}
</script>

{#if currentState === 'started'}
	<div>{currentQuestionNum} / {numOfQuestions}</div>
	<CurrentQuestion
		index={currentQuestionIndex}
		{questions}
		on:prev={previousQuestion}
		on:next={nextQuestion}
	/>
{/if}
