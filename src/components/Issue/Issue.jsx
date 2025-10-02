import { useState } from 'react'
import calIcon from '../../assets/calendar-regular-full.svg'
import { toast, ToastContainer } from 'react-toastify';

const Issue = ({ issue, added, setAdded }) => {

    const [clicked, setClicked] = useState(false);

    return (
        <div onClick={() => {

            setAdded([...added, issue])
            setClicked(true);
            toast('In progress')
        }
        }
        className={`max-w-[500px]  lg:max-h-[190px] mx-auto p-2 lg:p-4 rounded-lg shadow-xl bg-white ${clicked ? "hidden" : ""}`}>
        <ToastContainer />
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-xl'>{issue.title}</h1>
                <div className={`shadow-lg py-2 px-3 rounded-full flex items-center gap-2 ${issue.status === "Open" ? "bg-[#B9F8CF]" : "bg-[#F8F3B9]"} `}>
                    <div className={` h-5 w-5 rounded-full  ${issue.status === "Open" ? "bg-[#02A53B]" : "bg-[#FEBB0C]"}`}></div>
                    <p className={`${issue.status === "Open" ? "text-[#0B5E06]" : "text-[#9C7700]"}`}>{issue.status}</p>
                </div>
            </div>
             

            <div className='mt-2 mb-4 text-gray-500'><p>{issue.description}</p></div>

            <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    <p>#{issue.id}</p>
                    <p className=
                        {`font-semibold 
                        ${issue.priority === "High Priority" ? "text-red-500"
                                : issue.priority === "Medium Priority" ? "text-yellow-500"
                                    : issue.priority === "Low Priority" ? "text-green-500" : ""}`}                        >
                        {issue.priority}</p>
                </div>
                <div className='flex gap-2'>
                    <p>{issue.customer}</p>
                    <img className='h-6 w-6' src={calIcon} alt="" />
                    <p>{issue.createdAt}</p>
                </div>
            </div>
        </div>

    );
};

export default Issue;