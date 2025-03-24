import styled from "styled-components";

const Main = styled.main`
  background-color: #181f36;

  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.section`
  margin: 0 auto;
  max-width: 75rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  align-items: center;
`;

const ContainerLista = styled.div`
  margin: 0 auto;
  max-width: 75rem;
  height: 90%;
`;

const Lista = styled.ul`
  display: flex;
  flex-wrap: wrap;

  height: 100%;
  width: 100%;
  gap: 1rem;
 
`;

const ListaItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;

  background-color: #252d48;
  border-radius: 32px;
  padding: 1rem;
  min-width: 20%;
  height: 40%;
  
`;

const Avatar = styled.img`
  width: 90px;
`;

const DivImagem = styled.div`
  width: 30%;
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
  font-size: .75rem;
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
};
