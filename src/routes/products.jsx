import { useParams } from "react-router-dom";

const Products = () => {
  const { productsId } = useParams();

  console.log(productsId);

  return <div>{productsId}</div>;
};

export default Products;
