<script lang="ts">
	import { page } from '$app/stores'
	import * as backend from '@backend'
	import QuizViewer from '@features/quiz-view'

	const quizID = $page.params.quizID
	const quiz = backend.fetchQuizSourceByID(quizID)
</script>

<div class="w-full">
	<QuizViewer {quiz} />
</div>
