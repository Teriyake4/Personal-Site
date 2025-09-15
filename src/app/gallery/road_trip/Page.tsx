import React from "react";

type Image = {
  src: string;
  orientation: "landscape" | "portrait" | "pano";
};

export default function Page() {
    const images: Image[] = [
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01635_disp.jpeg", orientation: "portrait" },
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01995_disp.jpeg", orientation: "landscape"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01685_disp.jpeg", orientation: "portrait"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01701_disp.jpeg", orientation: "landscape"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01676_disp.jpeg", orientation: "landscape" },
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01747-Pano_disp.jpeg", orientation: "pano"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01725_disp.jpeg", orientation: "portrait"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01921_disp.jpeg", orientation: "landscape"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01948_disp.jpeg", orientation: "portrait"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01928_disp.jpeg", orientation: "landscape"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01949_disp.jpeg", orientation: "landscape"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC02467_disp.jpeg", orientation: "portrait"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC02023_disp.jpeg", orientation: "landscape"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC02028_disp.jpeg", orientation: "portrait"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC02184_disp.jpeg", orientation: "landscape"},
        {src: "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC02289_disp.jpeg", orientation: "landscape"}
    ]

    return (
        <div className="flex flex-col items-center h-screen bg-base">
            <h1 className="my-[1rem] text-[2rem] text-textcolor mb-4 font-spaceMono">
                North California/Oregon
            </h1>
            {/* auto-rows-[90vh] */}
            <div className="grid grid-cols-4 gap-4 p-8 auto-rows-auto">
                {images.map((img, idx) => {
                    // Determine col-span based on orientation
                    let colSpan = img.orientation === "portrait" ? 1 : img.orientation === "landscape" ? 2 : img.orientation === "pano" ? 4 : 1;
                    return (
                    <div
                        key={idx}
                        className={`flex items-center justify-center relative overflow-hidden row-span-1 bg-white/5 backdrop-blur-md border border-white/20 rounded-[20px] p-3
                            ${colSpan === 1 ? "col-span-1" : ""}
                            ${colSpan === 2 ? "col-span-2" : ""}
                            ${colSpan === 4 ? "col-span-4" : ""}
                        `}
                    >

                        <img
                        src={img.src}
                        // alt={`Image ${idx + 1}`}
                        className="w-full h-auto object-contain rounded-[15px]"
                        />
                    </div>
                    );
                })}
            </div>
        </div>
    )
}