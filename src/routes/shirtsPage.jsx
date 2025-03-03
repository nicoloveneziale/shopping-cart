import { Outlet, useParams } from "react-router-dom";

const ShirtsPage = () => {
  const { shirtId } = useParams();

  return <div>{shirtId ? <Outlet /> : <p>Shirt Home Page</p>}</div>;
};

export default ShirtsPage;
