import { styled } from "styled-components";

import { useNavigate } from "react-router-dom";

const Button = styled.button`
  width: 182px;
  padding: 16px;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--azul-100);
  cursor: pointer;

  background: transparent;
  color: var(--azul-100);
  font-size: 16px;
  font-weight: 400;
`;

export function ButtonLogin() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return <Button onClick={handleLogin}>Login</Button>;
}
