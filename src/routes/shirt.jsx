import { useParams } from "react-router-dom";

const Shirt = () => {
  const { shirtId } = useParams();

  console.log(shirtId);

  return <div>{shirtId}</div>;
};

export default Shirt;
