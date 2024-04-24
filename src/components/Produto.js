import styled from "styled-components";

export default function Produto({produto, adicionarProdutoAoCarrinho}){
    return(
        <ItemProduto>
            <img src={produto.imagem} />
            <div className="informacoes">
                <span>{produto.nome}</span>
                <span>{produto.preco}</span>
            </div>
            <button
              onClick={() => adicionarProdutoAoCarrinho(produto)}
            >Comprar</button>
        </ItemProduto>
    )
}


const ItemProduto = styled.div`
  border: 1px solid black;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;

  img {
    width: 200px;
    height: 200px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
  }
`;