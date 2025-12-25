import { CheckUrl } from "./Fetch";


export const ProfilePicture = (data)=>{
    let profile = "/images/profile.png";
    if(data.profile_picture){
        profile = CheckUrl(data.profile_picture)
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
        profile = CheckUrl(data.cover_picture)
    }

    return profile;
}