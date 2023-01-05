<script lang="ts">
	import InputContainer from './InputContainer.svelte'

	export let placeholder: string = ' '
	export let value: string

	$: isFocused = false
</script>

<InputContainer {isFocused}>
	<input
		type="text"
		class="bg-transparent w-full outline-none placeholder:text-indigo-300/20"
		{placeholder}
		on:focus={() => (isFocused = true)}
		on:blur={() => (isFocused = false)}
		bind:value
	/>
</InputContainer>
