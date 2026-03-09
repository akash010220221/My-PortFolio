import React, { useMemo } from "react";

const StarBackground = () => {
    const smallStars = useMemo(() => generateStars(700), []);
    const mediumStars = useMemo(() => generateStars(200), []);
    const largeStars = useMemo(() => generateStars(100), []);

    return (
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div
                className="absolute w-[1px] h-[1px] bg-transparent rounded-full animate-stars opacity-70"
                style={{
                    boxShadow: smallStars,
                    animationDuration: '50s',
                    top: 0
                }}
            />
            <div
                className="absolute w-[1px] h-[1px] bg-transparent rounded-full animate-stars opacity-70"
                style={{
                    boxShadow: smallStars,
                    animationDuration: '50s',
                    top: '100vh'
                }}
            />

            <div
                className="absolute w-[2px] h-[2px] bg-transparent rounded-full animate-stars opacity-50"
                style={{
                    boxShadow: mediumStars,
                    animationDuration: '100s',
                    top: 0
                }}
            />
            <div
                className="absolute w-[2px] h-[2px] bg-transparent rounded-full animate-stars opacity-50"
                style={{
                    boxShadow: mediumStars,
                    animationDuration: '100s',
                    top: '100vh'
                }}
            />

            <div
                className="absolute w-[3px] h-[3px] bg-transparent rounded-full animate-stars opacity-30"
                style={{
                    boxShadow: largeStars,
                    animationDuration: '150s',
                    top: 0
                }}
            />
            <div
                className="absolute w-[3px] h-[3px] bg-transparent rounded-full animate-stars opacity-30"
                style={{
                    boxShadow: largeStars,
                    animationDuration: '150s',
                    top: '100vh'
                }}
            />
        </div>
    );
};

// Helper to generate random box-shadow string
const generateStars = (count) => {
    let value = "";
    for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        value += `${x}vw ${y}vh #fff, `;
    }
    return value.slice(0, -2); // Remove last comma
};

export default StarBackground;
