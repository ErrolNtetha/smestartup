import React from 'react';
import { Link } from 'react-router-dom';

export default function Tabs() {

    return (
        <section className="chatParentConatainer">
            <section className="tabs">
                <ul className="tabsItem">
                    <li>
                        <Link to='/messages/inbox'> Inbox </Link>
                    </li>
                    <li >
                        <Link  to='/messages/sent'> Sent </Link>
                    </li>
                    <li>
                        <Link to='/messages/received'> Received </Link>
                    </li>
                </ul>
            </section>
        </section>
    )
}
