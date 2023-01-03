<script lang="ts">
	export let quiz: QuizInfo

	// ui state
	$: isHovering = false
	const hover = () => (isHovering = true)
	const unHover = () => (isHovering = false)
</script>

<div
	class="relative bg-700 aspect-square cursor-pointer bgorder-2 transition-all rounded
            {isHovering ? 'border-indigo-500' : 'border-900'}"
	on:mouseenter={hover}
	on:mouseleave={unHover}
	on:focus={hover}
	on:blur={unHover}
>
	<div
		class="absolute w-full h-full p-6 z-30 flex flex-col justify-end text-indigo-200"
	>
		<h3>{quiz.title}</h3>
	</div>
	<div
		class="absolute w-full h-full z-20 transition-all"
		class:isHovering
		style:background={'linear-gradient(180deg, rgba(15, 17, 20, 0) 53.65%, rgba(15, 17, 20, 0.7254) 100%);'}
	/>

	<img src={quiz.image} class="absolute w-full h-full z-10" alt="" />
</div>

<style>
	.isHovering {
		background: linear-gradient(
			180deg,
			rgba(15, 17, 20, 0) 0%,
			rgba(15, 17, 20, 0.68) 100%
		);
	}
</style>
