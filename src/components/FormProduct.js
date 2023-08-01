import { InputForms } from "./InputForms";

export function FormProduct({
  handleSubmit,
  image,
  setImage,
  category,
  setCategory,
  name,
  setName,
  price,
  setPrice,
  error,
}) {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <InputForms
        placeholder="URL da imagem"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></InputForms>
      <InputForms
        placeholder="Categoria"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      ></InputForms>
      <InputForms
        placeholder="Nome do produto"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></InputForms>
      <InputForms
        placeholder="Preço do produto"
        type="number"
        value={price}
        onChange={(e) => setPrice(parseInt(e.target.value))}
      ></InputForms>
      {error && <span>{error}</span>}
      <InputForms type="submit"></InputForms>
    </form>
  );
}
