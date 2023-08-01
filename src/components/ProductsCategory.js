import { styled } from "styled-components";
import { CardProduct } from "./CardProduct";
import { ArrowIcon } from "./icons/arrow-icon";
import { useNavigate } from "react-router-dom";

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

  margin-bottom: 16px;
`;

const MoreBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  color: var(--azul-100);
  font-size: 16px;
  font-weight: 700;
  line-height: normal;

  background: transparent;
  border: none;
  cursor: pointer;
`;

const Products = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 16px;

  list-style: none;
`;

export function ProductsCategory({
  category,
  products,
  limit,
  isAdmin,
  httpConfig,
}) {
  const navigate = useNavigate();
  const handleMoreProducts = () => {
    navigate("/products");
  };

  return (
    <div>
      {category !== "all-products" && (
        <CategoryMore>
          <Title>{category}</Title>
          <MoreBtn onClick={handleMoreProducts}>
            Ver tudo
            <ArrowIcon />
          </MoreBtn>
        </CategoryMore>
      )}
      <Products key={category}>
        {products &&
          category !== "all-products" &&
          products
            .filter(
              (product) =>
                product.category.toLowerCase() === category.toLowerCase()
            )
            .slice(0, limit)
            .map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}

        {products &&
          category === "all-products" &&
          products.map((product) => (
            <CardProduct
              key={product.id}
              product={product}
              isAdmin={isAdmin}
              httpConfig={httpConfig}
            />
          ))}
      </Products>
    </div>
  );
}
