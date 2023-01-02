import parse from './parser'

const textInput = `
1. What was the capital of ancient Greece?
    - Atlantis
    - Sparta
    - Athens *
    - Leos

2. Who discovered the equation e=mc**2?
    - Issac Newton 
    - Albert Einstein *
    - Richard Feynman
    - Alexander Flemming
`
const titleInput = 'Quiz title'
const parsedResult = parse('This is the title', textInput)
