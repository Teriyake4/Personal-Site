import React from "react";
import gallery, { Image } from "../Gallery"


export default function Page() {
    const images: Image[] = [
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01685_disp.jpeg", orientation: "portrait"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01995_disp.jpeg", orientation: "landscape"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01635_disp.jpeg", orientation: "portrait" },
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01747-Pano_disp.jpeg", orientation: "pano"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01725_disp.jpeg", orientation: "portrait"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01921_disp.jpeg", orientation: "landscape"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01948_disp.jpeg", orientation: "portrait"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01928_disp.jpeg", orientation: "landscape"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01676_disp.jpeg", orientation: "landscape" },
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC02467_disp.jpeg", orientation: "portrait"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC02023_disp.jpeg", orientation: "landscape"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC02028_disp.jpeg", orientation: "portrait"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC02184_disp.jpeg", orientation: "landscape"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC02289_disp.jpeg", orientation: "landscape"}
    ]

    return (
        <div>
            {gallery("North California/Oregon", images)}
        </div>
    )
}