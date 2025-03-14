import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductBox = (props) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Link to={"/products/" + props.productId} onClick={handleClick}>
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

ProductBox.propTypes = {
  productId: PropTypes.int,
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.float,
};

export default ProductBox;
