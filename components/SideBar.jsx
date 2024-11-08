import React, { useState } from 'react';

const Sidebar = ({ config, onSelectCategory }) => {
    const [activeCategory, setActiveCategory] = useState(config[0].value); // Default active category based on the first item in config

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        onSelectCategory(category);
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white py-4 rounded-t-3xl shadow-xl z-50">
            <ul className="flex justify-around">
                {config.map(({ value, label }) => (
                    <li key={value} className="text-center mx-2">
                        <button
                            onClick={() => handleCategoryClick(value)}
                            className={`flex flex-col items-center focus:outline-none rounded-lg p-2 transition duration-200 
                                ${activeCategory === value ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                        >
                            <span className="text-base">{label}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
