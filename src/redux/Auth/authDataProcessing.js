import axios from 'axios';
import { setUser, setError, setIsLogged } from './authActionCreators';

const authEndpoints = {
    fetchUsers: 'http://localhost:5000/users',
    editUser: (id) => `http://localhost:5000/users/${id}/`
};

export const useAuth = () => {

    const fetchUsers = async () => {
        const result = await axios.get(authEndpoints.fetchUsers);
        const usersArray = result.data;
        return usersArray;
    };

    const checkUser = async (formData, dispatch) => {
        const usersArray = await fetchUsers();
        let candidate = {};
        usersArray.forEach(user => {
            if (user.email === formData.email && user.password === formData.password) {
                candidate = user;
                return;
            }
        });
        if (Object.keys(candidate).length > 0) {
            dispatch(setUser(candidate));
            dispatch(setIsLogged(true));
        } else {
            const error = {
                message: 'Incorrect data. Try again.'
            }
            dispatch(setError(error));
        }
    };

    const editUser = async (userId, formData, dispatch) => {
        const result = await axios.patch(authEndpoints.editUser(userId), formData);
        dispatch(setUser(result.data));
    }

    return { fetchUsers, checkUser, editUser }
};