import React from 'react';
import Tabs from './Tabs';

export default function Sent() {

    // Make a request to the backend for the sent proposals
    // Check if they are available, then retrieve them

    return (
        <section>
            <Tabs />

            <section>
                You have no proposals sent currently.
            </section>
        </section>
    )
}
