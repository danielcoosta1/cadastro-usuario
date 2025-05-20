import styled from "styled-components";

const Main = styled.main`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.section`
  margin: 0 auto;
  max-width: 75rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  align-items: center;

  @media (max-width: 1200px) {
    gap: 1rem;
    justify-content: center;
    max-width: 100%;

    padding: 1rem 2rem;
  }

  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`;

const Titulo = styled.h1`
  font-size: 2rem;

  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const ContainerLista = styled.div`
  display: flex;
  flex-direction: column;


  @media (max-width: 600px) {

  }
`;

const Lista = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 1rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }
    @media (max-width: 600px) {
    align-items: center;
    padding: 1em .5em;
    gap: 1rem;
    text-align: center;
  }
`;

const ListaItem = styled.li`
  display: flex;
  align-items: center;
  gap: 2rem;

  background-color: #252d48;
  border-radius: 32px;
  padding: 1rem;
  width: 30%; /* permite que o item ocupe o espaço disponível */

  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    align-items: center;
    padding: 1em .5em;
    gap: 1rem;
    text-align: center;
  }
`;

const Avatar = styled.img`
  width: 90px;
  @media (max-width: 600px) {
     width: 60px;
  }
`;

const DivImagem = styled.div`
  width: 30%;

  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const Trash = styled.img`
  cursor: pointer;


  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const ContainerDescricao = styled.div`
  color: #d3d3d3;
  width: 70%;
  font-size: 0.75rem;

  @media (max-width: 600px) {
    width: 100%;
    
  }
`;

export {
  Main,
  Container,
  ContainerLista,
  DivImagem,
  Avatar,
  Lista,
  ListaItem,
  Trash,
  ContainerDescricao,
  Titulo,
};
