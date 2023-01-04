<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { Title, Info, Description, Button } from './ui'

	export let quiz: QuizSource
	const { title, questions, author, description, image } = quiz
	const numOfQuestions = questions.length
	const dispatch = createEventDispatcher()

	const emmitRequestTakeQuiz = () => {
		dispatch('requestTakeQuiz')
	}
</script>

<div class="flex flex-col gap-6 w-3/12 bg-700 p-6 rounded-sm m-24">
	<div>
		<Title>{title}</Title>
		<Info {numOfQuestions} author={author.username} />
	</div>
	<Description>{description}</Description>
	<Button label="start quiz" on:click={emmitRequestTakeQuiz} />
</div>
