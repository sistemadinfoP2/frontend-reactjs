import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;
    max-width: 700px;
    background-color: #0b2544;
    @media (min-width: 720px) and (max-width: 1279px){
        max-width: 100% ;
    }
    @media (min-width: 1280px){
        max-width: 50% ;
    }
    form {
        margin: 45px 0;
        width: 340px;
        text-align: center;
        h1 {
            color: #ffffff;
            margin-bottom: 24px;
            font-size: 26px;
        }
        button {
            /* background: #61b34e; */
            height: 50px;
            border-radius: 10px !important;
            border: 0;
            padding: 0 40px 0 40px !important;
            color: #495057 !important;
            width: 80%;
            /* font-weight: 550; */
            margin-top: 16px;
            transition: background-color 0.2s;
            font-size: 16px;
            &:hover {
                background: ${shade(0.1, '#61b34e')};
            }
        }
        span {
            font-weight: 600 !important;
        }
        a {
            color: #f4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;
            &:hover {
                color: ${shade(0.2, '#f4ede8')}
            }
        }
    }
    > a {
        color: #ff9000;
        margin-top: 24px;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: color 0.2s;
        svg {
            margin-right: 16px;
        }
        &:hover {
            color: ${shade(0.2, '#f4ede8')}
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    z-index: 1;
    background-size: cover;
`;


export const Button = styled.button`
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: #ea4335;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;

    transition: filter 0.2s;
    
    img {
      margin-right: 8px;
    }

    &:hover {
      filter: brightness(0.9);
    }

  /* .separator {
    font-size: 14px;
    color: #a8a8b3;
    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-right: 16px;
    }

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-left: 16px;
    }
  } */
`