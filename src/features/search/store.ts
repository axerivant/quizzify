import { writable, type Writable } from 'svelte/store'
import Dummies from './seed'

// const SearchStore: Writable<QuizInfo[]> = writable([...Dummies])
//export default SearchStore

const { subscribe, set, update }: Writable<QuizInfo[]> = writable([...Dummies])

const SearchStore = {
	subscribe,
	set
}

export default SearchStore
