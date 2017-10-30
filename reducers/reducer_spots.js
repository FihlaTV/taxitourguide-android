import { FETCH_SPOTS } from '../actions/index';

export default function(state=[], action) {
	
	switch(action.type) {
		case FETCH_SPOTS:
			return action.payload.data;
	}
	return state;
}