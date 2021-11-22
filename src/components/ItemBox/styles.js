import styled from 'styled-components';

export const Container = styled.div `
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background: #fff;
  height: 80px;
  padding: 0 20px;
  margin-top: 12px;

  div {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-top: 4px;
    width: 300px;
    font-family: arial;
    color: #0b2544;
    word-break: break-word;
  }

  a {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    background: #0b2544;
    color: #fff;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-family: sans-serif;
    font-weight: bold;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;