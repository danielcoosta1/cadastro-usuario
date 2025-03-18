import {
  Main,
  DivImagem,
  Form,
  Tittle,
  DivInputs,
  Input,
  Label,
  Button
} from "./assets/styles.js";

function Home() {
  return (
    <>
      <Main>
        <DivImagem>
          <img />
        </DivImagem>

        <Form>
          <Tittle>Cadastro de Usuário</Tittle>
          <DivInputs>
            <div>
              <Label for="nome"> Nome do usuário</Label>
              <Input type="text" id="nome"></Input>
              <Label for="idade"> Idade</Label>
              <Input type="text" id="idade"></Input>
            </div>
            <Label for="email"> Digite seu e-mail</Label>
            <Input type="email" id="email"></Input>
          </DivInputs>
          <Button>Cadastrar</Button>
        </Form>
      </Main>
    </>
  );
}

export default Home;
