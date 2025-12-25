import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import React from 'react';

const Error = ({error , setError}) => {
    setTimeout(()=>{
        setError("")
    } , 5000)
    return (
        <div className='w-[20%] px-2 py-2 rounded-lg flex items-center justify-center gap-5 bg-red-400  text-white  font-semibold fixed bottom-10 left-2'>
            <ExclamationCircleIcon className='size-8' />
            <span>{error}</span>
        </div>
    );
};

export default Error;