import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { formatPrice } from "../utils/format-price";
import { EditIcon } from "./icons/edit-icon";
import { DeleteIcon } from "./icons/delete-icon";

const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 155px;

  position: relative;

  color: var(--preto-100);
  line-height: normal;

  img {
    height: 155px;
    object-fit: cover;
  }

  p {
    font-size: 14px;
    font-weight: 500;
  }

  span {
    font-size: 16px;
    font-weight: 700;
  }

  a {
    color: var(--azul-100);
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
  }

  div {
    width: 100%;
    position: absolute;
    padding: 10px;

    display: flex;
    justify-content: flex-end;
    gap: 16px;

    button {
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }
`;

export function CardProduct({ product, isAdmin, httpConfig }) {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    console.log("editando ", id);
    navigate(`/edit-product/${id}`);
  };

  const handleDelete = async (id) => {
    await httpConfig(id, "DELETE");
  };

  return (
    <Card>
      {isAdmin && (
        <div>
          <button onClick={() => handleDelete(product.id)}>
            <DeleteIcon />
          </button>
          <button onClick={() => handleEdit(product.id)}>
            <EditIcon />
          </button>
        </div>
      )}
      <img src={product.image} alt={product.name}></img>
      <p>{product.name}</p>
      <span>{formatPrice(product.price)}</span>
      <Link to={`/products/${product.id}`}>Ver produto</Link>
    </Card>
  );
}
