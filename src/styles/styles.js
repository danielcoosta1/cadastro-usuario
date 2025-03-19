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

const Label = styled.label``;

const Span = styled.span`
  color: red;
`;

const Input = styled.input`
border-radius: 10px;
border: 1px solid 
`;

const Button = styled.button``;

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
  Span,
  Button,
};
