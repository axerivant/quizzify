<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	export let question: QuestionSource

	const dispatch = createEventDispatcher()

	// quiz flow command emmitters
	const emmitNext = () => {
		dispatch('next')
	}
	const emmitPrev = () => {
		dispatch('prev')
	}
</script>

<div>
	{question.prompt}
	<button on:click={emmitPrev}>prev</button>
	<button on:click={emmitNext}>next</button>
</div>
