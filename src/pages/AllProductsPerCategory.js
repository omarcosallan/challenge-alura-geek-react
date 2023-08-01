import { styled } from "styled-components";
import { useFetch } from "../hooks/useFetch";
import { ProductsCategory } from "../components/ProductsCategory";
import { useParams } from "react-router-dom";

const ContainerProducts = styled.div`
  margin: 0 160px;
  padding: 64px 0;

  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export function AllProductsPerCategory() {
  const URL = "http://localhost:3000/products";

  const params = useParams();

  const { data: products } = useFetch(URL);

  const category = params.category;

  const productsDestaques = products
    ? products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      )
    : null;

  return (
    <>
      <ContainerProducts>
        <ProductsCategory
          category={productsDestaques ? productsDestaques[0].category : null}
          products={productsDestaques}
        />
      </ContainerProducts>
    </>
  );
}
