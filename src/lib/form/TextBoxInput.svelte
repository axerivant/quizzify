<script lang="ts">
	import InputContainer from './InputContainer.svelte'

	export let size: 'xl' | 'sm' = 'xl'
	export let placeholder: string = ''
	export let value: string

	$: isFocused = false
</script>

<InputContainer {isFocused}>
	<textarea
		bind:value
		{placeholder}
		class="bg-transparent resize-none w-full outline-none placeholder:text-indigo-300/20 h-96 {size ===
			'sm' && 'h-36'}"
		on:focus={() => (isFocused = true)}
		on:blur={() => (isFocused = false)}
	/>
</InputContainer>
