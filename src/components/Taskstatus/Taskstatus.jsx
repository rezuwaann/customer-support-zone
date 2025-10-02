import React from 'react';
import Task from '../Task/Task';

const Taskstatus = ({ added,completed }) => {
    return (
        <div>
            <h1 className='text-bold text-2xl text-center lg:text-left'>Task Status</h1>

            {
                added.length === 0 && (
                    <div className='text-gray-400 mt-2 text-center'>Select a ticket to add to Task Status</div>
                )
            }

            <div className='flex flex-col gap-3'>

                {
                    added.map(issue => <Task key={issue.id}  completed={completed} issue={issue}></Task>)

                }
                
                </div>
        </div>
    );
};

export default Taskstatus;