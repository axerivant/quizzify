<script lang="ts">
	export let href: string
	export let label: string
	export let isCurrent: boolean = false
</script>

<a
	{href}
	class="text-indigo-100/50 transition-all hover:text-indigo-500 hover:underline"
	>{label}</a
>
