import React from 'react'

export default function PostField({onChangeHandler}) {
    return (
        <section className='postFieldContainer'>
            <section>
                <input onChange={onChangeHandler} type="text" placeholder='Enter Subject' />
                <input onChange={onChangeHandler} type="text" placeholder='Enter Subject' />
                <textarea name="" id="" placeholder='Write posts'></textarea>
                <input onChange={onChangeHandler} type="file" placeholder='Enter Subject' />
                <p> Supported files: PDF, DOCX, DOC, JPG, JPEG, PNG. </p>
            </section>
        </section>
    )
}
