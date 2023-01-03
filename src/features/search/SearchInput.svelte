<script>
	$: isFocused = false
</script>

<div
	class="p-6 py-4 bg-700 rounded flex border transition-all 
    {isFocused ? 'border-indigo-400' : 'border-700'}"
>
	<input
		type="text"
		class="bg-700 outline-none w-full placeholder:opacity-60 text-indigo-200"
		placeholder="search quizzes by topics, interests or anything really"
		on:focus={() => (isFocused = true)}
		on:blur={() => (isFocused = false)}
	/>
</div>
