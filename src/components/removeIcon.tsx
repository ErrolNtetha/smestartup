import React from 'react';
import { FiX } from 'react-icons/fi';

interface RProps {
    className: string;
    removeIconHandler: React.MouseEventHandler<HTMLSpanElement>;
}

export const RemoveIcon = ({ className, removeIconHandler }: RProps) => {
    return (
        <span onClick={removeIconHandler} role='button' tabIndex={0} onKeyPress={removeIconHandler} className={`${className}__removeIconContainer`}>
            <FiX />
        </span>
    );
};
