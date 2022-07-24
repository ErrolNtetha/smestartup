import React, { useState } from 'react';

interface Props {
    image: Blob;
    className: string;
}

export const Preview = ({ image, className }: Props) => {
    const [preview, setPreview] = useState<string | ArrayBuffer>('');
    const reader = new FileReader();

    console.log(image);

    reader.onload = () => {
        reader.readAsDataURL(image);
        console.log(reader);
        if (reader.result) {
            setPreview(reader.result);
            console.log(reader.result);
        }
    };

    return <img src={preview} alt='upload preview' className={className} />;
};
