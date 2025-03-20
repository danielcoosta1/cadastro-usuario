import { useRef } from "react";
import api from "../../services/api.js";

import {
  Main,
  DivImagem,
  Img,
  Form,
  Tittle,
  ListaInputs,
  DivLinha1,
  DivLinha2,
  Input,
  ListaItem,
  Label,
  Button,
} from "./styles.js";

import UsersImage from "../../assets/users.png";

function Home() {

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function cadastrarNovoUsuario(){

   await api.post('/users', {
    name: inputEmail,
    age: inputAge,
    email: inputEmail
    })
  
  }

  return (
    <>
      <Main>
        <DivImagem>
          <Img src={UsersImage} alt="Imagem de fundo - usuários" />
        </DivImagem>
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
          <Button type="button" onClick={cadastrarNovoUsuario}>Cadastrar Usuário</Button>
        </Form>
      </Main>
    </>
  );
}

export default Home
