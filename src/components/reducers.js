import {createStore, combineReducers} from 'redux'

const initialState = {amount: 0}
function create(state=initialState, action){
	switch(action.type){
		case "SET":
			return {amount: action.payload}
		case "ADD":
			return {amount: state.amount+1}
		case "DEL":
			return {amount: state.amount-1}
		case "CLEAR":
			return {amount: 0}
		default:
			return {amount: state.amount}
	}
}

const reducers = combineReducers({
	create
})

const store = createStore(reducers)

export default store;