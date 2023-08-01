import { styled } from "styled-components";

import LogoSvg from "../assets/sports_logo.svg";

const TagLogo = styled.a`
  display: flex;
  align-items: center;

  color: var(--azul-100);
  font-weight: 700;
  font-size: 24px;

  text-decoration: none;
  span {
    span {
      color: var(--preto-100);
    }
  }
`;

export function Logo() {
  return (
    <TagLogo href="/">
      <img src={LogoSvg} alt="Logo AluraGeek" />
      <span>
        Alura
        <span>Geek</span>
      </span>
    </TagLogo>
  );
}
