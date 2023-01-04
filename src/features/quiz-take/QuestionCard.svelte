<script lang="ts">
	import { Card } from '@lib/ui'
	import { fly } from 'svelte/transition'
	import QuestionOptions from './QuestionOptions.svelte'

	export let question: QuestionSource
</script>

{#each [question] as question (question)}
	<div in:fly={{ x: 1000, delay: 400 }} out:fly={{ x: -1000 }}>
		<Card tw="w-3/12">
			<div class="bg-indigo-500 p-3 rounded mb-6 text-indigo-100">
				{question.prompt}
			</div>
			<div class="flex flex-col gap-2">
				<QuestionOptions options={question.options} on:select />
			</div>
		</Card>
	</div>
{/each}
