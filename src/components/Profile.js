import React from 'react'
import faker from "faker";

export default function Profile() {
    return (
        <section>
            <section>
                <img src={faker.image.avatar()} alt="pp" className="profilePicture" />
            </section>
        </section>
    )
}
