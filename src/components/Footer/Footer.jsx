import React from 'react';
import x from '../../assets/x.png'
import f from '../../assets/f.png'
import facebook from '../../assets/in.png'
import mail from '../../assets/mail.png'

const Footer = () => {
    return (

        <div className='mt-10 text-white bg-black'>
            <div className=' flex flex-col lg:flex-row gap-10 justify-around pt-20 pb-10 mx-auto border-b-1 border-gray-400'>

                <div className='max-w-[350px] pl-8'>
                    <h1 className='font-bold text-2xl'>CS — Ticket System</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className='pl-8'>
                    <h1 className='font-medium text-lg'>Company</h1>
                    <ul className='space-y-2 mt-2'>
                        <li>About Us</li>
                        <li>Our Mission</li>
                        <li>Contact Saled</li>
                    </ul>
                </div>

                <div className='pl-8'>
                    <h1 className='font-medium text-lg'>Services</h1>
                    <ul className='space-y-2 mt-2'>
                        <li>Products & Services</li>
                        <li>Customer Stories</li>
                        <li>Download Apps</li>
                    </ul>
                </div>

                <div className='pl-8'>
                    <h1 className='font-medium text-lg'>Information</h1>
                    <ul className='space-y-2 mt-2'>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Join Us</li>
                    </ul>
                </div>

                <div className='pl-8'>
                    <h1 className='font-medium text-lg'>Social Links</h1>
                    <ul className='space-y-3 mt-2'>
                        <li className='flex gap-2'> <img src={x} alt="" />@CS — Ticket System</li>
                        <li className='flex gap-2'> <img src={facebook} alt="" />@CS — Ticket System</li>
                        <li className='flex gap-2'> <img src={f} alt="" />@CS — Ticket System</li>
                        <li className='flex gap-2'> <img src={mail} alt="" />support@cst.com</li>
                    </ul>
                </div>
            </div>

            <div className='py-3 text-center'>
                © 2025 CS — Ticket System. All rights reserved.
            </div>
            </div>
    );
};

export default Footer;