import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import OrdersRow from "./OrdersRow";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((err) => console.error(err));
  }, [user?.email]);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>DELETE</th>
            <th>Service Name</th>
            <th>Customer</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrdersRow key={order._id} data={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
