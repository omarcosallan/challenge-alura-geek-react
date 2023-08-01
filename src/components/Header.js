import { styled } from "styled-components";

import { InputSearch } from "./InputSearch";
import { ButtonLogin } from "./ButtonLogin";
import { Logo } from "./Logo";

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 32px 160px;

  > div {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;

export function Header({ logged }) {
  return (
    <TagHeader>
      <div>
        <Logo />
        <form>
          <InputSearch />
        </form>
      </div>
      <div>{!logged && <ButtonLogin />}</div>
    </TagHeader>
  );
}
