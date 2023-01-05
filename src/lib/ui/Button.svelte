<script lang="ts">
	export let label: string
	export let type: 'primary' | 'secondary' = 'primary'
</script>

<button
	class="{type === 'primary'
		? 'bg-indigo-500 text-700'
		: 'bg-700 text-indigo-500'} p-3 rounded font-medium w-full"
	on:click>{label}</button
>
