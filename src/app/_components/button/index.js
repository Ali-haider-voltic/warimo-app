import React from "react";
import Image from 'next/image';
const Index =({className,text,icon,startIcon,onClick, iconWidth, type,disabled})=>{
    return(
        <button  disabled={disabled} type={type} onClick={onClick}  className={`text-[14px] ${startIcon && "flex items-center gap-2"} ${icon && "flex items-center"} font-medium leading-[20px] py-[8px] px-[12px] rounded-full ${className}`}>
        {startIcon && <Image src={startIcon} width={iconWidth ? iconWidth :14} height={iconWidth ? iconWidth :14} alt="no-icon" />}    {text} {icon && <Image src={icon} width={24} height={24} alt="no-icon" />}
      </button>
    )
}
export default Index;