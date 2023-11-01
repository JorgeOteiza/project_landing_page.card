import React, { useEffect, useState } from "react";

export const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsVisible(scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`footer bg-black color-white ${isVisible ? "visible" : "hidden"}`}>
            <p>Copyright @ Your Website 2023</p>
        </div>
    );
};
const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY === 0);
};


