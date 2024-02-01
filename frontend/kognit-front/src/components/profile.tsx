import Image from "next/image";

export interface ProfleProps{
    name: string;
    imagePath: string;
    email: string;
}

export default function Profile({name, imagePath, email}: ProfleProps){
    return (
        <div className="profile">
            <Image 
            className="profile-image"
            src={imagePath} 
            alt="foto-perfil" 
            width={140} 
            height={140} 
            style={{borderRadius: "100px"}}/>
            <div className="profile-name">
                {name}
            </div>
            <div className="profile-email">
                {email}
            </div>
        </div>
    )
}