import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";
import { Button,
  Container,
  Form,
  FormControl,
  ListGroup,
  ListGroupItem,
  Stack,
 } from "react-bootstrap";

function Saudacao(props) {
  return <h1>{props.name}</h1>;

}
export default function Home() {
  const[lista, setLista] =  useState ([])
  const [tarefa, setTarefa]  = useState ("")

  function adicionarLista (){
  if (lista.includes(tarefa)){
    alert("Tarefa repetida")
  } else if(tarefa !=""){
      const listAuxiliar = lista;
      listAuxiliar.push(tarefa);
      setLista(listAuxiliar);
      setTarefa("");
    } else {
      alert("Tarefa vazia")

    }

  }
  return (
   <Container>
    <h1>Tarefa</h1>
    <Stack gap={3}>
    <FormControl 
    value={tarefa}
    onChange={(e)=>setTarefa(e.target.value)}
    placeholder="Insira sua tarefa">
      </FormControl>
      <Button onClick={adicionarLista}>Adicionar</Button>
      <ListGroup>
        {lista.map((tarefa)=>(
      <ListGroupItem key={tarefa} action>{tarefa}</ListGroupItem>
      ))}
      </ListGroup>
    </Stack>
   </Container>

  );
}