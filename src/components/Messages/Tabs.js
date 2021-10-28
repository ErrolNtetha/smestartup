import React from 'react';
import { Link } from 'react-router-dom';

export default function Tabs() {
    const activeTab = null;

    const tab = window.location.pathname == '/messages/sent' ? activeTab : null;

    return (
        <section className="chatParentConatainer">
            <section className="tabs">
                <ul className="tabsItem" id='activeTab'>
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
