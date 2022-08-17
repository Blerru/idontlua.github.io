import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.scss";
import AboutSection from "./sections/AboutSection";
import useScrollSnap from "react-use-scroll-snap";
import { HashRouter, Route, Routes } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import PostsSection from "./sections/PostsSection";

function HomePage() {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 100, delay: 0 });

    return (
        <div className="section-wrapper" ref={scrollRef}>
            <AboutSection />
            <PostsSection />
        </div>
    );
}

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:slug" element={<BlogPost />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
