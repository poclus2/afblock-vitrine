/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#0e377b",
                "accent": "#fbcd1b",
                "neutral-dark": "#0e121b",
                "neutral-grey": "#4e6797",
                "background-light": "#ffffff",
                "background-off": "#f8f9fc",
                "background-dark": "#111621",
                "surface-light": "#FFFFFF",
                "surface-dark": "#1F2937",
                "text-light": "#111827",
                "text-dark": "#F3F4F6",
                "subtext-light": "#4B5563",
                "subtext-dark": "#9CA3AF",
            },
            fontFamily: {
                "sans": ["Inter", "sans-serif"],
                "display": ["Inter", "sans-serif"],
            },
            borderRadius: {
                "lg": "0.75rem",
                "xl": "1rem",
                "2xl": "1.5rem"
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(14, 50, 124, 0.08)',
                'hover': '0 10px 25px -5px rgba(14, 50, 124, 0.12)',
                'glow': '0 0 20px rgba(14, 55, 123, 0.15)',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(-6deg)' },
                    '50%': { transform: 'translateY(-10px) rotate(-6deg)' },
                }
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}
