import { Container, Content } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return (
    <Container>
      <Content>
        <Input></Input>
        <Button type="teste" />
      </Content>
    </Container>
  );
}

export default App;
