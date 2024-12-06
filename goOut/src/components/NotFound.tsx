import React from "react";

const NotFound = () => {
    return (
       <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <img 
            className="w-48 h-48 mb-4 rounded-full border-4 border-white"
            src="/sigh.gif"
            />
            <h1 className="text-xl font-bold">Page not found</h1>
       </div> 
    )
};

export default NotFound;