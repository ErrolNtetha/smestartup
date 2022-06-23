/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Field } from 'formik';
import { occupations } from 'helpers/occupations';

export const User = () => {
const title = [...occupations, 'Unemployed', 'Founder & CEO'].sort();

return (
    <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{ name: 'jared' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
                <h3 className='register__header'> Create Free Account </h3>
                <hr style={{ margin: 0, opacity: 0.3 }} />
                <label>
                    First Names:
                <Field
                  name='firstName'
                  placeholder='E.g. Mphumeleli Errol'
                  className='register__emailField'
                />
                </label>
                <label>
                    Last Name:
                <Field
                  name='lastName'
                  placeholder='E.g. Ntetha'
                  className='register__emailField'
                />
                </label>

                <label>
                    Occupation:
                    <Field as='select' name='occupation'>
                        <option> Select </option>
                        {title.map((item: string[]) => <option key={item}> {item} </option>)}
                    </Field>
                </label>
                <label>
                    Your gender
                    <Field as='select' name='gender'>
                        <option> Select </option>
                        <option value='male'> Male </option>
                        <option value='female'> Female </option>
                    </Field>
                </label>
          <input
            type='text'
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name='name'
          />
          {props.errors.name && <div id='feedback'>{props.errors.name}</div>}
          <button type='submit'>Submit</button>
        </form>
      )}
    </Formik>
    </div>
    );
};
