import react from 'react';

const Navbar = () => {
    return(
        <div className='flex p-[15px] justify-between items-center w-[100vw] h-[100%] border-b-2'>
            <div className='flex items-center justify-between '>
                <h1 className='text-2xl'>Dribble</h1>
                    <a className='text-gray-500 hidden md:block ml-[15px]' href='#'>Inspiration</a>
                    <a className='text-gray-500 hidden md:block ml-[15px]' href='#'>Find Work</a>
                    <a className='text-gray-500 hidden md:block ml-[15px]' href='#'>Learn Design</a>
                    <a className='text-gray-500 hidden md:block ml-[15px]' href='#'>Go pro</a>
                    <a className='text-gray-500 hidden md:block ml-[15px]' href='#'>Hire Designer</a>
            </div>
            <div className='flex justify-between items-center '>
                <input placeholder='Search' className=' mr-[15px] hidden md:block outline-none bg-gray-200 p-[10px] rounded-md'/>
                <p className='mr-[15px]'>Icon</p>
                <p className='mr-[15px]'>Icon</p>
                <button className='bg-pink-400 rounded-md text-white p-[5px]'>Upload</button>
            </div>
        </div>
    )
}
export default Navbar;