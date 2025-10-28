import React from 'react';
import LoginForm from '../../components/Auth/LoginForm';


const Login = () => {
    return (
        <div className='absolute top-0 left-0 w-full h-full bg-light-secondary'>
            <div className='flex max-md:flex-col gap-4  justify-between items-center mt-6 m-auto w-[66%] md:mt-12' >
                <div className='flex flex-col  gap-8 justify-center md:text-justify'>
                    <h1 className='font-bold text-blue-600 text-6xl'>facebook</h1>
                    <span className='text-xl md:text-[1.7rem]'>
                        Facebook helps you connect and share <br/>with the people in your life.
                    </span>
                </div>
                <LoginForm/>
            </div>
        </div>
    );
};

export default Login;