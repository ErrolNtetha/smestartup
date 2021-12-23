import React, { useHistory } from 'react';
import Directory from './Directory';

export default function BusinessDir() {
    const intro = "This is what the business is all about!"

    return (
        <div>
            <Directory BusinessName='ABC Electric' intro={intro} another='another' verified='Boolean' />
        </div>
    )
}
