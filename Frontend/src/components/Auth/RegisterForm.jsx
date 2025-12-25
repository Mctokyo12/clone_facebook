import React from 'react';
import RegisterInput from '../Inputs/RegisterInput';
import { useState } from 'react';
import DateOfBirthSelect from '../Inputs/DateOfBirthSelect';
import GenderSelect from '../Inputs/GenderSelect';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from 'axios'
import { ClipLoader, MoonLoader } from 'react-spinners';
import { useNavigate } from "react-router";



const RegisterForm = () => {
    const BACKEND_URL =  import.meta.env.VITE_URL_BACKEND;
    const [daterror , setdateerror] = useState("");
    const navigate = useNavigate();
    const [error, seterror] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: ""
    });
    // const [genderror , setgenderror] = useState("");

    const userData = {
        firstname:"",
        lastname:"",
        bday: new Date().getDate(),
        bmonth: new Date().getMonth() + 1,
        byear: new Date().getFullYear(),
        gender:"",
        email:"",
        password:""
    };

    const [user , setuser] = useState(userData);
    const [loading , setloading] = useState(false);
    
    const {
        bday , 
        bmonth , 
        byear , 
    } = user;

    const registerValidation = yup.object({
        firstname: yup.string()
            .required("What's your First name ?")
            .min(2 , "Fisrt name must be between 2 and 16 characters.")
            .max(16 ,"Fisrt name must be between 2 and 16 characters.")
            .matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed."),
        lastname: yup.string()
            .required("What's your Last name ?")
            .min(2 , "Last name must be between 2 and 16 characters.")
            .max(16 ,"Last name must be between 2 and 16 characters.")
            .matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed."),
        email: yup.string()
            .required("You'll need this when you log in and if you ever need to reset your password")
            .email("Enter a valid email address."),
        password: yup.string()
            .required("Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &)")
            .min(6, "Password must be atleast 6 characters.")
            .max(36, "Password can't be more than 36 characters"),
        gender: yup.string()
            .required("Please choose a gender. You can change who can see this later"),
        bDay: yup.number().required().default(()=>new Date().getDate()),
        bMonth: yup.number().default(()=>new Date().getMonth()+1),
        bYear:yup.number().default(()=>new Date().getFullYear()),
        

    });

    

    const {register ,handleSubmit , getValues , setValue ,formState:{errors}} = useForm({
        resolver: yupResolver(registerValidation),
    });
    
    
    setValue("bDay" ,bday)
    setValue("bMonth" ,bmonth)
    setValue("bYear" , byear)

    const Months = Array.from(new Array(12) , (val , index)=>1+index); // renvoir un tableau contenant les mois [1,2,3,....12]
    const Years = Array.from(new Array(108) , (val , index)=> getValues("bYear")-index) // renvoir un tableau contenant les annees [2025,2025,2023,....1940]
    const Days = Array.from(new Array(getDay()) , (val , index)=> 1+index)
   
    
    function getDay() { // cette function renvoir le dernier jour du mois passe , Par exemple, si bYear = 2025 et bMonth = 2, alors new Date(2025, 2, 0) retourne le 31 janvier 2025.
        return new Date(byear , bmonth , 0).getDate(); // getDate() renvoir le jour du moi donc le nombre total des jours du mois
    }

    const handleRegisterChange = (e)=>{
        const {name , value} = e.target
        setuser({...user , [name]:value});
    }

    const onSubmit = async (data) => {
        let current_day = new Date();
        let picked_date = new Date(byear , bmonth-1 , bday);
        let atlast14 = new Date(1970 + 14 , 0 ,1);
        let noMorethan = new Date(1970+ 70 , 0 ,1);
        if(current_day - picked_date < atlast14 ){
            setdateerror("it looks like you(ve enetered the wrong info.Please make sure that you use your real date of birth")
        }else if (current_day - picked_date > noMorethan ){
            setdateerror("it looks like you(ve enetered the wrong info.Please make sure that you use your real date of birth")
        }else{
            try {
                setloading(true)
                const response = await axios.post(`${BACKEND_URL}/api/register` , {
                   firstname: data.firstname, 
                   lastname: data.lastname,
                   gender: data.gender,
                   bday: data.bDay,
                   bmonth: data.bMonth,
                   byear: data.bYear,
                   email: data.email,
                   password: data.password,
                }) 
                
                const datas = response.data;
                
                setloading(false);
                
                if(error.email == "" && error.password == "" && error.firstname == "" && error.lastname == ""){
                    navigate("/");
                }
         
            } catch (error) {
                for (const [key , value] of Object.entries(error.response.data)) {
                    seterror({...error , [key]: value[0]});
                }
                console.log(error);
                 
                setloading(false);
            }
            
            setdateerror("")
            
        }

        
    }
    console.log(error);

    return (
        <>
            <div className="absolute text-gray-500 mt-16 sm:mt-8   mb-4 dark:text-dark-text py-4 px-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg  mx-4 md:mx-0   w-[28rem] rounded-lg bg-white dark:bg-dark-second">
        
                <h4 className="text-center text-2xl font-bold pb-4 text-black dark:text-white">Creer un compte</h4>
                
                <form action="" method="post"  className="flex flex-col gap-4 px-3 py-2 w-full" onSubmit={handleSubmit(onSubmit)}>

                    {/* name and family name  */}
                    <div className="flex items-center  gap-2  w-full ">
                        <RegisterInput type={"text"} placeholder={"Entre votre nom"} name={"firstname"}  register={register} errors={errors.firstname} error={error.firstname} />
                        <RegisterInput type={"text"} placeholder={"Entre votre prenom"} name={"lastname"}  register={register} errors={errors.lastname} error={error.lastname} /> 
                    </div>
                    {/* end name and family name */}
                    
                    {/* < Date Bird  */}
                        <DateOfBirthSelect 
                            bday={bday} 
                            bmonth={bmonth} 
                            byear={byear} 
                            months={Months} 
                            years={Years} 
                            days={Days} 
                            daterror={daterror}
                            handleRegisterChange={handleRegisterChange}

                        />
                    {/*  end Date Bird */}
                    

                    {/* gender */}
                        <GenderSelect genderror={errors.gender} register={register}  handleRegisterChange={handleRegisterChange} />
                    {/* end gender  */}

                    <RegisterInput type={"text"} placeholder={"Votre Adress mail"} name={"email"}  register={register} errors={errors.email} error={error.email}/> 

                    <RegisterInput type={"password"} placeholder={"Votre mot de passe"} name={"password"}  register={register} errors={errors.password} error={error.password}/> 
                    {loading ? 

                        <div className="flex items-center justify-center mx-auto   text-white w-2/4 bg-green-600 rounded-lg">
                            <ClipLoader color='white' className='font-semibold' size={30} /> 
                            <span className="border-transparent cursor-pointer  text-xl font-semibold  px-3 py-2.5">S'incrire</span>
                        </div>
                        : 
                        <div className="flex place-items-startcenter justify-center">
                            <input type="submit" value="S'inscrire"  name="Signup" className="border-transparent cursor-pointer  w-2/4  text-white  bg-green-600  text-xl font-semibold rounded-lg px-3 py-2.5"/>
                        </div>
                    }
                    
                </form>

                <h4 className="text-center cursor-pointer w-full text-blue-500 text-lg font-semibold">Vous avez deja un compte ? </h4>

            </div>
        </>
    );
};

export default RegisterForm;