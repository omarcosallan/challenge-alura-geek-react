import { styled } from "styled-components";

import SearchSvg from "../assets/search.svg";

const Input = styled.div`
  background: var(--preto-05);
  width: 390px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 0 16px;

  border-radius: 20px;
  border: 0 none;

  input:focus {
    border: 0 none;
    outline: 0;
  }
`;

const InputField = styled.input`
  width: 350px;

  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: var(--preto-50);

  background: transparent;
  border: none;
`;

const SearchBtn = styled.button`
  background: transparent;
  border: none;
  display: flex;
`;

export function InputSearch() {
  return (
    <Input>
      <InputField placeholder="O que deseja encontrar?"></InputField>
      <SearchBtn>
        <img src={SearchSvg} alt="Botão de busca no site" />
      </SearchBtn>
    </Input>
  );
}
