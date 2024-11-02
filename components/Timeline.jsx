import React from 'react';

const Timeline = ({ experiences }) => {
    return (
        <div className="relative border-l border-gray-300">
            {experiences.map((item, index) => (
                <div key={index} className="mb-4 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-1.5" /> {/* Custom bullet */}
                    <h4 className="font-semibold">{item.position}</h4>
                    <p className="text-sm text-gray-500">{item.duration}</p>
                    <p className="text-gray-700">{item.details}</p>
                    {/* Optional: Add a dashed line only between items */}
                    {index < experiences.length - 1 && (
                        <div className="border-l border-gray-300 mt-2" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default Timeline;
