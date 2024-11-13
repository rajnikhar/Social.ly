import axios from 'axios';
import { BACKEND_URL } from '../../constants/url';

const URL = BACKEND_URL + "api/v1/user";

export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "USER_LOGIN_REQUEST"
        })

        const { data } = await axios.post(`${URL}/login`, { email, password }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch({
            type: "USER_LOGIN_SUCCESS",
            payload: data.message
        })
        
    } catch (error) {
        dispatch({
            type: "USER_LOGIN_FAILURE",
            payload: error.response?.data?.message
        })
    }
}