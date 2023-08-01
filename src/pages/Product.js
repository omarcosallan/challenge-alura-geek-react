import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { styled } from "styled-components";
import { ProductsCategory } from "../components/ProductsCategory";
import { formatPrice } from "../utils/format-price";
import { NotFound } from "./NotFound";

const Container = styled.div`
  margin: 0 160px;
  padding: 64px 0;

  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50%;
    max-height: 400px;
    margin-right: 16px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 50%;

    h2 {
      color: var(--preto-100);
      font-size: 52px;
      font-weight: 500;
    }

    span {
      color: var(--preto-100);
      font-size: 16px;
      font-weight: 700;
    }

    p {
      color: var(--preto-100);
      font-size: 16px;
      font-weight: 400;
      text-align: justify;
    }
  }
`;

const Title = styled.h2`
  color: var(--preto-100);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  text-align: start;

  margin-bottom: 16px;
`;

export function Product() {
  const params = useParams();

  const URL = "http://localhost:3000/products";

  const { data: products } = useFetch(URL);

  const product = products
    ? // eslint-disable-next-line eqeqeq
      products.find((product) => product.id == params.id)
    : null;

  return (
    <>
      {product && (
        <Container>
          <ProductContainer>
            <img src={product.image} alt={product.name} />
            <div>
              <h2>{product.name}</h2>
              <span>{formatPrice(product.price)}</span>
              <p>
                Voluptas voluptatum quibusdam similique, class debitis alias
                maecenas eveniet ridiculus, facilis fusce! Ullam conubia?
                Sociis, minima malesuada habitasse distinctio sequi aliqua
                malesuada. Quisque deleniti proin expedita, aliquid litora. Iste
                recusandae? Commodo, quia ridiculus doloribus vero dictum?
                Penatibus donec placeat faucibus, dolorum do. Animi porta anim
                magnam
              </p>
            </div>
          </ProductContainer>
          <div>
            <Title>Produtos similares</Title>
            {products && (
              <ProductsCategory
                category={product.category}
                products={products}
              />
            )}
          </div>
        </Container>
      )}
      {!product && <NotFound />}
    </>
  );
}
