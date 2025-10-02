import React from 'react';

const Resolved = ({issue}) => {
    // console.log(issue)
    return (
        <div className='bg-[#E0E7FF] w-11/12 md:w-3/5 p-4 mt-2  lg:w-full mx-auto'>
            <h1 className='font-bold'>{issue.title}</h1>
        </div>
    );
};

export default Resolved;