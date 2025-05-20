import styled from "styled-components";

// CONTAINER PRINCIPAL
const Main = styled.main`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem; /* para dar respiro lateral em telas menores */
`;

// FORMULÁRIO
const Form = styled.form`
  margin: 2rem auto;
  max-width: 75rem;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    max-width: 60rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    max-width: 100%;
    margin: 0;
  }
`;

const Tittle = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ListaInputs = styled.ul`
  display: flex;
  flex-direction: column;
  

  gap: 1rem;
  width: 100%;
  @media (max-width: 768px) {
    width: 80%;
    margin-left: -25px;
  }
`;

const DivLinha1 = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const DivLinha2 = styled.div`
  width: 100%;
`;

const ListaItem = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Label = styled.label`
  color: #a9a9a9;
  font-size: 0.7rem;
  margin-bottom: 0.25rem;
  margin-left: 0.25rem;

  span {
    color: #ef4f45;
    font-weight: bold;
  }
`;

const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #d2dae2;
  padding: 0.5rem 1rem;
  background-color: #fff;
  outline: none;
  width: 100%;
`;

// CASO USE A DIV DE IMAGEM NO FUTURO
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

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 20%;
  }
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

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
};
