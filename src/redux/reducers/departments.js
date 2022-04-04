
import {DEPARTMENTS_LOADING} from '../actionTypes';

const departments = (state = [], action) => {
	switch (action.type) {
		case DEPARTMENTS_LOADING:
			return [...action.payload];
		default:
			return state;
	}
}

export default departments;
