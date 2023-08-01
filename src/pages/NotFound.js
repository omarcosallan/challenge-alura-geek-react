import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  margin: 0 160px;
  padding: 64px 0;

  text-align: center;

  p {
    margin: 10px 0 30px 0;
  }

  a {
    color: var(--azul-100);
    font-size: 16px;
    font-weight: 700;
  }
`;

const Title = styled.h2`
  color: var(--preto-100);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;

  margin-top: 30px;
`;

export function NotFound() {
  return (
    <>
      <Container>
        <img
          src="https://www.alura.com.br/assets/img/erro/erro.1686744881.svg"
          alt="Ilustração de erro, submarino afudando"
        ></img>
        <Title>Acho que nos perdemos...</Title>
        <p>Não conseguimos encontrar a página que você estava procurando.</p>
        <Link to="/">Voltar para o início</Link>
      </Container>
    </>
  );
}
