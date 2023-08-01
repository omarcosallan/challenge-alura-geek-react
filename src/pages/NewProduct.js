import { styled } from "styled-components";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { FormProduct } from "../components/FormProduct";
import { NotFound } from "./NotFound";

const ContainerProducts = styled.div`
  width: 550px;
  margin: 0 auto;
  padding: 64px 0;

  display: flex;
  flex-direction: column;

  form {
    input {
      width: 100%;
    }
  }
`;

const Title = styled.h2`
  color: var(--preto-100);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;

  margin-bottom: 16px;
`;

export function NewProduct({ isAdmin }) {
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [error, setError] = useState("");

  const URL = "http://localhost:3000/products";
  const { httpConfig } = useFetch(URL);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, price, category, image };

    if (name && price && category && image) {
      try {
        await httpConfig(data, "POST");

        setImage("");
        setCategory("");
        setName("");
        setPrice("");

        setError(false);

        navigate("/products");
      } catch (error) {
        setError("Erro ao adicionar o produto.");
      }
    } else {
      setError("Preencha todos os campos corretamente");
    }
  };

  return (
    <>
      {isAdmin ? (
        <ContainerProducts>
          <Title>Adicionar novo produto</Title>
          <FormProduct
            handleSubmit={handleSubmit}
            image={image}
            setImage={setImage}
            category={category}
            setCategory={setCategory}
            name={name}
            setName={setName}
            price={price}
            setPrice={setPrice}
            error={error}
          />
        </ContainerProducts>
      ) : (
        <NotFound />
      )}
    </>
  );
}
