import { Human, PeopleAPI, HomeWorld } from "../../../api/api";
import { peopleSlice } from "../slices/people";

const { setHuman, setPeople, setFetching, setHome } = peopleSlice.actions;

export const SetPeopleThunk = () => async dispatch => {
	dispatch(setFetching(true))
	await PeopleAPI
		.then(response => {
			dispatch(setPeople(response.data.results))
		})
		.catch(err => { debugger })
		.finally(() => {
			dispatch(setFetching(false))
		})
}

export const setHumanThunk = (url) => async (dispatch) => {
	await Human(url)
		.then(async (res) => {
			await HomeWorld(res.data.homeworld)
				.then(resHome => {
					dispatch(setHuman(res.data))
					dispatch(setHome(resHome.data.name))
				})
		})
} 