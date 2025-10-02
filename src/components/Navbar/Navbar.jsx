import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar  shadow-sm px-5 border-b-1 border-gray-400 bg-white">

            <div className="flex-none mr-2">
                <button className="md:hidden btn btn-square btn-ghost" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                </button>
                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                    popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }}>
                    <li><a>Home</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Changelog</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Download</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>

            <div className="flex-1">
                <a className="font-bold text-md lg:text-2xl">CS — Ticket System</a>
            </div>


            <div className="flex items-center gap-8">

                <div >
                    <ul className='hidden md:flex gap-8 hover:cursor-pointer '>
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <button style={{ background: " linear-gradient(125deg, #632EE3 5.68%, #9F62F2 88.38%)" }} className='hover:cursor-pointer  px-4 py-3 text-white font-semibold rounded-md'>+ New Ticket</button>
            </div>
        </div>
    );
};

export default Navbar;