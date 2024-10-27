import React from 'react';
import { BsChevronRight, BsGrid, BsEnvelope } from 'react-icons/bs';

const categories = [
    { name: "Projet Web Frontend", icon: <BsGrid />, value: "frontend" },
    { name: "Projet UI/UX", icon: <BsChevronRight />, value: "uiux" },
    { name: "Projet Print", icon: <BsEnvelope />, value: "print" },
];

const Sidebar = ({ onSelectCategory }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-2 rounded-t-3xl">
            <ul className="flex justify-around py-2">
                {categories.map((category, index) => (
                    <li key={index} className="flex flex-col items-center text-center mx-2">
                        <button
                            onClick={() => onSelectCategory(category.value)}
                            className="flex flex-col items-center focus:outline-none" // Flex pour centrer verticalement
                        >
                            <div className="text-2xl md:text-3xl mb-1">{category.icon}</div>
                            <span className="text-sm md:text-base">{category.name}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
