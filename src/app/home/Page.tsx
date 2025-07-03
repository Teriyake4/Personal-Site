import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

    
export default function Page() {
    const ref = useRef(null)
    const {scrollY} = useScroll({target: ref})

    const windowScale = useTransform(scrollY, [0, 480], [0.9, 1])
    const cornerRadius = useTransform(scrollY, [0, 500], ["2rem", "0rem"]) // "0rem"

    const yName = useTransform(scrollY, [0, 1000], [0, -800])
    const ySubTop = useTransform(scrollY, [0, 1000], [0, -500])
    const ySubBot = useTransform(scrollY, [0, 1000], [0, -1200])
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
            PORTFOLIO<span style={{ width: "0.1em", display: "inline-block" }}> </span>
        </motion.h1>
        <motion.div
            style={{ y: ySubTop }}
            className="absolute z-10 top-[4rem] left-[6rem] text-s text-white font-spaceMono"
        >
            PREPARE TO BE AMAZED...OR NOT, BY MY CODE AND PHOTOS
        </motion.div>
        <motion.div
            style={{ y: ySubTop }}
            className="absolute z-10 top-[4rem] right-[6rem] text-s text-white font-spaceMono"
        >
            {/* PHOTO GALLERY */}
        </motion.div>
        <motion.div
            style={{ y: ySubBot }}
            className="absolute z-10 bottom-[4rem] left-[6rem] text-s text-white font-spaceMono"
        >
            {/* CONTACT */}
        </motion.div>
      </div>
        <div className="relative h-screen z-30 bg-base top-[30rem] p-50">
            <section className="flex justify-left">
                <p className="text-[4rem] text-textcolor font-roboto px-16">
                    Hey — I'm Ian
                </p>
            </section>
            <section className="flex justify-center">
                <p className="text-[2rem] text-textcolor font-robot px-16">
                    Welcome to my personal portfolio website!
                    I'm a computer science student with a passion for photography. Check out my projects and photos, and feel free to reach out if you have any questions or just want to chat.
                </p>
            </section>
        </div>
        </>
    )
}