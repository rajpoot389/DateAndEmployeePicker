import React,{useState} from 'react'
import './dropdown.css'
import data from '../../data.json';

const OptionVal = ({name,profileImg,flag,def,fun,check,id}) => {
// console.log(check);

  return (
    <>
    <div className='box-content-2'>
      <div className='option-content'>
        <div className='profile-con'>
          <div className='profile'>
            {flag?<div className='all-emp'>{data.length}</div>:
            <img src={profileImg} className='profile' />
            }  
          </div>
          <div className='name-field'>
          <option value="volvo">{name}</option>
          </div>
        </div>
         <input type="checkbox" className='cursor' checked={check} onChange={()=>{fun(document,def,id)}} id={id}></input>
       </div>
     </div> 
    </>
  )
}

export default OptionVal;