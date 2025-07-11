import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

    
export default function Page() {
    const ref = useRef(null)
    const {scrollY} = useScroll({target: ref})

    const vh = typeof window !== "undefined" ? window.innerHeight : 800

    // console.log("vh", vh)

    const windowScale = useTransform(scrollY, [0, vh * 0.6], [0.9, 1])
    const cornerRadius = useTransform(scrollY, [0, 500], ["2rem", "0rem"]) // "0rem"

    const scaleScrollRange = [0, vh * 1.3]
    
    const yName = useTransform(scrollY, scaleScrollRange, [0, vh * -0.6])
    const ySubTop = useTransform(scrollY, scaleScrollRange, [0, vh * -0.4])
    // const backgroundColor = useTransform(scrollY, [0, 1000], ["", "#fff"])


    return (
        <>
        <div className="sticky top-0 h-screen flex items-center justify-center bg-textcolor">
            {/* SCALING CONTAINER */}
            <motion.div
            ref={ref}
            style={{ scale: windowScale, borderRadius: cornerRadius}}
            className="relative w-full h-full overflow-hidden"
            >
                {/* NON-SCALING GRADIENT */}
                <div className="absolute inset-0 z-0 pointer-events-none bg-radial-gradient from-primary to-base"/>
            </motion.div>

            <motion.h1
                style={{ y: yName }}
                className="absolute z-10 flex items-center justify-center text-center w-full h-full tracking-[-0.05em] text-[10rem] text-white font-spaceMono font-bold"
            >
                PORTFOLIO
            </motion.h1>
            <motion.div
                style={{ y: ySubTop }}
                className="absolute z-10 top-[4rem] left-[8rem] text-s text-white font-spaceMono"
            >
                PREPARE TO BE AMAZED...OR NOT, BY MY CODE AND PHOTOS
            </motion.div>
        </div>
        <div className="relative h-screen z-30 bg-base top-[30rem] p-50">
            {/*  Intro */}
            <div className="backdrop-blur-md rounded-[20px] border border-white/20 m-8 p-8">
                <section className="flex justify-left">
                    <h2 className="text-[3rem] text-textcolor font-spaceMono">
                        Hey — I'm Ian
                    </h2>
                </section>
                <section className="flex justify-center">
                    <p className="text-[1.5rem] text-textcolor font-spaceMono tracking-tight">
                        Welcome to my personal portfolio website!
                        I'm a computer science student with a passion for photography. Check out my projects and photos, and feel free to reach out if you have any questions or just want to chat.
                    </p>
                </section>
            </div>
            {/* Languages */}
            <div className="flex flex-row gap-4 m-8 justify-center">
                <div className="backdrop-blur-md rounded-[20px] border border-white/20 p-8">
                    Python
                </div>
                <div className="backdrop-blur-md rounded-[20px] border border-white/20 p-8">
                    Java
                </div>
                <div className="backdrop-blur-md rounded-[20px] border border-white/20 p-8">
                    TypeScript
                </div>
            </div>
        </div>
        </>
    )
}