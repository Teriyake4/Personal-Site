import React from "react"
import "./App.css"
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import Home from "./app/home/Page"
import Gallery from "./app/gallery/Page"
import Projects from "./app/projects/Page"
import Header from "./components/Header"
import RoadTrip from "./app/gallery/road_trip/Page"

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/gallery/california-oregon" element={<RoadTrip/>}/>
            </Routes>
            <Analytics />
        </Router>
    )
}

export default App
