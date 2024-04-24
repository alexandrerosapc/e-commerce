import styled from "styled-components";
import Produto from "./Produto"
export default function Produtos(props) {
    const { produtos } = props

    return (

        <ContainerLista>
            {produtos.map((prod) =>
                <Produto
                    key={prod.id}
                    produto={prod}
                />)
            }
        </ContainerLista>

    )
}
const ContainerLista = styled.div`
  display: flex;
  flex-wrap: wrap;
`;