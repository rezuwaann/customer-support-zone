import { ToastContainer, toast } from 'react-toastify';

const Task = ({ issue, completed }) => {
    return (
        <div className='bg-white  w-11/12 md:w-3/5 mx-auto lg:min-w-[350px] min-h-[110px] shadow-lg p-4 rounded-md mt-2'>
            <h1 className='mb-3 font-semibold text-lg'>{issue.title}</h1>
            <button onClick={() => {
                
                toast('Completed');
                <ToastContainer />

                completed(issue)
                

            }} className='hover:cursor-pointer text-white font-semibold w-full bg-green-600 rounded-md  flex justify-center items-center py-2'>Complete</button>
        </div>
    );
};

export default Task;