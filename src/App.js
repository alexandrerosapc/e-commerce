import Carrinho from "./components/Carrinho";
import Produtos from "./components/Produtos";
import PRODUTOS from "./produtos";
import styled from "styled-components";
import { useState } from "react";

function App() {
  const [produtosAdicionados, setProdutosAdicionados] = useState([]);

  function adicionarProdutoAoCarrinho(produto) {
    setProdutosAdicionados([...produtosAdicionados, produto]);
  }

  function removerProdutoDoCarrinho(index) {
    const novosProdutos = [...produtosAdicionados];
    novosProdutos.splice(index, 1);
    setProdutosAdicionados(novosProdutos);
  }

  return (
    <Container>
      <Produtos
        produtos={PRODUTOS}
        adicionarProdutoAoCarrinho={adicionarProdutoAoCarrinho}
      />
      <Carrinho 
      produtos={produtosAdicionados} 
      removerProdutoDoCarrinho={removerProdutoDoCarrinho} 
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
