import React, { useState } from 'react';

export const useImagePreview = (image) => {
    const [preview, setPreview] = useState(null);
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
            setPreview(reader.result);
    };

    return (
        <div>
            <img src={preview} alt='upload preview' />
        </div>
    );
};
