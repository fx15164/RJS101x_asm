import { baseUrl } from '../shared/baseUrl';
import {ADD_STAFF, DELETE_STAFF, DEPARTMENTS_LOADING, STAFFS_LOADING} from './actionTypes';

export const deleteStaff = (id) => dispatch => {
	return fetch(`${baseUrl}/staffs/${id}`, {
		method: 'DELETE',
	})
		.then(response => {
			if (response.ok) {
				return response;
			} else {
				throw new Error(`${response.status}: ${response.statusText}`);
			}
		})
		.then(response => response.json())
		.then(staffs => {
			console.log(staffs);
			dispatch({
				type: DELETE_STAFF,
				payload: staffs
			})
		})
		.catch(e => console.log(e))
}

export const addStaff = (staff) => dispatch => {
	return fetch(`${baseUrl}/staffs`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(staff)
	})
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
				type: ADD_STAFF,
				payload: staffs
			})
		})
		.catch(e => console.log(e))
}

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
