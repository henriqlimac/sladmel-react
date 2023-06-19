import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: var(--white)
    }

    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;

        height: 100%;
        width: 100%;
    }

    *, button, input{
        border: 0;
        background: none;
        font-family: 'Poppins', sans-serif;
    }

    html {
        background-color: var(--primary);
        color: var(--secondary);
    }

    :root {
        --primary: #fff;
        --secondary: #000;
        --shadow-100: rgba(0, 0, 0, 0.1);
        --shadow-500: rgba(0, 0, 0, 0.5);

        --size-xxs: 0.5rem;
        --size-xs: 0.75rem;
        --size-sm: 0.875rem;
        --size-base: 1rem;
        --size-lg: 1.125rem;
        --size-xl: 1.25rem;
        --size-2xl: 1.5rem;
        --size-3xl: 1.875rem;
        --size-4xl: 2.25rem;
        --size-5xl: 3rem;
        --size-6xl: 3.75rem;
        --size-7xl: 4.5rem;
        --size-8xl: 6rem;
        --size-9xl: 8rem;
        --size-10xl: 10rem;
    }
`;