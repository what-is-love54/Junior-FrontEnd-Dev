import { shipsSlice } from "../slices/ships"
import { getShips, getShipById } from "../../../api/api";

const { setShips, setFetching, setShip } = shipsSlice.actions;

export const setShipsThunk = () => async dispatch => {
	dispatch(setFetching(true))
	await getShips()
		.then((res) => {
			dispatch(setShips(res.data.results))
		})
		.catch(err => { debugger })
		.finally(() => {
			dispatch(setFetching(false))
		})
}

export const setShipByIdThunk = (url) => async dispatch => {
	dispatch(setFetching(true))
	await getShipById(url)
		.then((res) => {
			dispatch(setShip(res.data))
		})
		.catch(err => { debugger })
		.finally(() => {
			dispatch(setFetching(false))
		})
}