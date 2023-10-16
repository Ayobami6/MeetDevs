import { getAllTalents, getATalent } from "../api/talent";

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

export const getTalent = (setLoading, id) => async (dispatch) => {
    try {
        setLoading(true)
        const { data } = await getATalent(id);
        console.log(data)
        dispatch({ type: 'FETCH_TALENT', payload: data })
        setLoading(false)
    } catch (error) {
        console.log(error.message)

    }
}