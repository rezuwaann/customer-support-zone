
import bannerBg from '../../assets/vector1.png'

const Banner = ({added,resolved}) => {
   
    return (

        <div className='flex flex-col lg:flex-row justify-center mx-auto  my-20 '>


            <div style={{ background: " linear-gradient(125deg, #632EE3 5.68%, #9F62F2 88.38%)" }} className='flex  mx-auto lg:mx-5  h-50 w-90 md:w-120 lg:w-150 rounded-lg  mb-10'>

                <div><img src={bannerBg} alt="" /></div>
                <div className='flex flex-col text-center text-white w-1/3 my-auto '>
                    <h1 className='text-lg'>In Progress</h1>
                    <p className='font-semibold text-6xl'>{added.length}</p></div>
                <div className='rotate-y-180'><img src={bannerBg} alt="" /></div>
            </div>


            <div style={{ background: " linear-gradient(90deg, #54CF68 9.6%, #00827A 92.23%)" }} className='flex  mx-auto lg:mx-5  h-50 w-90 md:w-120 lg:w-150 rounded-lg '>

                <div><img src={bannerBg} alt="" /></div>
                <div className='flex flex-col text-center text-white w-1/3 my-auto'>
                    <h1 className='text-lg'>Resolved</h1>
                    <p className='font-semibold text-6xl'>{resolved.length}</p></div>
                <div className='rotate-y-180'><img src={bannerBg} alt="" /></div>
            </div>


            
        </div>
    );
};

export default Banner;