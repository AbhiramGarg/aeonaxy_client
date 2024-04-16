import react from 'react';

const Footer = () => {
    return(
        <div className='bg-gray-100 mt-[30px]'>
            <div className='justify-between p-[30px] hidden md:flex '>
                <div className='flex flex-col max-w-[300px]'>
                    <h1 className='text-xl text-pink-400'>Dribble</h1>
                    <p className=' text-gray-500'>Dribble is the world's leading community for the creatives to share,grow and get hired.</p>
                    <div className='flex'>
                        <i class='bx bxl-dribbble ' ></i>
                        <i class='bx bxl-twitter ml-[10px]' ></i>
                        <i class='bx bxl-instagram ml-[10px]' ></i>
                        <i class='bx bxl-facebook-square ml-[10px]' ></i>
                        <i class='bx bxl-pinterest ml-[10px]' ></i>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label>For designers</label>
                    <a className='text-gray-500 my-[5px]' href='#'>Go pro!</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Explore design work</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Design blog</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Overtime podcast</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Playoffs</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Weekly Warm-up</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Refer a Friend</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Code of conduct</a>
                </div>
                <div className='flex flex-col'>
                    <lable>Hire designers</lable>
                    <a className='text-gray-500 my-[5px]' href='#'>Post a job opening</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Post a freelance project</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Search for designers</a>
                    <lable>Brands</lable>
                    <a className='text-gray-500 my-[5px]' href='#'>Advertise with us</a>
                </div>
                <div className='flex flex-col'>
                    <lable>Company</lable>
                    <a className='text-gray-500 my-[5px]' href='#'>About</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Careers</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Support</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Media Kit</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Testimonials</a>
                    <a className='text-gray-500 my-[5px]' href='#'>API</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Terms of service</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Privacy policy</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Cookie policy</a>
                </div>
                <div className='flex flex-col'>
                    <lable>Directories</lable>
                    <a className='text-gray-500 my-[5px]' href='#'>Design jobs</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Designers for hire</a>
                    <a className='text-gray-500 my-[5px]' href='#'> Freelance designers for hire</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Tags</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Places</a>
                    <lable>Design assets</lable>
                    <a className='text-gray-500 my-[5px]' href='#'>Dribble Marketplace</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Creative Market</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Fontspring</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Font Squirrel</a>
                </div>
                <div className='flex flex-col'>
                    <lable>Design Resources</lable>
                    <a className='text-gray-500 my-[5px]' href='#'>Freelanceing</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Design Hiring</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Design Portfolio</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Design Education</a>
                    <a className='text-gray-500 my-[5px]' href='#'>Creative Process</a>
                    <a className='text-gray-500 my-[5px]' href='#'>design Industry Trends</a>
                </div>
            </div>
            <div className='border mx-[15px]'></div>
            <div className='flex justify-between items-center p-[15px]'>
                <p>2023 Dribble. All rights reserved.</p>
                <p className='text-gray-500'><span className='text-black font-bold'>20,501,853 </span>shots dribbled <span className='text-black font-bold'>Icon</span></p>
            </div>
        </div>
    )
}
export default Footer