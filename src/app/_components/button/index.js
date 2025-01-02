import React from "react";
import Image from 'next/image';
const Index =({className,text,icon})=>{
    return(
        <button type="button" className={`text-[14px] ${icon && "flex items-center"} font-medium leading-[20px] py-[7px] px-[9px] rounded-full ${className}`}>
            {text} {icon && <Image src={icon} width={24} height={24} alt="no-icon" />}
      </button>
    )
}
export default Index;