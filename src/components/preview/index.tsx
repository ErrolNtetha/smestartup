import React, { useState } from 'react';

interface Prop {
    image: Blob | null;
}

export const Preview = ({ image }: Prop) => {
    const [preview, setPreview] = useState(null);
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
        console.log(e);
        if (reader.result) {
            setPreview(reader.result);
        }
    };

    return <img src={preview} alt='upload preview' />;
};
