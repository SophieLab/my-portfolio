import React from "react";

const Card = ({ title, subtitle, children, className }) => {
  return (
    <div className={`border rounded-lg shadow-md p-4 bg-white bg-opacity-90 hover:bg-opacity-100 transition duration-200 ${className}`}>
      <h5 className="font-bold text-lg">{title}</h5>
      {subtitle && <h6 className="text-gray-600">{subtitle}</h6>}
      <div className="mt-2">{children}</div>
    </div>
  );
};


export default Card;
