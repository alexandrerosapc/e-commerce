import styled from "styled-components";
import Produto from "./Produto"
export default function Produtos({produtos, adicionarProdutoAoCarrinho}) {
    return (

        <ContainerLista>
            {produtos.map((prod) =>
                <Produto
                    key={prod.id}
                    produto={prod}
                    adicionarProdutoAoCarrinho={adicionarProdutoAoCarrinho}
                />)
            }
        </ContainerLista>

    )
}
const ContainerLista = styled.div`
  display: flex;
  flex-wrap: wrap;
`;