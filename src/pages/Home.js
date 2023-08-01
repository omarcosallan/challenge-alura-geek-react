import { ProductsCategory } from "../components/ProductsCategory";
import { Promotion } from "../components/Promotion";
import { useFetch } from "../hooks/useFetch";
import { styled } from "styled-components";

const ContainerProducts = styled.div`
  margin: 0 160px;
  padding: 64px 0;

  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export function Home() {
  const URL = "http://localhost:3000/products";

  const { data: products } = useFetch(URL);

  const categories = products
    ? new Set(products.map((product) => product.category))
    : new Set();
  const uniqueCategories = Array.from(categories);

  return (
    <>
      <Promotion />
      <ContainerProducts>
        {uniqueCategories &&
          uniqueCategories.map((category) => (
            <ProductsCategory
              key={category}
              category={category}
              products={products}
              limit={"6"}
            />
          ))}
      </ContainerProducts>
    </>
  );
}
