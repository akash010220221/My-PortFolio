/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                canvas: "#0b0f17",
                surface: {
                    DEFAULT: "#121723",
                    subtle: "#0e131d",
                    elevated: "#182030",
                    border: "#1f293d",
                },
                accent: {
                    DEFAULT: "#6366f1",
                    hover: "#4f46e5",
                    light: "#818cf8",
                },
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
                heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
        },
    },
    plugins: [],
}
