<script lang="ts">
	import { Button, Card } from '@lib/ui'

	export let questions: QuestionSource[]
	export let answers: AnswerSource[]

	// calculate score
	let correctResponses = 0
	$: correctPercentage = (correctResponses / questions.length) * 100

	questions.forEach((q, i) => {
		if (q.correctAnswerIndex === answers[i].optionIndex)
			correctResponses += 1
	})

	let message = ''
	$: {
		if (correctPercentage <= 70) message = 'Good job!'
		if (correctPercentage >= 90) message = 'Congrats!'
		if (correctPercentage <= 30) message = 'Try again!'
	}
</script>

<div
	class="p-6 rounded w-96 h-96 m-24 flex flex-col items-center bg-indigo-500 justify-between"
>
	<div class="flex flex-col items-center mt-12">
		<div class=" mb-6">{message} You've got</div>
		<div class="text-700 text-5xl tracking-tighter">
			{correctPercentage}%
		</div>
	</div>
	<a href="/" class="w-full">
		<Button label="go back to quizzes" type="secondary" />
	</a>
</div>
