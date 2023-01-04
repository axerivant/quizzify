<script lang="ts">
	import Header from './Header.svelte'
	import { SearchInput, SearchResults } from '@features/search'
</script>

<div class="w-[40em] flex flex-col gap-3">
	<SearchInput />
	<SearchResults />
</div>
