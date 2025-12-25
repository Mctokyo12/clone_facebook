import React from 'react';
import RegisterForm from '../../components/Auth/RegisterForm';


const Register = () => {
    return (
        <div className='bg-light-secondary absolute top-0  dark:bg-dark-main left-0 w-full h-full'>
            <h1 className='font-bold text-blue-600 text-5xl  pt-6 text-center w-full'>facebook</h1>
            
            <RegisterForm/>
            
        </div>
    );
};

export default Register;