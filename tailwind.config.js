/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
        fontFamily: {
            sans: ["work-sans", "Georgia"],
        },
        extend: {
            colors: {
                "light-pink": "hsl(275deg 100% 97% / 1)",
                "grayish-purple": "hsl(292deg 16% 49% / 1)",
                "dark-purple": "hsl(292deg 42% 14% / 1)",
                purple: "hsl(281deg 83% 54% / 1)",
                "purple-50": "hsl(281deg 83% 54% / 0.15)",
            },
            content: {
                "plus-icon": 'url("../assets/images/icon-plus.svg")',
                "minus-icon": 'url("../assets/images/icon-minus.svg")',
            },
        },
    },
    plugins: [],
};
