import React from "react";
import { useState } from "react";
import type { Image } from '../../../api/type';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function event(eventName: string, previewImg: string, link: string): React.ReactNode {
    return (
        <div className="rounded-[30px] overflow-hidden bg-white/5 backdrop-blur-md border border-white/20 p-2">
            <Link to={link}>
                <h1 className="text-[1.2rem] text-textcolor font-spaceMono p-1">
                    {eventName}
                </h1>
                <nav className="rounded-[20px] overflow-hidden">
                    <section className="flex justify-center">
                        <div className="relative w-full h-full overflow-hidden group">
                            <img
                                src={previewImg}
                                className="w-[100vh] h-full object-cover transition-transform duration-[600ms] ease-in-out scale-[1.05] group-hover:scale-[1]"
                            />
                        </div>
                    </section>
                </nav>
            </Link>
        </div>
    );
}

export default function Page() {
    // https://1drv.ms/f/c/87b17533b507916d/EsrgrVEkkyVJrvMSNntZrZAB7PbqrQRRfQvpiWWMS4vM4w?e=v78k0f

    return (
        <div className="flex flex-col items-center h-screen bg-base m-1 md:m-4">
            <h1 className="my-[6rem] text-[2rem] text-textcolor mb-4 font-spaceMono">
                Gallery
            </h1>
            <section className="grid gap-4 md:grid-cols-2 md:mx-[4rem]">
                <div>
                    {event(
                        "North California/Oregon",
                        "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/road_trip_2025/DSC01995_disp.jpeg",
                        "/gallery/california-oregon"
                    )}
                </div>
                <div>
                    {event(
                        "Santa Cruz",
                        "https://bhijoddwq2a3q5hu.public.blob.vercel-storage.com/santa_cruz_2025/DSC03001_disp.jpeg",
                        "/gallery/santa-cruz"
                    )}
                </div>
            </section>
        </div>
    )
}