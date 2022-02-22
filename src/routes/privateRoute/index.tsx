import React, { FC } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{ id: string }> {

}

export const Private: FC<Props> = ({ match }) => {
    console.log(match);
    return (
        <Route />
    );
};
