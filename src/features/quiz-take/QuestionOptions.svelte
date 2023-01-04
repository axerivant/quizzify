<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	export let options: string[]

	// internal state
	let focusedOptionIndex: number | null = null

	const emmitSelect = (selectedOptionIndex: number) => {
		dispatch('select', selectedOptionIndex)
	}
</script>

{#each options as option, index}
	<button
		class="bg-700 p-3 rounded text-indigo-200/60 border border-indigo-200/10 w-full text-left flex gap-3 transition-all outline-none {focusedOptionIndex ===
			index && 'brightness-125'}"
		on:mouseover={() => (focusedOptionIndex = index)}
		on:focus={() => (focusedOptionIndex = index)}
		on:blur={() => (focusedOptionIndex = null)}
		on:mouseleave={() => (focusedOptionIndex = null)}
		on:click={() => emmitSelect(index)}
	>
		<span class="text-indigo-200/20">
			{index + 1}
		</span>
		{option}
	</button>
{/each}
