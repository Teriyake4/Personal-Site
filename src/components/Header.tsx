import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Header() {
    const [isVisible, setIsVisible] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === "/" || location.pathname === "/home") {
            const handleScroll = () => {
                const scrollY = window.scrollY
                setIsVisible(scrollY > 480)
            }

            window.addEventListener("scroll", handleScroll)
            return () => {
                window.removeEventListener("scroll", handleScroll)
            }
        } else {
            setIsVisible(true)
        }
    }, [location.pathname])

    const headerVariants = {
        initial: { opacity: 0, y: 50, transition: { duration: 0.2 } },
        final: { opacity: 1, y: 0, transition: { duration: 0.2 } }
    }

    return (
        <motion.header
            className={
                "fixed flex justify-between align-items-start top-6 left-0 right-0 w-full min-w-screen mx-auto py-4 z-50 backdrop-blur-md rounded-[20px] border border-white/20 shadow-lg p-8 max-w-[90%] sm:max-w-[80%] md:max-w-[50%] lg:max-w-[25%]"
            }
            initial = "initial"
            animate = {isVisible ? "final" : "initial"}
            variants = {headerVariants}
        >
            <nav className="space-x-3 text-textcolor font-large font-spaceMono text-center flex">
                <Link to="/gallery" className="hover:underline">GALLERY</Link>
            </nav>
            <nav className="space-x-3 text-textcolor font-large font-spaceMono text-center flex">
                <Link to="/" className="hover:underline">HOME</Link>
            </nav>
            <nav className="space-x-3 text-textcolor font-large font-robot text-spaceMono flex">
                <Link to="/projects" className="hover:underline">PROJECTS</Link>
            </nav>
        </motion.header>
    )
}