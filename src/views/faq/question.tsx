/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable  jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

export const Questions = () => {
    const [expand, setExpand] = useState(false);
    const [current, setCurrent] = useState<null | number>(null);

    const faq = [
        {
            answer: {
                title: 'What are your objectives?',
                question: <p className='faq__answer'>At vero eos et <a href='https://google.com/'>accusamus</a>  et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>,
            },
        },
        {
            answer: {
                title: 'Why Blendot?',
                question: <p className='faq__answer'>At vero eos et <a href='https://google.com/'>accusamus</a>  et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>,
            },
        },
        {
            answer: {
                title: 'I have forgotten my password, how to reset my password?',
                question: <p className='faq__answer'>At vero eos et <a href='https://google.com/'>accusamus</a>  et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>,
            }
        },
        {
            answer: {
                title: 'What happens to my supplier profile when I delete my account?',
                question: <p className='faq__answer'>At vero eos et <a href='https://google.com/'>accusamus</a>  et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>,
            }
        },
        {
            answer: {
                title: 'My supplier profile was not approved, what can I do?',
                question: <p className='faq__answer'>At vero eos et <a href='https://google.com/'>accusamus</a>  et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>,
            }
        }
    ];

    return (
        <section className='faq__questionsContainer'>
            <section className='container'>
                <section className='faq__questionInner'>
                    {faq.map((item, index) => (
                        <React.Fragment key={index}>
                            <p
                              className='faq__question'
                              onClick={() => {
                                  setCurrent(index);
                                  setExpand(!expand);
                                  console.log(current, index);
                                  if (index === current) {
                                      setCurrent(null);
                                      setExpand(!expand);
                                  }
                                }}
                            >
                                {item.answer.title}
                                {(index === current) ? <FiMinus /> : <FiPlus />}
                            </p>
                            {(index === current) && item.answer.question}
                        </React.Fragment>
                    ))}
                </section>
            </section>
        </section>
    );
};
