import React from 'react';

const Card = ({ image, title, intro, btnText }) => {
  return (
    <div className="backdrop-blur-lg bg-white/30 border border-white/20 rounded-lg overflow-hidden shadow-md">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{intro}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Card;
