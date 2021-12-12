import React, { useState } from 'react';

export default function PostField() {
    const [ post, setPost ] = useState('');
    const [ postField, setPostField ] = useState(false);
    const [ subject, setSubject ] = useState('');

    // Track the changes in input field
    const onChangeHandler = (e) => {
        setSubject(e.target.value);
    }

    const onSubmitHandler = () => {
        const postDetails = {
            post,
        }

        // console.log("location ");
        console.log(postDetails);
    }

    return (
        <section className='postFieldContainer'>
            <section className='innerPostField'>
                <input className='inputField field' type="text" placeholder='Name of Your Company' onChange={(e) => setPost(e.target.value)} />
                <section className='amountContainer'>
                    <input className='inputAmount' type="number" placeholder='Minimum Amount' />
                    <input className='inputAmount' type="number" placeholder='Maximum Amount' />
                </section>
                <input type="number" className='field' placeholder='Year the business was established.' />
                <textarea name="" placeholder='Explain what your business does in as little as 200 words.' id="" cols="30" rows="10"></textarea>
                <select className='field' name="companyType" id="">
                    <option value=""> Type of Company </option>
                    <option value=""> Sole Proprietiship </option>
                    <option value=""> Private Company </option>
                    <option value=""> Public Company </option>
                    <option value=""> Close Coperation </option>
                    <option value=""> Other </option>
                </select>
                <input className='fileField field' onChange={onChangeHandler} type="file" placeholder='Enter Subject' />
                <p> Supported files: PDF, DOCX, DOC, JPG, JPEG, PNG. </p>
            </section>
        </section>
    )
}
