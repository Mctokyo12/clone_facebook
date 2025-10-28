import React from 'react';

const BackgroundImage = ({setCurrentBackground , setMarginTop}) => {

    const background = [
        '/postBackgrounds/1.jpg',
        '/postBackgrounds/2.jpg',
        '/postBackgrounds/3.jpg',
        '/postBackgrounds/4.jpg',
        '/postBackgrounds/5.jpg',
        '/postBackgrounds/6.jpg',
        '/postBackgrounds/7.jpg',
        '/postBackgrounds/8.jpg',
        '/postBackgrounds/9.jpg',
        '/postBackgrounds/10.jpg',
    ]
    return (
        <>
            <div className='flex items-center gap-1'>
                <div className='rounded-xl h-10 w-10 bg-light-secondary ' onClick={()=>(setCurrentBackground("") , setMarginTop(0))}></div>
                {background.map((img , index)=>(
                    <img src={img} key={index} alt="" srcset=""  className='rounded-xl size-10 object-cover' onClick={()=>{setCurrentBackground(img); setMarginTop(32)}}/>
                ))}
            </div>

        </>
    );
};

export default BackgroundImage;