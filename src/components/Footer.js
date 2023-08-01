import { styled } from "styled-components";
import { Logo } from "./Logo";
import { InputForms } from "./InputForms";

const TagFooter = styled.footer`
  display: flex;
  flex-direction: column;
`;

const TagInfo = styled.div`
  display: flex;
  padding: 32px 160px;
  align-items: start;
  text-align: start;
  gap: 112px;

  background: var(--azul-10);
`;

const About = styled.ul`
  list-style: none;
  text-align: start;
  padding: 0;

  li {
    color: var(--preto-100);
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
  }

  li + li {
    margin-top: 24px;
  }
`;

const Contact = styled.div`
  span {
    color: var(--preto-100);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  input + input {
    height: 82px;
  }
`;

const SubmitBtn = styled.button`
  padding: 16px;
  background: var(--azul-100);
  border: none;
  margin-top: 8px;
  color: var(--preto-branco, #fff);
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;

const Developer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;

  color: var(--preto-100);

  padding: 32px;
`;

export function Footer() {
  return (
    <TagFooter>
      <TagInfo>
        <Logo />
        <About>
          <li>Quem somos nós</li>
          <li>Política de privacidade</li>
          <li>Programa fidelidade</li>
          <li>Nossas lojas</li>
          <li>Quero ser franqueado</li>
          <li>Anuncie aqui</li>
        </About>
        <Contact>
          <span>Fale conosco</span>
          <InputForms type="text" placeholder="Nome"></InputForms>
          <InputForms
            type="text"
            placeholder="Escreva sua mensagem"
          ></InputForms>
          <SubmitBtn>Enviar mensagem</SubmitBtn>
        </Contact>
      </TagInfo>
      <Developer>
        <span>Desenvolvido por Marcos Allan</span>
        <span>2023</span>
      </Developer>
    </TagFooter>
  );
}
