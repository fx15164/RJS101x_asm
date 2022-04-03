import {combineReducers, createStore} from "redux"
import { reducer as formReducer } from "redux-form";
import staffs from './reducers/staffs';
import departments from "./reducers/departments";

export const configStore = () => {
	const store = createStore(
		combineReducers({
			staffs,
			departments,
			form: formReducer
		})
	);
	return store;
}
