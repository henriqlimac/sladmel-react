import styled from 'styled-components';
import wave from '../../imgs/background.svg'

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 5rem;
    background-color: var(--primary);
    background-image: url(${wave});
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 681px) {
        margin-top: 0;
    }
`;

export const About = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 768px;
    padding: 20px;
    gap: 20px;
    text-align: center;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    > h1 {
        font-family: "Diphylleia", serif;
        letter-spacing: -1px;
        font-size: var(--size-4xl);
    }
`;

export const Description = styled.div`
    display: flex;

    > p {
        font-size: var(--size-sm);

        @media (min-width: 768px) {
            font-size: var(--size-base);
        }
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    margin: 20px;
`;