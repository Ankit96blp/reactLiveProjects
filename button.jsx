import React from 'react'
import './button.css';

const SIZE=['btn--large','btn--default','btn--small'];
const ICONS=['btn--icon',''];
export const Button =({
children,
type,
id,
enDis,
icon,
buttonSize,
MouseOver,
MouseOut
})=>{
    if(enDis){
    var checkButtonSize='btn--disable';
    }else{
    var checkButtonSize= SIZE.includes(buttonSize)?buttonSize:SIZE[1];
    }
return(
    <button id={id} className={`btn ${checkButtonSize}`} type={type} disabled={enDis} onMouseOver={MouseOver} onMouseOut={MouseOut}>
         {icon && <icon type={icon}/>}
{children}
    </button>
)
};