import Inprogress from "../Inprogress/Inprogress";

const Fixedissue = ({ added }) => {
console.log(added)
    return (

        <div className='flex flex-col gap-4 '>
            <div className='border shadow-lg p-3 rounded-xl'>
                <h1 className='font-semibold text-2xl'>Task Status</h1>

                {
                    added.length === 0 && (
                        <p className='text-lg text-gray-400'> Select a ticket to add to Task Status </p>
                    )}

                {
                    added.length > 0 && (
                    <div>
                        {
                            added.map(issue=><Inprogress issue={issue}></Inprogress>)
                        }
                    </div>
                )
                }

            </div>

            <div className='border shadow-lg p-3 rounded-xl'>
                <h1 className='font-semibold text-2xl'>Resolved Task</h1>
                <p className='text-lg text-gray-400'>No resolved tasks yet.</p>
            </div>
        </div>
    );
};

export default Fixedissue;