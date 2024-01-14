import React from 'react';

export default function Loader() { 
    return (
        <div className="flex items-center justify-center h-3/6 p-5 w-screen">
            <div className="flex space-x-2 animate-pulse">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            </div>
        </div>
    );
}
