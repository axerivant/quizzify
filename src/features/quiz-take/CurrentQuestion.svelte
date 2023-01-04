<script lang="ts">
	import QuestionCard from './QuestionCard.svelte'

	export let questions: QuestionSource[]
	export let index: number

	$: currentQuestion = questions[index]

	// debug
	$: console.log('Current question:  ', index, currentQuestion)
</script>

<QuestionCard question={currentQuestion} on:prev on:next on:select />
