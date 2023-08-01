import { styled } from "styled-components";

import SearchSvg from "../assets/banner_image.png";
import { useNavigate } from "react-router-dom";

const PromotionContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 41.15%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url(${SearchSvg}) lightgray 50% / cover no-repeat;

  padding: 32px 160px;
  height: 352px;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-end;
`;

const Title = styled.h2`
  color: var(--preto-branco);

  font-size: 52px;
  font-weight: 700;
  line-height: normal;
`;

const Description = styled.p`
  color: var(--preto-branco);
  font-size: 22px;
  font-weight: 700;
  line-height: normal;

  margin: 16px 0;
`;

const Button = styled.button`
  padding: 16px;
  background: var(--azul-100);
  border: none;
  cursor: pointer;

  color: var(--preto-branco);
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;

export function Promotion() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/category/consoles");
  };

  return (
    <PromotionContainer>
      <Title>Julho Promocional</Title>
      <Description>Produtos selecionados com 33% de desconto</Description>
      <Button onClick={handleNavigate}>Ver Consoles</Button>
    </PromotionContainer>
  );
}
