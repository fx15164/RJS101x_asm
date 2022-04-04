import {applyMiddleware, combineReducers, createStore} from "redux"
import { reducer as formReducer } from "redux-form";
import logger from "redux-logger";
import thunk from "redux-thunk";
import staffs from './reducers/staffs';
import departments from "./reducers/departments";

export const configStore = () => {
	const store = createStore(
		combineReducers({
			staffs,
			departments,
			form: formReducer
		}),
		applyMiddleware(thunk, logger)
	);
	return store;
}
