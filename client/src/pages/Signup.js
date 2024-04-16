import React, { useState, useContext } from 'react';
import bgImage from '../assets/bg.png';
import { signup_req } from '../api/Signup_api'
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const { userInfo, setUserinfo } = useContext(AppContext);
    const [userData, setUserData] = useState({
        Name: '',
        Username: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate()
    const [isChecked, setIsChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e) => {
        if(userData.Name!=='' && userData.email!==''&& userData.password!=='' && userData.Username!==''){
            setIsChecked(e.target.checked);
        }
        
    };

    const handleCreateAccount = async (e) => {
        e.preventDefault();
        console.log(userData);
        const result = await signup_req(userData);
        setUserinfo((prevInfo) => ({
            ...prevInfo,
            userID: result.data.id,
            userEmail: result.data.email
        }))
        navigate('/complete')
    };

    return (
        <div className='flex  items-center min-h-screen justify-center'>
            <div
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#f2d184'
                }}
                className='md:block hidden h-[100vh] w-2/4'>
                <div className='flex justify-center mt-16 '>
                    <p className='text-[#856115] text-3xl font-bold '>Discover the world's top <br />Designers & Creatives.</p>
                </div>
            </div>
            <div className=' w-3/4 bg-white flex justify-center  md:items-center '>
                <div className='max-w-[500px] flex md:items-center justify-center '>
                    <form>
                        <div className='flex flex-col mt-[25px] justify-between md:flex-row '>
                            <div className='flex mx-2 flex-col'>
                                <label className='font-bold text-xl'>Name</label>
                                <input
                                    className='w-[100%] bg-[#f3f3f3] rounded-md p-2'
                                    name="Name"
                                    value={userData.Name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='flex mx-2 flex-col'>
                                <label className='font-bold text-xl'>Username</label>
                                <input
                                    className='w-[100%] bg-[#f3f3f3] rounded-md p-2'
                                    name="Username"
                                    value={userData.Username}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className='flex m-2 mt-[25px] flex-col' >
                            <label className='font-bold text-xl'>Email</label>
                            <input
                                className='w-[100%] bg-[#f3f3f3] rounded-md p-2 md:w-[500px]'
                                name="email"
                                value={userData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='flex  m-2 mt-[25px] flex-col'>
                            <label className='font-bold text-xl'>Password</label>
                            <div className='relative'>
                                <input
                                    className='w-[100%] bg-[#f3f3f3] rounded-md p-2 md:w-[500px]'
                                    name="password"
                                    type={showPassword ? 'text' : 'password'} 
                                    value={userData.password}
                                    onChange={handleInputChange}
                                    placeholder='6+ characters'
                                />
                                <button
                                    type="button" n
                                    className='absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none'
                                    onClick={() => setShowPassword(!showPassword)}> 
                                    {showPassword ? <i className='bx bx-lock-alt'></i> : <i className='bx bx-lock-open-alt'></i>}
                                </button>
                            </div>
                        </div>
                        <div className='flex  mt-[25px] p-[10px] items-center '>
                            <input
                                className='mt-[5px] size-16 mr-[5px]'
                                type='checkbox'
                                onChange={handleCheckboxChange}
                            />
                            <p>Creating an account means you're okay with out <a className='text-[#584ba5]' href='#'>Terms of Service</a>,<a className='text-[#584ba5]' href='#'>Privacy Policy</a>, and out default <a className='text-[#584ba5]' href='#'>Notification Settings</a></p>
                        </div>
                        <div>
                            <button
                                className={`bg-[#ea4b8b] w-[100%] mt-[25px] text-white rounded-xl p-3 md:w-[150px] ${isChecked ? '' : 'opacity-50 cursor-not-allowed'}`}
                                onClick={(e) => handleCreateAccount(e)}
                                disabled={!isChecked}
                            >
                                Create Account
                            </button>

                            <p className='mt-[30px]'>This site is protected by reCAPTCHA and the Google <a className='text-[#584ba5]' href='#'>Privacy Policy</a> and <a className='text-[#584ba5]' href='#'>Terms of Service</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
