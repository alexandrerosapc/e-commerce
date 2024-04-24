import Carrinho from "./components/Carrinho";
import Produtos from "./components/Produtos";
import PRODUTOS from "./mock"
import styled from "styled-components";


function App() {
  return (
    <Container>
      <Produtos
        produtos={PRODUTOS}
      />
      <Carrinho
        produtos={PRODUTOS}
      />
    </Container>
  );
}

export default App;


const Container = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-right: 400px;
`;