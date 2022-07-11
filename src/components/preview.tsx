import React, { useState } from 'react';

interface Props {
    image: string | Blob;
    className: string;
}

export const Preview = ({ image, className }: Props) => {
    const [preview, setPreview] = useState(null);
    const reader = new FileReader();

    reader.readAsDataURL(image);
    reader.onload = () => {
            setPreview(reader.result);
    };

    return (
        <div>
            <img src={preview} alt='upload preview' className={className} />
        </div>
    );
};
