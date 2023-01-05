<script>
	import { fly } from 'svelte/transition'
	import { Background } from '@lib/ui'
	import '../app.css'
	import Header from './Header.svelte'
</script>

<div class="overflow-x-hidden">
	<div class="w-screen min-h-screen flex flex-col items-center px-20 py-16">
		<Header />
		<slot />
	</div>
</div>

<Background />
