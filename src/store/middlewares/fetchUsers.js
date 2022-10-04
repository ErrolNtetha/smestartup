import axios from 'axios';
import { fetchUsers } from 'store/actions/fetchUsers';

export const fetchAllUsers = () => {
    return (dispatch) => {
        axios.get('http://localhost:5000/contact')
        .then((res) => {
            console.log('Data of users: ', res.data);
            dispatch(fetchUsers(res.data.users));
        })
        .catch((err) => {
            console.log('An error occurred.', err.message);
        });
    };
};
