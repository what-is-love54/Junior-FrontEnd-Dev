import { getPlanets, getPlanetById } from "../../../api/api";
import { planetSlice } from "../slices/planets";

const { setPlanets, setFetching, setPlanet } = planetSlice.actions;

export const SetPlanetThunk = () => async dispatch => {
	dispatch(setFetching(true))
	await getPlanets()
		.then(res => {
			dispatch(setPlanets(res.data.results))
		})
		.catch(err => { debugger })
		.finally(() => {
			dispatch(setFetching(false))
		})
}

export const getPlanetByIdThunk = (url) => async dispatch => {
	await getPlanetById(url)
		.then(res => {
			dispatch(setPlanet(res.data))
		})
		.catch(err => { debugger })
}
