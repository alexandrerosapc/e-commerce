import ItemC from "./ItemC";
import styled from "styled-components";

export default function Carrinho({ produtos, removerProdutoDoCarrinho }) {
  return (
    <ContainerCarrinho>
      {produtos.map((produto, index) => (
        <ItemC 
        key={index} 
        produto={produto}
        removerProdutoDoCarrinho={removerProdutoDoCarrinho}
        index={index}
        />
      ))}
    </ContainerCarrinho>
  );
}

const ContainerCarrinho = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 100vh;
  position: absolute;
  right: 0;
`;
