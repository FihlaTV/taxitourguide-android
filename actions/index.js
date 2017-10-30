import axios from 'axios'

const ROOT_URL = `http://thewebguysnetwork.com/taxitourguide/wp-json/wp/v2/spot`;


export const FETCH_SPOTS = 'FETCH_SPOTS';

export function fetchSpots(page) {
	const url = `${ROOT_URL}?page=${page}`;
	const request = axios.get(url);
	return {
		type: FETCH_SPOTS,
		payload: request
	};
}

export function searchSpots(term) {
	const url = `${ROOT_URL}?search=${term}`;
	const request = axios.get(url);
	return {
		type: FETCH_SPOTS,
		payload: request
	};
}