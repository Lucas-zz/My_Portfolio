import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let lightTheme = createTheme({
    palette: {
        primary: {
            main: "#FFF",

        },
        secondary: {
            main: "#3F61D7",

        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                color: "secondary"
            }
        }
    },
    typography: {
        body1: {
            color: "#111"
        },
        body2: {
            color: "#111"
        },
        h1: {
            color: "#111"
        },
        h2: {
            color: "#111"
        },
        h3: {
            color: "#111"
        },
        h4: {
            color: "#111"
        },
        h5: {
            color: "#111"
        },
        h6: {
            color: "#111"
        },
    }
});

lightTheme = responsiveFontSizes(lightTheme);

let darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#111',
        },
        secondary: {
            main: '#3F61D7',
        },
    },
    typography: {
        body1: {
            color: "#FFF",
        },
        body2: {
            color: "#FFF",
        },
        h1: {
            color: "#FFF",
        },
        h2: {
            color: "#FFF",
        },
        h3: {
            color: "#FFF",
        },
        h4: {
            color: "#FFF",
        },
        h5: {
            color: "#FFF",
        },
        h6: {
            color: "#FFF",
        },
    }
});

darkTheme = responsiveFontSizes(darkTheme);

export { darkTheme, lightTheme }