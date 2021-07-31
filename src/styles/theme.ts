import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            "100": "#DADADA",
            "300": "#999999",
            "800": "#47585B",
        }, white: {
            "0": "#FFFFFF",
            "100": "#F5F8FA",
        }, black: {
            "800": "#47585B",
        }, yellow: "#FFBA08",
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                bg: 'white.0',
                color: 'gray.800',
            }
        }
    }
})