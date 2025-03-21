

import { useRef } from "react";
import { useNavigate } from "react-router-dom";

//DADOS
import api from "../../services/api.js";

//ESTILOS
import ButtonDefault from "../../components/Button/index.jsx";
import TopBackGroundDefault from "../../components/TopBackGround/index.jsx";

import {
  Main,
  Form,
  Tittle,
  ListaInputs,
  DivLinha1,
  DivLinha2,
  Input,
  ListaItem,
  Label
  
} from "./styles.js";


//PÁGINA
function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate();



  async function cadastrarNovoUsuario() {
    const data = await api.post("/users", {
      name: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value,
    });
    console.log(data);
  }

  return (
    <>
      <Main>
        <TopBackGroundDefault />
        <Form>
          <Tittle>Cadastro de Usuário</Tittle>
          <ListaInputs>
            <DivLinha1>
              <ListaItem>
                <Label htmlFor="nome">
                  {" "}
                  Nome do usuário <span>*</span>
                </Label>
                <Input
                  type="text"
                  id="nome"
                  placeholder="Nome do usuário"
                  ref={inputName}
                ></Input>
              </ListaItem>
              <ListaItem>
                <Label htmlFor="idade">
                  {" "}
                  Idade<span>*</span>
                </Label>
                <Input
                  type="number"
                  id="idade"
                  placeholder="Idadade do usuário"
                  ref={inputAge}
                ></Input>
              </ListaItem>
            </DivLinha1>
            <DivLinha2>
              <ListaItem>
                <Label htmlFor="email">
                  {" "}
                  Digite seu e-mail <span>*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="E-mail do usuário"
                  ref={inputEmail}
                ></Input>
              </ListaItem>
            </DivLinha2>
          </ListaInputs>
          <ButtonDefault type="button" onClick={cadastrarNovoUsuario} theme="primary">
            Cadastrar Usuário
          </ButtonDefault>
          <ButtonDefault type="button" onClick={() => navigate("/lista-de-usuarios")}>
            Lista de Usuários
          </ButtonDefault>
        </Form>
      </Main>
    </>
  );
}

export default Home;
