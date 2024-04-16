import react from 'react';

const Hero = () => {
    return(
        <div className='flex pt-[100px] items-center flex-col w-[100vw]'>
        <div className='flex  items-center flex-col md:max-w-[50vw] text-center'>
            <h1 className='mt-[15px] text-xl md:text-4xl'>Please verify your email...</h1>
            <i style={{fontSize:'150px'}} className='bx bx-envelope' ></i>
            <p className='mt-[15px] text-gray-500'>Please verify your email address.We have sent you a confirmation mail</p>
            <p className='mt-[15px] font-bold'>accout@refero.design</p>
            <p className='mt-[15px] text-gray-500'>Click the confirmation link in that mail to begin using Dribble.</p>
            <span className='mt-[15px] text-gray-500'>Didn't recieve the email? Check your spam folder,it may have been caught by filter.If you still don't see it,you can <a className='text-pink-400' href='#'>resend the confirmation mail.</a></span>
            <span className='mt-[15px] text-gray-500'>Wrong email address?<a className='text-pink-400' href='#'>Change it</a></span>
            </div>
        </div>
    )
}
export default Hero