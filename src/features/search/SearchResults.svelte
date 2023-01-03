<script lang="ts">
	import SearchResultItem from './SearchResultItem.svelte'
	import SearchStore from './store'
</script>

<div class="grid grid-cols-2 gap-3">
	{#each $SearchStore as quiz}
		<SearchResultItem {quiz} />
	{/each}
</div>
