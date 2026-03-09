/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3B82F6",
                secondary: "#10B981",
                dark: "#1F2937",
                light: "#F3F4F6",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                outfit: ['Outfit', 'sans-serif'],
            },
            animation: {
                blob: "blob 7s infinite",
                morph: "morph 3s linear infinite",
            },
            keyframes: {
                blob: {
                    "0%": { transform: "translate(0px, 0px) scale(1)" },
                    "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                    "100%": { transform: "translate(0px, 0px) scale(1)" },
                },
                morph: {
                    "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
                    "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
                }
            }
        },
    },
    plugins: [],
}
