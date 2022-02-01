import React, { useState, useHistory, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { post, get } from 'axios';
import toggleLoggin from '../../store/actions/logged';
import { useDispatch } from 'react-redux';
import toggle from '../../store/actions/logged';
import { Formik, Form, Field } from 'formik';
import { Yup } from 'yup';

export default function Login() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ serverRes, setServerRes ] = useState();
    const [ isLoggedIn, setIsLoggedIn ] = useState(null);
    const dispatch = useDispatch();

    // On submit of login details...
    const onSubmitHandler = () => {
        const loginDetails = {
            email,
            password,
        }

        const url = "http://localhost:5000/login"; 

        post(url, loginDetails, {
            headers: {
                "Content-type": "application/json",
                'x-access-token': localStorage.getItem('token')
            },
        })
        .then(res => {
            localStorage.setItem( 'token', res.data.token );
            setIsLoggedIn(res.data.isLoggedIn);
            dispatch(toggleLoggin); 
            console.log(res.data.isLoggedIn);
        })
        .catch(err => console.log('Something went wrong: ', err));
    }

    useEffect(() => {
        get('localhost:5000/feed', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })
        .catch(err => console.log(err))
    }, [])

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid.').required('Field is empty.'),
        password: Yup.string()
            .min(8, 'Password too short. It must be a minimum of 8 charaters long.')
            .required('You can\'t leave field empty')
    })

    return (
        <section className="loginContainer">
             <Formik 
                initialValues={{
                    email: '',
                    password: '',
                }}

                validationSchema={validationSchema}

                onSubmit={(values) => {
                    const url = "http://localhost:5000/login"; 
                    console.log(values);
            
                    post(url, values, {
                        headers: {
                            "Content-type": "application/json",
                            'x-access-token': localStorage.getItem('token')
                        },
                        body: JSON.stringify(values),
                    })
                    .then(res => {
                        localStorage.setItem( 'token', res.data.token );
                        setIsLoggedIn(res.data.isLoggedIn);
                        isLoggedIn && dispatch(toggleLoggin);
                        console.log(res.data.isLoggedIn);
                    })
                    .catch(err => console.log('Something went wrong: ', err));
                }}
            >
               {({ errors, touched,  }) => (
                  <section className='loginForm'>
                       <h2> Log in to your account </h2>
                       {console.log(errors)}
                        <Form>
                            <Field type='email' name='email' placeholder='Enter email' />
                            <Field name='password' placeholder='Password' />
                            {errors.password && touched.password ? <p> {errors.password} </p> : null }
                            <button type='submit'> Login </button>
                        </Form>
                  </section>
               )}
            </Formik>
        </section>
    )
}
