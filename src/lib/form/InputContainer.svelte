<script lang="ts">
	export let isFocused: boolean
</script>

<div
	class="bg-700 p-3 border rounded transition-all text-indigo-400 
    {isFocused ? 'border-indigo-500' : 'border-indigo-400/10'}"
>
	<slot />
</div>
