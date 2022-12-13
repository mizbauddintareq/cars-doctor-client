import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <div className="my-6 text-center">
        <p className="text-2xl text-red-500 font-bold">Service</p>
        <h2 className="text-4xl font-semibold py-4">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
        {service?.map((data) => (
          <ServiceCard data={data} key={data._id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
