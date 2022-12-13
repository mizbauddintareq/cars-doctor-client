import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ data }) => {
  const { img, price, title, _id } = data;
  return (
    <div className="card card-compact shadow-xl">
      <figure>
        <img src={img} alt="Service-card-img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">{title}</h2>
        <p className="text-2xl font-semibold text-red-500">Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
            <button className=" text-red-500">
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
