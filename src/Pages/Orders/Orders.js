import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider";
import OrdersRow from "./OrdersRow";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((err) => console.error(err));
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/order/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = orders.filter((order) => order._id !== id);
              setOrders(remaining);
              Swal.fire("Deleted!", "Order has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleStatus = (id) => {
    fetch(`http://localhost:5000/order/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((order) => order._id !== id);
          const approved = orders.find((order) => order._id === id);
          approved.status = "Approved";

          const newOrders = [approved, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>DELETE</th>
            <th>Service Name</th>
            <th>Customer</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrdersRow
              key={order._id}
              data={order}
              handleDelete={handleDelete}
              handleStatus={handleStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
