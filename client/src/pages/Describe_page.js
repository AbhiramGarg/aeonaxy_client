import React, { useState,useContext } from 'react';
import { sendEmail } from '../api/Sendemail.js';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App.js';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const Describe_page = () => {
    const { userInfo, setUserInfo } = useContext(AppContext);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();
    const handleCheckboxChange = (option) => {
        let updatedOptions = [...selectedOptions];
        if (updatedOptions.includes(option)) {
            updatedOptions = updatedOptions.filter((item) => item !== option);
        } else {
            updatedOptions.push(option);
        }
        setSelectedOptions(updatedOptions);
        setIsChecked(updatedOptions.length > 0);
    };

    const handleFinishButtonClick = async() => {
        await sendEmail(userInfo.userEmail);
        navigate('/home')   
    }

    return (
        <div>
            <div className='dribble text-xl text-pink-400 pt-[25px] md:text-3xl md:mt-[50px] md:ml-[50px] pl-[25px]'>
                dribble
                <button>back</button>
            </div>
            <div className='h-[80vh] w-[100vw] mt-[25px] flex flex-col items-center md:mt-[100px]'>
                <div className='flex flex-col items-center'>
                    <div className='text-center'>
                        <h1 className='text-2xl mb-[10px] font-bold md:text-4xl'>What brings you to Dribble?</h1>
                        <p className='text-gray-500'>Select the option that best describes you. Don't worry, you can explore other options later</p>
                    </div>
                    <div className='mt-[30px] text-center flex flex-col justify-between md:flex-row md:mt-[50px]'>
                        <div className={`m-[10px] flex-col justify-between min-w-[250px] md:min-w-[350px] p-[10px] border-2 rounded-3xl flex items-center ${selectedOptions.includes(1) ? 'border-pink-400' : ''}`}>
                            <img className='h-[250px] w-[250px] md:h-[300px] md:w-[300px]' src={image1} />
                            <p className='text-xl font-bold mb-[10px]'>I'm a designer looking to share my work</p>
                            <input className='m-[10px]' type='checkbox' onChange={() => handleCheckboxChange(1)} />
                        </div>
                        <div className={`m-[10px] flex-col justify-between min-w-[250px] md:min-w-[350px] p-[10px] border-2 rounded-3xl flex items-center ${selectedOptions.includes(2) ? 'border-pink-400' : ''}`}>
                            <img className='h-[250px] w-[250px] md:h-[300px] md:w-[300px]' src={image2} />
                            <p className='text-xl font-bold mb-[10px]'>I'm a designer looking to share my work</p>
                            <input className='m-[10px]' type='checkbox' onChange={() => handleCheckboxChange(2)} />
                        </div>
                        <div className={`m-[10px] flex-col justify-between min-w-[250px] md:min-w-[350px] p-[10px] border-2 rounded-3xl flex items-center ${selectedOptions.includes(3) ? 'border-pink-400' : ''}`}>
                            <img className='h-[250px] w-[250px] md:h-[300px] md:w-[300px]' src={image3} />
                            <p className='text-xl font-bold mb-[10px]'>I'm a designer looking to share my work</p>
                            <input className='m-[10px]' type='checkbox' onChange={() => handleCheckboxChange(3)} />
                        </div>
                    </div>
                    <button
                        className={`m-[10px] w-[250px] p-[10px] text-xl bg-pink-400 rounded-xl text-white md:mt-[100px] ${isChecked ? '' : 'opacity-50 cursor-not-allowed'}`}
                        onClick={handleFinishButtonClick}
                        disabled={!isChecked}
                    >
                        Finish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Describe_page;
