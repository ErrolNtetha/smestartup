/* eslint-disable react/require-default-props */
import React from 'react';
import { FiHelpCircle } from 'react-icons/fi';

interface Props {
    message: string;
    className: string;
}

export const Tooltip = ({ message, className }: Props) => {
    return (
        <span className={className}>
            <span className={`${className}__tooltipContainer`} data-tooltip={message}>
                <FiHelpCircle />
            </span>
        </span>
    );
};
