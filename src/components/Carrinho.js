import { useState } from "react";
import ItemC from "./ItemC"
import styled from "styled-components";

export default function Carrinho(props){
    const { produtos } = props
    const [adicionado, setAdicionado] = useState ("")

    return(
        <ContainerCarrinho>
            {produtos.map((prod) =>
                <ItemC
                    key={prod.id}
                    produto={prod}
                />)
            }
        </ContainerCarrinho>
    )
}

const ContainerCarrinho = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 100vh;
  position: absolute;
  right: 0;
`;
