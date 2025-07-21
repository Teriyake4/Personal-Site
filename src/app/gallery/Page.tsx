import React from "react";
import { useEffect, useState } from "react";

export default function Page() {
    // https://1drv.ms/f/c/87b17533b507916d/EsrgrVEkkyVJrvMSNntZrZAB7PbqrQRRfQvpiWWMS4vM4w?e=v78k0f
    interface Image {
        id: number;
        preview: string;
        image: string;
        aspectRatio: number;
    }
    const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {
        console.log("Getting getImages")
        fetch("/api/images")
            .then(response => response.json())
            .then(data => setImages(data))
    })

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-base">
            <h1 className="text-4xl font-bold text-textcolor mb-4">Gallery Page</h1>
            {/* <div className="text-textcolor">{images}</div> */}
        </div>
    )
}