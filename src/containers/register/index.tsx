/* eslint-disable no-nested-ternary */
import React from 'react';
import { useFormik } from 'formik';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { Header } from '../../views/header';
import { User } from './user-0';
import { InitialForm } from './initialForm';
import { Business } from './business';
import { Button } from '../../components/button';
// import { SERVER_URL } from '../../config/baseURL';

export const Register = () => {
    const [pages, setPages] = React.useState(0);

    const formik = useFormik({
        initialValues: {},
        onSubmit(values) {
           console.log(values);
           handleNext();
        }
    });

    const handlePrev = () => {
        setPages((prevState) => prevState - 1);
    };

    const handleNext = () => {
        setPages(pages + 1);
        console.log('Test: ', formik.values);
    };

    return (
        <>
            <Header />
            { pages === 0
            ? <InitialForm click={handleNext} type='type' submit={formik.handleSubmit} setType={formik.handleChange} />
            : pages === 1
            ? <User />
            : pages === 2
            ? <Business />
            : 'You have reached the dead end' }

            <Button onClick={handlePrev}> Previous </Button>
            <Button onClick={handleNext}> Next </Button>
        </>
    );
};