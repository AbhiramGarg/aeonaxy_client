import React, { useState, useEffect,useContext } from 'react';
import { AppContext } from '../App.js';
import { updatedprofile } from '../api/Update_api.js';
import { useNavigate } from 'react-router-dom';
const Complete_Profile = () => {
    const { userInfo, setUserInfo } = useContext(AppContext);
    const [selectedImage, setSelectedImage] = useState(null);
    const [location, setLocation] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {

        setIsButtonDisabled(!(selectedImage && location));
    }, [selectedImage, location]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log("1",file)
        setSelectedImage(file);
    };

    const handleChange = (e) => {
        setLocation(e.target.value);
    };

    const handleConfirm = async () => {

        navigate('/describe')
    };

    return (
        <div>
            <div className='dribble text-3xl text-pink-400 pt-[50px] pl-[50px]'>
                dribble
            </div>
            <div className=' w-[100vw] mt-[30px] flex flex-col  items-center md:mt-[100px]'>
                <div className='mx-[30px]' >
                    <div>
                        <h1 className='text-2xl mb-[10px] font-bold md:text-4xl '>Welcome! Let's create your profile</h1>
                        <p className='text-gray-500'>Let others get to know you better! You can do these later</p>
                    </div>
                    <div className='mt-[30px] text-center flex flex-col items-center md:mt-[50px] md:flex-row'>
                        <div>
                            <label className='text-2xl font-bold'>Add an avatar</label>
                            <div className='mt-[10px]'>
                                <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} id="imageInput" />
                                <label htmlFor="imageInput">
                                    <div className='h-[200px] w-[200px] flex overflow-hidden border-4 rounded-full border-dashed cursor-pointer'>
                                        {selectedImage ? (
                                            <img
                                                src={URL.createObjectURL(selectedImage)}
                                                alt="Selected"
                                                className=" object-fit object-center"
                                            />
                                        ) : (
                                            "Icon"
                                        )}
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className='mt-[30px] flex flex-col items-center justify-center md:ml-[50px] md:items-start'>
                            <button className='border-2 p-[10px] rounded-xl' onClick={() => document.getElementById('imageInput').click()}>Choose image</button>
                            <div className='mt-[10px] text-gray-500'>
                                Or choose one of our defaults
                            </div>
                        </div>
                    </div>
                    <div className='mt-[30px] flex flex-col'>
                        <label className='text-2xl font-bold'>Add your location</label>
                        <input
                            className='mt-[30px] text-xl p-[10px] border-b-2 outline-none'
                            placeholder='Enter a location'
                            value={location}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        className={`mt-[50px] w-[100%] p-[10px] text-xl rounded-xl md:w-[250px] mb-[20px] ${isButtonDisabled ? 'text-pink-300 italic bg-pink-200 cursor-not-allowed' : 'text-white bg-pink-400'}`}
                        onClick={handleConfirm}
                        disabled={isButtonDisabled}
                    >
                        Next
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Complete_Profile;
