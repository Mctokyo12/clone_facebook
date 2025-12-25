import React, { useState } from 'react';
import LoginInput from '../Inputs/LoginInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import axios from 'axios';
import{ DotLoader } from 'react-spinners';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import { Link, useNavigate} from 'react-router';



axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;


const LoginForm = () => {
    
    const BACKEND_URL =  import.meta.env.VITE_URL_BACKEND;
    const [error , seterror] = useState(""); 
    const naviagte = useNavigate();
    
    const RegisterValidation = yup.object({
        email: yup.string()
            .required("You'll need this when you log in and if you ever need to reset your password")
            .email("Enter a valid email address."),
        password: yup.string()
            .required("Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &)")
            .min(6, "Password must be atleast 6 characters.")
            .max(36, "Password can't be more than 36 characters"),
    });

    const {register , handleSubmit  , formState:{errors}}  = useForm({
        resolver: yupResolver(RegisterValidation)
    });

    const [loading , setloading] = useState(false);

    const onSubmit =  async({email , password})=> {
        
        setloading(true);
        try {
            
            const response = await axios.post(`${BACKEND_URL}/api/login`  , {
                email: email , 
                password: password
            });

            
            const {data}  = response.data;
            
            localStorage.setItem("user" , JSON.stringify(data));
            localStorage.setItem("token" , `${response.data.token}`);

            console.log(response);
            
            
            setloading(false);
            if(!error){
                naviagte("/");
                // <Navigate to="/" />
            }
           
        } catch (error) {
            const {errors} = error.response.data;
            seterror(errors);
            setloading(false);
            console.log(error);
            
        }
    }

 
    

    return (
        <>

            <div className=" text-gray-500 dark:text-dark-text py-6   shadow-lg w-[26rem] rounded-lg bg-white dark:bg-dark-second text-center">
        
                <h4 className="text-center text-xl font-normal pb-4 text-black dark:text-white">Se connecte a Facebook</h4>
                <form action="" method="post" className="flex flex-col  px-4 py-2" onSubmit={handleSubmit(onSubmit)}>

                    <LoginInput type={"text"} placeholder={"Votre Adress mail"} name={"email"} error={errors.email} register={register}/> 
                   
                    <LoginInput type={"text"} placeholder={"Votre mot de passe"} name={"password"} error={errors.password} register={register}/> 

                     
                    <input type="submit" value="Se connecter" name="submit" className="border-transparent  cursor-pointer text-white  bg-blue-500  text-xl font-semibold rounded-lg px-2 py-2.5"/>
                    
                    

                </form>

                

                <a href="reset_password.php"><span className="text-blue-600 pt-4 cursor-pointer text-sm  hover:underline">Mot de passe oublier</span></a>
                
                <DotLoader color='#155dfc' loading={loading} size={36} className='absolute left-1/2 -translate-1/2 top-5'/>

                {error && <div className='text-white italic py-2 px-4 my-2 flex items-center  justify-center gap-4  bg-[#b94a48] w-[70%] mx-auto rounded-lg'>
                    <ExclamationTriangleIcon className='size-6'/>
                    {error}
                </div>}
                
        
                <div className="flex items-center gap-2 mt-1">
                    <span className="w-1/2 h-[1px] bg-gray-300 dark:bg-dark-third "></span>
                    <span>ou</span>
                    <span className="w-1/2 h-[1px] bg-gray-300 dark:bg-dark-third "></span>
                </div>
            
                <Link to={"/register"} ><button  className="border-transparent cursor-pointer mt-1 text-white  bg-green-600  text-lg font-semibold rounded-lg  w-9/12 px-3 py-2.5">Create Account</button></Link>
            </div>
        </>
    );
};

export default LoginForm;