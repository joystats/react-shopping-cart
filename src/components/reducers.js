import {createStore, combineReducers} from 'redux'

const initialState = {grade: 0, message: "somchai"}
function create(state=initialState, action){
	switch(action.type){
		case "ADD":
			return {grade: state.grade+1, message: "upgrade"}
		case "DEL":
			return {grade: state.grade-1, message: "downgrade"}
		default:
			return {grade: state.grade, message: "nothing"}
	}
}
const initialApi = {feeded: false, data: null}
function api(state=initialApi, action){
	switch(action.type){
		case "FEED":
			return {feeded: true, data: action.payload}
		default:
			return {feeded: false, data: state.data}
	}
}

const reducers = combineReducers({
	create,
	api
})

const store = createStore(reducers)

export default store;