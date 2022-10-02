import React from 'react';
import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react';

// require('dotenv').config();

interface IProps {
    children: React.ReactChild;
}

export const Grammarly = ({ children }: IProps) => {
    return (
        <GrammarlyEditorPlugin clientId={process.env.REACT_APP_GRAMMARLY_CLIENT_ID}>
            {children}
        </GrammarlyEditorPlugin>
    );
};
