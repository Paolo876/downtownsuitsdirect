import { createTheme } from '@mui/material';

export const theme =createTheme(
    {
    palette: {
        type: 'light',
        primary: {
        main: '#1a1c20',
        },
        secondary: {
        main: '#ad3512',
        },
        info: {
            main: '#1976d2',
          },
        background: {
        default: '#ededed',
        paper: '#f5f5f5',
        },
        text: {
        primary: 'rgba(0,0,0,0.9)',
        secondary: 'rgba(0,0,0,0.75)',
        },
    },
    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        body1: {
        fontFamily: 'Quicksand',
        fontWeight: 300,
        lineHeight: 1,
        fontSize: '1em',
        },
        h2: {
        fontSize: '3em',
        },
        h1: {
        fontSize: '4em',
        },
        h3: {
        fontSize: '2.4em',
        fontFamily: 'Montserrat',
        textTransform: "none",
        },
        h4: {
        fontSize: '1.4em',
        fontFamily: 'Montserrat',
        textTransform: "none",
        },
        h5: {
        fontFamily: 'Montserrat',
        fontSize: '1.1em',
        textTransform: "none",
        },
        h6: {
        fontFamily: 'Montserrat',
        fontSize: '1em',
        textTransform: "none",
        },
        body2: {
        fontWeight: 400,
        },
        button: {
        fontFamily: 'Montserrat',
        fontWeight: 500,
        lineHeight: 1.5,
        },
    },
    }
);