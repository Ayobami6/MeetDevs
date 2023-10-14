import { getAllTalents } from "../api/talent";

export const getTalents = () => async (dispatch) => {
    try {
        dispatch({ type: 'START_LOADING' })
        const { data } = await getAllTalents()
        // console.log(data)
        dispatch({ type: 'FETCH_ALL', payload: data })
        dispatch({ type: 'END_LOADING' })
    } catch (error) {
        console.log(error.message);
    }
}