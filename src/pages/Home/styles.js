import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */

    .dialog-demo .p-button {
    margin: 0 .5rem 0 0;
    min-width: 10rem;
    }

    .dialog-demo p {
        margin: 0;
        line-height: 1.5;
    }

    .dialog-demo .p-dialog .p-button {
        min-width: 6rem;
    }

    button {
        margin-top: 10px;
        width: 80px;
        position: absolute;
        right: 2%;
        border: transparent;
        padding: 4px;
        border-radius: 4px;
        color: #fff;
        background: #0b2544;
        cursor: pointer;
        font-size: 12px;
        font-weight: bold;
        font-family: helvetica;
    }
`