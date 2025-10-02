import React from 'react';
import Resolved from '../Resolved/Resolved';

const Resolvedtask = ({  resolved }) => {
   
    return (
        <div>
            <h1 className='text-bold text-2xl text-center lg:text-left'>Resolved Task</h1>

            {
                resolved.length === 0 && (
                    <div className='text-gray-400 mt-2 text-center'>Select a ticket to add to Task Status</div>
                )
            }

            <div className='flex flex-col gap-3'>

                {
                    resolved.map(issue => <Resolved key={issue.id} issue={issue}></Resolved>)

                }

            </div>

        </div>
    );
};

export default Resolvedtask;