import React from "react";
import { useState } from "react";
import type { Image } from '../../../api/type';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function event(eventName: string, previewImg: string, link: string): React.ReactNode {
    return (
        <div className="my-1 rounded-[30px] overflow-hidden bg-white/5 backdrop-blur-md border border-white/20 p-2">
            <Link to={link}>
                <h2 className="text-[1.2rem] text-textcolor font-spaceMono p-1">
                    {eventName}
                </h2>
                <nav className="rounded-[20px] overflow-hidden">
                    <section className="flex justify-center">
                        <motion.img
                            src={previewImg}
                            className="w-full h-[16rem] object-cover cursor-pointer"
                        />
                    </section>
                </nav>
            </Link>
        </div>
    );
}

export default function Page() {
    // https://1drv.ms/f/c/87b17533b507916d/EsrgrVEkkyVJrvMSNntZrZAB7PbqrQRRfQvpiWWMS4vM4w?e=v78k0f

    return (
        <div className="flex flex-col items-center h-screen bg-base">
            <h1 className="my-[6rem] text-[3rem] text-textcolor mb-4 font-spaceMono">
                Gallery
            </h1>
            <section className="flex justify-center m-1 md:m-4">
                {event(
                    "North California/Oregon",
                    "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01747-Pano_disp.jpeg",
                    "/gallery/california-oregon"
                )}
            </section>
        </div>
    )
}