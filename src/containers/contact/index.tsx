import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchAllUsers } from 'store/middlewares/fetchUsers';
import { fetchUsers } from 'store/actions/fetchUsers';
import { useDispatch, connect } from 'react-redux';
import { Header } from '../../views/header';

export const Contact = () => {
    const [users, setUsers] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:5000/contact')
            .then((res) => {
                setUsers(res.data.users);
                fetchAllUsers();
                dispatch(fetchUsers(res.data.users));
            })
            .catch((err) => {
                console.log('There was an error. ', err.message);
            });
    }, []);

  return (
    <section>
      <Header />
      <div>
        <h4> Users </h4>
        <section>
            {!users ? 'No users to display' : users.map((user) => <h3 key={user._id}> {user.name.firstName} {user.name.lastName} </h3>)}
        </section>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        fetchAllUsers: state.user
    };
};

const mapDispatch = (dispatch) => {
 return {
     fetchAllUsers: () => dispatch(fetchAllUsers())
 };
};

connect(mapStateToProps, mapDispatch)(Contact);
