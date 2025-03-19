import styled from "styled-components";

const Main = styled.main`
  background-color: #181f36;

  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

//TOP CONTAINER

const DivImagem = styled.div`
  background: linear-gradient(to right, #fe7e5d, #7f3841);

  margin: 5rem auto;

  height: 30%;
  width: 50%;
  max-width: 75rem;
  

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 30px;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

// FORM

const Form = styled.form`
  margin: 0 auto;
  max-width: 75rem;
  height: 50%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  align-items: center;
`;

const Tittle = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 600;
`;

const ListaInputs = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DivLinha1 = styled.div`
  display: flex;
  gap: 2rem;
`;
const DivLinha2 = styled.div``;

const ListaItem = styled.li`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #A9A9A9;
  font-size: 0.7rem;
  margin-bottom: 0.25rem;
  margin-left: 0.25rem;

  span {
    color: #ef4f45;
    font-weight: bold;
  }
`;

// const Span = styled.span`
//   color: red;
// `;

const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #d2dae2;
  padding: 0.5rem 1rem;
  background-color: #fff;
  outline: none;
`;

const Button = styled.button`
    border: none;
    background: linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%);
    font-size: 1rem;
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 30px;
    cursor: pointer;
    width: 60%;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }

`;

// BUTTON -

export {
  Main,
  DivImagem,
  Img,
  Form,
  Tittle,
  ListaInputs,
  DivLinha1,
  DivLinha2,
  Label,
  Input,
  ListaItem,
  Button,
};
