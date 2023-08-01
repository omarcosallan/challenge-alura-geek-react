import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { InputForms } from "../components/InputForms";
import { useFetch } from "../hooks/useFetch";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--preto-05);

  padding: 92px 160px;

  h3 {
    font-weight: 700;
    font-size: 18px;
    color: var(--preto-100);
  }

  p {
    margin-top: 20px;
    font-weight: 700;
    color: var(--preto-100);
  }
`;

const Form = styled.form`
  width: 423px;
`;

const InputSubmit = styled.input`
  width: 100%;
  background: var(--azul-100);
  padding: 12px 16px;
  margin-top: 24px;
  border: none;
  cursor: pointer;

  color: var(--preto-branco);
  font-size: 18px;
  font-weight: 600;
`;

export function Login({ logged, setLogged }) {
  const URL = "http://localhost:3000/users";
  const { data: users } = useFetch(URL);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  let [isValidLogin, setIsValidLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.filter(
      (user) => user.email === email && user.password === password
    );

    setLogged(user.length > 0);

    const userData = {
      logged: user && user.length > 0,
      admin: user && user[0].admin,
    };
    localStorage.setItem("login", JSON.stringify(userData));

    setIsValidLogin(user.length > 0);
  };

  return (
    <LoginContainer>
      {!logged ? (
        <div>
          <h3>Iniciar sessão</h3>
          <Form onSubmit={handleSubmit}>
            <InputForms
              type="email"
              placeholder="Escreva seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputForms
              type="password"
              placeholder="Escreva sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!isValidLogin && <p>E-mail ou senha incorretos.</p>}
            <InputSubmit type="submit" value="Entrar" />
          </Form>
        </div>
      ) : (
        navigate("/")
      )}
    </LoginContainer>
  );
}
