import React from "react";
import gallery, { Image } from "../Gallery"


export default function Page() {
    const images: Image[] = [
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/santa_cruz_2025/DSC03067_disp.jpeg", orientation: "portrait"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/santa_cruz_2025/DSC03077_disp.jpeg", orientation: "landscape"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/santa_cruz_2025/DSC03089_disp.jpeg", orientation: "portrait"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/santa_cruz_2025/DSC02997_disp.jpeg", orientation: "landscape"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/santa_cruz_2025/DSC03001_disp.jpeg", orientation: "landscape"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/santa_cruz_2025/DSC03163_disp.jpeg", orientation: "portrait"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/santa_cruz_2025/DSC03012_disp.jpeg", orientation: "landscape"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/santa_cruz_2025/DSC03014_disp.jpeg", orientation: "portrait"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/santa_cruz_2025/DSC03001-Pano_disp.jpeg", orientation: "pano"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/santa_cruz_2025/DSC03032_disp.jpeg", orientation: "portrait"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/santa_cruz_2025/DSC03056_disp.jpeg", orientation: "portrait"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/santa_cruz_2025/DSC03059_disp.jpeg", orientation: "landscape"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/santa_cruz_2025/DSC03122_disp.jpeg", orientation: "landscape"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/santa_cruz_2025/DSC03125_disp.jpeg", orientation: "landscape"}
    ]

    return (
        <div>
            {gallery("Santa Cruz", images)}
        </div>
    )
}