import React from 'react';
import { FiHelpCircle } from 'react-icons/fi';

interface Props {
    message: string;
}

export const Tooltip = ({ message }: Props) => {
    return (
        <span className='tooltipContainer' data-tooltip={message}>
            <FiHelpCircle />
        </span>
    );
};
