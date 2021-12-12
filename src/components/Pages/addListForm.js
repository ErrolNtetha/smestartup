import React from 'react';
import { reduxForm, Field } from 'redux-form';

export const Input = () => {
    return <input type="text" />
}

const renderForm = props => <Input />

const addListForm = () => {
    return (
        <div>
            <form action="">
                <Field 
                    name='companyName'
                    component={renderForm}
                />
            </form>
        </div>
    )
}

export default addListForm({
    form: 'userList',
})(reduxForm);
