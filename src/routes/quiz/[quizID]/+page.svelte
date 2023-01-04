<script lang="ts">
	import { page } from '$app/stores'
	import * as backend from '@backend'
	import QuizTaker from '@features/quiz-take/QuizTaker.svelte'
	import QuizViewer from '@features/quiz-view'
	import Background from '@lib/ui/Background.svelte'

	const quizID = $page.params.quizID
	const quiz = backend.fetchQuizSourceByID(quizID)

	let isTakingQuiz = false
	const handleRequestTakeQuiz = () => {
		isTakingQuiz = true
	}
</script>

<div class="w-full">
	{#if isTakingQuiz}
		<QuizTaker {quiz} />
	{:else}
		<QuizViewer {quiz} on:requestTakeQuiz={handleRequestTakeQuiz} />
	{/if}
</div>

<Background image={quiz.image} />
