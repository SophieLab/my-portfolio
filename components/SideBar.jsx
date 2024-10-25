import React from 'react';
import { BsChevronRight, BsGrid, BsEnvelope } from 'react-icons/bs';

const categories = [
    { name: "Projet Web Frontend", icon: <BsGrid /> },
    { name: "Projet UI/UX", icon: <BsChevronRight /> },
    { name: "Projet Print", icon: <BsEnvelope /> },
];

const Sidebar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-2 rounded-t-3xl">
            <ul className="flex justify-around py-2">
                {categories.map((category, index) => (
                    <li key={index} className="flex flex-col items-center text-center mx-2"> {/* Réduit l'espacement */}
                        <div className="text-2xl md:text-3xl">{category.icon}</div>
                        <span className="text-sm md:text-base">{category.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
