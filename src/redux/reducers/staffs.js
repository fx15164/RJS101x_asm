import { STAFFS } from '../../shared/staffs';

let initialState = STAFFS;
if (localStorage.getItem('staffs')) {
	initialState = JSON.parse(localStorage.getItem('staffs'));
}

const staffs = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_STAFF':
			const newstate = [...state, action.payload];
			localStorage.setItem('staffs', JSON.stringify(newstate));
			return newstate; 
		default:
			return state;
	}
}

export default staffs;
