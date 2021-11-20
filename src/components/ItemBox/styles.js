import styled from 'styled-components';

export const Container = styled.div `
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background: #d3d3d3;
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
  }

  a {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    background: #000;
    color: #fff;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-family: sans-serif;
  }
`;