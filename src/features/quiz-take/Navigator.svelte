<script>
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	// quiz flow command emmitters
	const emmitNext = () => {
		dispatch('next')
	}
	const emmitPrev = () => {
		dispatch('prev')
	}
</script>

<button on:click={emmitPrev}>prev</button>
<button on:click={emmitNext}>next</button>
