import { styled } from "styled-components";
import { useFetch } from "../hooks/useFetch";
import { ProductsCategory } from "../components/ProductsCategory";
import { useNavigate } from "react-router-dom";

const ContainerProducts = styled.div`
  margin: 0 160px;
  padding: 64px 0;

  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const CategoryMore = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;
`;

const Title = styled.h2`
  color: var(--preto-100);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  text-align: start;
`;

const AddProduct = styled.button`
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: var(--azul-100);

  border: none;
  cursor: pointer;

  color: var(--preto-branco);
  font-size: 16px;
  font-weight: 400;
`;

export function AllProducts({ isAdmin }) {
  const URL = "http://localhost:3000/products";

  const { data: products, httpConfig } = useFetch(URL);

  const navigate = useNavigate();

  return (
    <>
      <ContainerProducts>
        <div key="all-products">
          <CategoryMore>
            <Title>Todos os produtos</Title>
            {isAdmin && (
              <AddProduct onClick={() => navigate("/new-product")}>
                Adicionar produto
              </AddProduct>
            )}
          </CategoryMore>
          <ProductsCategory
            category="all-products"
            products={products}
            isAdmin={isAdmin}
            httpConfig={httpConfig}
          />
        </div>
      </ContainerProducts>
    </>
  );
}
