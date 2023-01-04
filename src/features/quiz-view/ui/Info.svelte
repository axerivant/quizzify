<script lang="ts">
	export let numOfQuestions: number
	export let author: string
</script>

<div class="text-gray-700/90 flex gap-3">
	<span>{numOfQuestions} questions</span>
	<span>by {author} </span>
</div>
