/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable  jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useRef } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

export const Questions = () => {
    const [expand, setExpand] = useState(false);
    const questionRef = useRef(null);

    const expandQuestion = () => {
        // const question = questionRef.current.innerText;
        // const activeQ = activeQuestion.target.innerText;
            console.log(questionRef.current.innerText);
            setExpand(!expand);
    };

    return (
        <section className='faq__questionsContainer'>
            <section className='container'>
                <section className='faq__questionInner'>
                    <p className='faq__question' ref={questionRef} onClick={expandQuestion}>
                        How to delete my account?
                        {expand ? <FiMinus /> : <FiPlus />}
                    </p>
                    <p className='faq__answer'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                    <hr style={{ opacity: 0.05, margin: 0 }} />
                    <p className='faq__question' ref={questionRef} onClick={expandQuestion}>
                        I forgot to reset my password, how to reset it?
                        {expand ? <FiMinus /> : <FiPlus />}
                    </p>
                    <p className='faq__answer'>  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. </p>
                    <hr style={{ opacity: 0.05, margin: 0 }} />
                </section>
            </section>
        </section>
    );
};
