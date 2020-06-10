import { userAPI } from "../../../api/api";
import { usersSlice } from "../slices/user";

const { setUser, setFetching } = usersSlice.actions;

export const SetUserThunk = () => async dispatch => {
	await userAPI
		.then(response => {
			dispatch(setUser(response.data))
		})
		.catch(err => { })
		.finally(() => {
			dispatch(setFetching(false))
		})
}