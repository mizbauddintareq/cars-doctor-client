import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const { title, price, _id } = useLoaderData();

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Order place successfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <form onSubmit={handlePlaceOrder}>
        <div className="text-center">
          <h2 className="text-4xl">You are about to order {title}</h2>
          <p className="text-2xl">Price: {price}</p>
        </div>
        <div className="grid grig-cols-1 md:grid-cols-2 gap-6 my-14">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="last Name"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            name="phone"
            placeholder="Your phone"
            className="input input-bordered w-full "
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            defaultValue={user?.email}
            className="input input-bordered w-full "
          />
        </div>
        <textarea
          name="message"
          className="textarea w-full h-32 textarea-bordered"
          placeholder="Your message"
        ></textarea>
        <input className="btn my-10" type="submit" value="place order" />
      </form>
    </div>
  );
};

export default Checkout;
