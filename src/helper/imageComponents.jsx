import React from "react";

export const ImageComponentCard = ({ imageData }) => {
    const uint8Array = new Uint8Array(imageData);
    const blob = new Blob([uint8Array], { type: "image/png" });
    const imageUrl = URL.createObjectURL(blob);
    return <img src={imageUrl} alt="Gambar" className="h-[207.8px] w-[306.86px] rounded-t-[21px] object-contain object-center " />;
};


