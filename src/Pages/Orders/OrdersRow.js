import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const OrdersRow = ({ data, handleDelete, handleStatus }) => {
  const { _id, serviceName, price, phone, service, customer, status } = data;

  const [orders, setOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/service/${service}`)
      .then((res) => res.json())
      .then((data) => setOrder(data))
      .catch((err) => console.error(err));
  }, [service]);
  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)}>
          <FaTrash />
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-20 rounded">
              <img src={orders?.img} alt="order-img" />
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
          </div>
        </div>
      </td>
      <td>
        {customer}
        <br />
        <span className="badge badge-ghost badge-sm">{phone}</span>
      </td>
      <td>{price}</td>
      <td>
        <button onClick={() => handleStatus(_id)} className="btn btn-ghost">
          {status ? status : "Pending"}
        </button>
      </td>
    </tr>
  );
};

export default OrdersRow;
