import React, { use } from 'react';
import Issue from '../Issue/Issue'
import Taskstatus from '../Taskstatus/Taskstatus';
import Resolvedtask from '../Resolvedtask/Resolvedtask';

const Issues = ({ dataPromise, added, setAdded, completed, resolved }) => {
    let data = use(dataPromise);

    const removeCard = (rmv) => {
        let filtered = data.filter(issue => issue.id !== rmv.id);
        data = [...filtered];
    }

    return (

        <div className="flex flex-col lg:flex-row gap-5 w-11/12 mx-auto ">

            <div className='grid grid-col-1 lg:grid-cols-2 gap-3'>
                {
                    data.map(issue => <Issue key={issue.id} removeCard={removeCard} issue={issue} added={added} setAdded={setAdded}></Issue>)
                }
            </div>

            <div className='flex flex-col gap-4 lg:mx-auto'>
                <Taskstatus completed={completed} added={added} ></Taskstatus>
                <Resolvedtask resolved={resolved}></Resolvedtask>
            </div>
        </div>

    );
};

export default Issues;