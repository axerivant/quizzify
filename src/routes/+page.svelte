<script lang="ts">
	import Header from './Header.svelte'
	import { SearchInput, SearchResults } from '@features/search'
</script>

<div class="bg-900 w-screen min-h-screen flex flex-col items-center">
	<Header />
	<div class="w-[40em] flex flex-col gap-3">
		<SearchInput />
		<SearchResults />
	</div>
</div>
