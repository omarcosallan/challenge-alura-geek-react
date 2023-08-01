import { styled } from "styled-components";

const Input = styled.input`
  width: 100%;
  color: ${(props) =>
    props.type === "submit" ? "var(--preto-branco)" : "var(--preto-50)"};
  background: ${(props) =>
    props.type === "submit" ? "var(--azul-100)" : "var(--preto-branco)"};
  border: none;
  border-radius: 4px;
  margin: 12px 0;
  padding: 20px 12px;

  cursor: ${(props) => (props.type === "submit" ? "pointer" : "initial")};

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  input:placeholder {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`;

export function InputForms({ placeholder, type, onChange, value }) {
  return (
    <label>
      <Input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        required
      ></Input>
    </label>
  );
}
