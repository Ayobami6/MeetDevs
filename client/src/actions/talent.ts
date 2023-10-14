import { getAllTalents } from "../api/talent";

export const getTalents = (setLoading) => async (dispatch) => {
    try {
        setLoading(true)
        const { data } = await getAllTalents()
        // console.log(data)
        dispatch({ type: 'FETCH_ALL', payload: data })
        setLoading(false)
    } catch (error) {
        console.log(error.message);
    }
}