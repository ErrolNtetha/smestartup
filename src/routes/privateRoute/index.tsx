import React, { FC } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {}

export const Private: FC<Props> = ({ match, history }) => {
    console.log(match);
    console.log(history);

    return (
        <Route />
    );
};
