import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --clr-black: rgb(23, 23, 23);
        --clr-white: rgb(255, 255, 255);
        --clr-off-white: rgb(244, 244, 244);
        --clr-purple-300: rgb(82, 72, 156);
        --clr-blue-300: rgb(124, 198, 254);
        --clr-blue-500: rgb(64, 98, 187);
        --clr-blue-green: rgb(89, 195, 195);
        --clr-blue-sky: rgb(134, 187, 216);
        --clr-gray-400: rgb(73, 73, 73);
        --clr-green-400: rgb(0, 131, 9);
        --clr-green-300: rgb(3, 186, 15);
        --clr-red-400: #e60000;
        --clr-red-600: #9e0000;

        --ff-primary: "Montserrat", sans-serif;
        --ff-secondary: "Montserrat Alternates", sans-serif;

        --fw-light: 300;
        --fw-regular: 400;
        --fw-semi-bold: 500;
        --fw-bold: 700;

        --fs-300: 1rem;
        --fs-400: 1.125rem;
        --fs-500: 1.25rem;
        --fs-600: 1.50rem;
        --fs-700: 1.75rem;
        --fs-800: 2rem;

        --td-fast: 300ms;
        --td-medium: 800ms;
        --td-slow: 2s;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font: inherit;
        border: none;
        text-decoration: none;
        list-style-type: none;
        outline: none;

        /* white-space: pre-line; */
        
        font-size: var(--fs-400);
        font-family: var(--ff-primary);
    }

    header + main {
        top: calc(0px + 61px);
    }

    body > #root > .App > main > div {
        min-height: 100vh;
    }

    .App {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--clr-off-white);
    }

    img {
        display: block;
        max-width: 100%;
    }

    button {
        cursor: pointer;
    }
`
