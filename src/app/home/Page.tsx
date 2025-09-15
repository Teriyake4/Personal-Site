import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

    
export default function Page() {
    const ref = useRef(null)
    const {scrollY} = useScroll({target: ref})

    const vh = typeof window !== "undefined" ? window.innerHeight : 800

    // console.log("vh", vh)

    const windowScale = useTransform(scrollY, [0, vh * 0.6], [0.9, 1])
    const cornerRadius = useTransform(scrollY, [0, 500], ["2rem", "0rem"]) // "0rem"

    const scaleScrollRange = [0, vh * 1]
    
    const yName = useTransform(scrollY, scaleScrollRange, [0, vh * -0.75])
    const ySub = useTransform(scrollY, scaleScrollRange, [0, vh * -0.9])
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
                className="
                    absolute z-10 flex items-center justify-center text-center w-full h-full tracking-[-0.06em] text-white font-spaceMono font-bold
                    text-[3rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem]
                "
            >
                Hey — I'm Ian
            </motion.h1>
            <motion.div
                style={{ y: ySub }}
                className="
                    absolute z-10 bottom-[6.5rem] text-white font-spaceMono
                    text-[0.9rem] sm:text-[0.9rem] md:text-[0.9rem] lg:text-[1rem]
                "
            >
                Welcome to my personal portfolio website
            </motion.div>
        </div>
        
        <div className="relative h-screen bg-base top-[30rem] p-50 mx-[6rem]">
            {/*  Intro */}
            <div className="my-8">
                <h2 className="text-[3rem] text-textcolor font-spaceMono p-8">
                    About Me
                </h2>
                <div className="backdrop-blur-md rounded-[20px] border border-white/20 p-8">
                    <section className="flex justify-center">
                        <p className="
                            text-textcolor font-spaceMono tracking-tight
                            text-[1rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.5rem]
                        ">
                            I'm a second year computer science student at Stevens Institute of Technology in New Jersey. 
                            I have a wide range of skills and a specialized interest in AI. I have a drive to learn and pursue topics on my own. 
                            Check out my projects and photos, and feel free to reach out if you have any questions or just want to chat.
                        </p>
                    </section>
                </div>
            </div>
            {/* Languages */}
            <div className="my-8">
                <section className="p-50">
                    <h2 className="text-[3rem] text-textcolor font-spaceMono p-8">
                        Languages
                    </h2>
                </section>
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
        </div>
        </>
    )
}