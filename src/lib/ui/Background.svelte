<script lang="ts">
	export let image: string | undefined = undefined
</script>

{#if image}
	<div
		class="w-screen h-screen fixed top-0 left-0 -z-10 bg-cover"
		style:background-image="url({image})"
	/>
{:else}
	<div class="bg-900 w-screen h-screen fixed top-0 left-0 -z-20" />
{/if}
