import { STAFFS_LOADING }from '../actionTypes';

const staffs = (state = [], action) => {
	switch (action.type) {
		case STAFFS_LOADING:
			return [...action.payload];
		default:
			return state;
	}
}

export default staffs;
