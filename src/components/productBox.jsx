import { Link } from "react-router-dom";

const ProductBox = (props) => {
  return (
    <>
      <Link to={"/products/" + props.productId}>
        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            src={props.img}
            alt={props.name}
            className="w-full mb-4 rounded-md"
          />
          <h3 className="text-xl font-semibold mb-2">{props.name}</h3>
          <p className="text-gray-600 mb-4">{props.description}</p>
          <span className="font-bold text-indigo-600">{"£" + props.price}</span>
        </div>
      </Link>
    </>
  );
};

export default ProductBox;
