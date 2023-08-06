import React from "react";

export const ImageComponentDetail = ({ imageDataDetail }) => {
    const uint8Array = new Uint8Array(imageDataDetail);
    const blob = new Blob([uint8Array], { type: "image/png" });
    const imageUrl = URL.createObjectURL(blob);

    return (
        <img
            src={imageUrl}
            alt="Gambar"
            className="h-[269px] xxl:w-[382px] xl:w-[382px] w-auto object-cover object-center"
        />
    );
};
