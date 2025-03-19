import styled from "styled-components";


const Main = styled.main`
   height: 100vh;
   width: 100vw;
   display: flex;
   flex-direction: column;
    
  
`;

const DivImagem = styled.div`

margin: 0 auto;
max-width: 75rem;
height: 50%



`;

const Img = styled.img`
    max-width: 30rem;
`;

const Form = styled.form`
margin: 0 auto;
max-width: 75rem;
height: 50%;
   
`;

const Tittle = styled.h1`
`;

const ListaInputs = styled.ul`
`;

const DivLinha1 = styled.div`

display: flex;
gap: 2rem;
`;
const DivLinha2 = styled.div``;

const ListaItem = styled.li`
display: flex;
flex-direction: column
`;

const Label = styled.label`

`;

const Span = styled.span`
color: red;
`;

const Input = styled.input`

`;

const Button = styled.button`

`;


export {
    Main, DivImagem, Img, Form,
    Tittle, ListaInputs, DivLinha1,
    DivLinha2, Label, Input, ListaItem,
    Span, Button
}