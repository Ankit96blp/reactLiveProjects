import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Button} from './Components/button';
// import 'bootstrap/dist/css/bootstrap.min.css';

//const buttonToggle=(Button)`
//opacity:0.7
//${({active})=>active && `opacity:1`}
//`

// const types=['Buton1','Button2','Button3'];
// function EnableDisable(){
//   const [active,setActive]=useState(types[0]);
//   return (<div>
//     {types.map(type=>{ return(
//       <Button>
//         {type}
//       </Button>)
//     })}
//   </div>)
// }
function AppButton(){
  function MouseOver(event) {
    event.target.style.background = 'red';
  }
  function MouseOut(event){
    event.target.style.background="";
  }
  return(
    <>
<div className="cashfreebtn">
  <Button id="btnSmall" type="button" buttonSize="btn--small">Small</Button>&nbsp;&nbsp;&nbsp;
  <Button id="btndefault" type="button" buttonSize="btn--default">Default</Button>&nbsp;&nbsp;&nbsp;
  <Button id="btnLarge" type="button" buttonSize="btn--large">Large</Button>
  <br />
  <Button id="btnLarge" type="button" buttonSize="btn--large" enDis="true">Disabled Button</Button>&nbsp;&nbsp;&nbsp;
  <Button id="loadingDis"

  MouseOver={(event)=>
  { 
  event.target.style.background = 'red';
  event.target.innerText='Enabled';
}
} 
MouseOut={(event)=>{ event.target.style.background = '';
event.target.innerText='MouseOver';
}} 
type="button" buttonSize="btn--disable" >MouseOver</Button>
</div>
<br />
<div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
</div>
</>
  );
}

ReactDOM.render(
    <AppButton />
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
