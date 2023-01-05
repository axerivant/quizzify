<script lang="ts">
	import { TextLineInput, TextBoxInput } from '@lib/form'
	import parse from '@lib/parser'

	import { Button, PageTitle } from '@lib/ui'

	// input bindings
	let title: string
	let image: string
	let description: string
	let questions: string

	const handlePublishQuiz = () => {
		// construct QuizSource
		// parse questions
		const parsedQuestions = parse(questions)
		const quizSource: QuizSource = {
			id: crypto.randomUUID(),
			title: title,
			image: image,
			description: description,
			questions: parsedQuestions
		}
		console.log(parsedQuestions)
	}
</script>

<div class="w-8/12 flex flex-col gap-6">
	<PageTitle>create a scifi quiz.</PageTitle>
	<div class="flex flex-col gap-3 w-6/12 bg-700 p-3 rounded">
		<TextLineInput placeholder="title" bind:value={title} />
		<TextLineInput placeholder="image url" bind:value={image} />
		<TextBoxInput
			size="sm"
			placeholder="Describe your quiz here."
			bind:value={description}
		/>
		<TextBoxInput
			bind:value={questions}
			placeholder={`1. First question?
    - Option 1
    - Option 2
    - Option 3
    - Option 1
    
(In order to the parser to work correctly, make sure you start each question with a number and end with a question mark.)
            `}
		/>
		<Button on:click={handlePublishQuiz} label="publish quiz" />
	</div>
</div>
