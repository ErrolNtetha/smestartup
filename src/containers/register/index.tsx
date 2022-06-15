/* eslint-disable no-nested-ternary */
import React from 'react';
import { Header } from 'views/header';
import { User } from './user-0';
import { InitialForm } from './initialForm';
import { Business } from './business';

export const Register = () => {
    const [page, setPage] = React.useState(1);
    const [inputValue, setInputValue] = React.useState<object | string | null>({});

    const handleSubmit = () => {
        console.log('submitted: ', inputValue);
    };

    const handlePrev = () => {
        setPage(page - 1);
    };

    const handleNext = () => {
        setPage(page + 1);
    };

    const handleChange = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        const { value, name } = e.currentTarget;
        setInputValue({
            [name]: value
        });
        console.log({ [name]: value }); // { firstName: '' } ...
    };

    return (
        <>
            <Header />
                { page === 0
            ? (
                <InitialForm
                  click={handleNext}
                  name='type'
                  submit={handleSubmit}
                  setType='sda'
                />
)
            : page === 1
            ? (

            <div className='register'>
                <Business
                  prevPage={handlePrev}
                  nextPage={handleNext}
                  value={inputValue}
                  onChangeHandler={handleChange}
                  onSubmit={handleSubmit}
                />
            </div>
)
            : page === 2
            ? <User />
            : null}
        </>
    );
};
