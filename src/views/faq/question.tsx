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
            question: 'What happens when a paid supplier profile expires?',
            answer: <p className='faq__answer'>
                        When a paid (Pro or Premium) supplier profile expires, the profile will not be disabled but rather revert
                        back to the &apos;Basic&apos; version. That is, you will lose previledges until you upgrade again to one of the paid plans.
                    </p>,
        },
        {
            question: 'Why should I use this website over your competitors?',
            answer: <p className='faq__answer'>
                        <strong>Blendot</strong> is unlike any of our competitors. We have a strong, dedicated engineering team that is able to
                        meet user requirements on time. We are committed and love what we are doing. Which means we are always striving to improve the user experience and how our users
                        interact with platform. We like to go above and beyond to what our users want in the platform.
                    </p>,
        },
        {
            question: 'I have forgot my password, how to reset it?',
            answer: <p className='faq__answer'>
                        No, you can&apos;t reset your password for now. But we are working on it.
                    </p>,
        },
        {
            question: 'What happens to my supplier profile when I delete my account?',
            answer: <p className='faq__answer'>
                        In the event that you delete your account, unfortunately you will lose supplier profiles administrated by you.
                        Note that upon deleting your account, you will be reminded of this action and be asked to confirm.
                        This, however, will be improved such that you will have the ability to transfer ownership to another user before deleting your account.
                    </p>,
        },
        {
            question: 'My supplier profile was not approved, what can I do?',
            answer: <p className='faq__answer'>
                        Supplier profiles to be approved they normally take up to 3 days. It might take longer than 3 days
                        in a case where there is an infomation or action that needs to be taken from your end for us to proceed.
                        But this information/action must have been communicated with you via email prior to the end of 3 days.
                        If not, please send us an email at <a href='mailto:info@blendot.com'>info@blendot.com</a> and
                        we will assist.
                    </p>,
        }
    ];

    return (
        <section className='faq__questionsContainer'>
            <section> <h2> Frequently Asked Questions </h2> </section>
            <section className='container'>
                <section className='faq__questionInner'>
                    {faq.map((item, index) => (
                        <React.Fragment key={index}>
                            <p
                              className='faq__question'
                              onClick={() => {
                                  setCurrent(index);
                                  setExpand(!expand);

                                  if (index === current) {
                                      setCurrent(null);
                                      setExpand(!expand);
                                  }
                                }}
                            >
                                {item.question}
                                {(index === current) ? <FiMinus className='faq__icon' /> : <FiPlus className='faq__icon' />}
                            </p>
                            {(index === current) && item.answer}
                        </React.Fragment>
                    ))}
                </section>
            </section>
        </section>
    );
};
