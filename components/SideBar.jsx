import React, { useState } from 'react';
import { BsGlobe, BsServer, BsBrush } from 'react-icons/bs';

const Sidebar = ({ onSelectCategory }) => {
    const [activeCategory, setActiveCategory] = useState('frontend'); // 'frontend' actif par défaut

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        onSelectCategory(category);
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white py-4 rounded-t-3xl shadow-xl">
            <ul className="flex justify-around">
                <li className="text-center mx-2">
                    <button
                        onClick={() => handleCategoryClick('frontend')}
                        className={`flex flex-col items-center focus:outline-none rounded-lg p-2 transition duration-200 
                        ${activeCategory === 'frontend' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                    >
                        <div className="text-3xl mb-1"><BsGlobe /></div>
                        <span className="text-base">Projet Web Frontend</span>
                    </button>
                </li>

                <li className="text-center mx-2">
                    <button
                        onClick={() => handleCategoryClick('backend')}
                        className={`flex flex-col items-center focus:outline-none rounded-lg p-2 transition duration-200 
                        ${activeCategory === 'backend' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                    >
                        <div className="text-3xl mb-1"><BsServer /></div>
                        <span className="text-base">Backend</span>
                    </button>
                </li>

                <li className="text-center mx-2">
                    <button
                        onClick={() => handleCategoryClick('uiux')}
                        className={`flex flex-col items-center focus:outline-none rounded-lg p-2 transition duration-200 
                        ${activeCategory === 'uiux' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                    >
                        <div className="text-3xl mb-1"><BsBrush /></div>
                        <span className="text-base">Création graphique</span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
