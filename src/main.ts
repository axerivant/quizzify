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

3. Who discovered the equation e=mc**2?
    - BB Issac Newton 
    - BB Albert Einstein 
    - BB Richard Feynman *
    - BB Alexander Flemming
`

const parsedResult = parse(textInput)
console.log(parsedResult)
