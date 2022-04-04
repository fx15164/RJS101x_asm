import { STAFFS_LOADING, ADD_STAFF, DELETE_STAFF }from '../actionTypes';

const staffs = (state = [], action) => {
	switch (action.type) {
		case STAFFS_LOADING:
			return [...action.payload];
		case ADD_STAFF:
			return [...action.payload];
		case DELETE_STAFF:
			return [...action.payload];
		default:
			return state;
	}
}

export default staffs;
