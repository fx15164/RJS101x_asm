import { baseUrl } from '../shared/baseUrl';
import {DEPARTMENTS_LOADING, STAFFS_LOADING} from './actionTypes';

export const fetchStaffs = () => dispatch => {
	return fetch(`${baseUrl}/staffs`)
		.then(response => {
			if (response.ok) {
				return response;
			} else {
				throw new Error(`${response.status}: ${response.statusText}`);
			}
		})
		.then(response => response.json())
		.then(staffs => {
			dispatch({
				type: STAFFS_LOADING,
				payload: staffs
			})
		})
		.catch(e => console.log(e))
}

export const fetchDepartments = () => dispatch => {
	return fetch(`${baseUrl}/departments`)
		.then(response => {
			if (response.ok) {
				return response;
			} else {
				throw new Error(`${response.status}: ${response.statusText}`);
			}
		})
		.then(response => response.json())
		.then(staffs => {
			dispatch({
				type: DEPARTMENTS_LOADING,
				payload: staffs
			})
		})
		.catch(e => console.log(e))
}
