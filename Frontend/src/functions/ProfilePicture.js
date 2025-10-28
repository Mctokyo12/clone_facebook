
export const ProfilePicture = (data)=>{
    let profile = "/images/profile.png";
    if(data.profile_picture){
        profile = `${import.meta.env.VITE_URL_BACKEND}/storage/${data.profile_picture}`
    }else{
        if (data.gender == "female") {
            profile = "/images/user_female.jpg"
        }
    }
    return profile;
}

export const CoverPiture = (data)=>{
    let profile = ""
    if(data.cover_picture){
        profile = `${import.meta.env.VITE_URL_BACKEND}/storage/${data.cover_picture}`
    }

    return profile;
}