export const processSourceLine = (sourceLine: string): string => {
	return sourceLine.trim()
}

export const tokenize = (sourceText: string): string[] => {
	const lines = sourceText.split('\n')

	const processed = []
	for (const l of lines) {
		processed.push(processSourceLine(l))
	}

	return processed
}
