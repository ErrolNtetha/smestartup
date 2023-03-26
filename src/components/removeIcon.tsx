import React from 'react';
import { FiX } from 'react-icons/fi';

interface RProps {
    className: string;
}

export const RemoveIcon = ({ className }: RProps) => {
    return (
        <span className={`${className}__removeIconContainer`}>
            <FiX />
        </span>
    );
};
