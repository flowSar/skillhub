import React, { useState } from "react";
import { services } from "../data/services.js";

const Contact = () => {
  const [service, setSelectedService] = useState("");

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  return (
    <div>
      <select
        id="services"
        className="md:w-[10rem] h-[2.5rem] p-2 text-center"
        onChange={handleServiceChange}
      >
        <option value="">Select Service</option>
        {Object.keys(services).map((service, index) => (
          <option key={index} value={service}>
            {service}
          </option>
        ))}
      </select>

      <select className="md:w-[10rem] h-[2.5rem] p-2 text-center">
        <option value="">Select Sub-Service</option>
        {service &&
          services[service].map((subService, index) => (
            <option key={index} value={subService}>
              {subService}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Contact;
