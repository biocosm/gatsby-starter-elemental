const plugin = require("tailwindcss/plugin")
const _ = require("lodash");

const gradient = plugin(function({ addUtilities, e, theme, variants }) {
    const gradients = theme("gradients", {})
    const gradientVariants = variants("gradients", [])

    const utilities = _.map(gradients, ([start, end], name) => ({
        [`.bg-gradient-${e(name)}`]: {
            backgroundImage: `linear-gradient(to right, ${start}, ${end})`,
        },
    }))

    addUtilities(utilities, gradientVariants)
})


module.exports = {
    purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
    theme: {
        gradients: theme => ({
            primary: [theme("colors.primary"), theme("colors.secondary")],
        }),
        themes: {
            dark: {
                bg: "#111",
                bgalt: "#111",
                "color-default": "#eee",
                "color-2": "#389FCB",
                "color-1": "#11AD99",
                border: "#6484AB",
                primary: "#FF5A5F",
                medium: "#141C1B"
            },
        },
        colors: {
            bg: "#f5f5f5",
            bgalt: "#f5f5f5",
            "color-default": "#333",
            "color-1": "#3c549c",
            "color-2": "#535073",
            "color-3": "#aeb4c5",
            primary: "#FF5A5F",
            secondary: "#6484AB",
            link: "#389FCB",
            medium: "#cfd8dc",
            white: "#f5f5f5",
            black: "#111",
            transparent: "rgba(0,0,0,0)",
            error: "#ef5350",
            success: "#6c9c54"
        },
        extend: {
            fontSize: {
                '7xl': '5rem'
            },
            spacing: {
                '1px': '1px',
                '2px': '2px'
            }
        },
    },
    variants: {},
    plugins: [require(`tailwind-theme-switcher`), gradient],
}
