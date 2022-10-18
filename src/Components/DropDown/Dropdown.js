import React ,{useState}from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './dropdown.css'
import OptionVal from './OptionVal';
import data from '../../data.json'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Dropdown = () => {
  const [inputVal,setInputVal]=useState("");
  const [checked,setChecked]=useState(false);
  const[arrowUp,setArrowUp]=useState(true);
  let flag=0;

  function fun(source,def,id){
    console.log(`www ${def}`);
    let element=source.getElementById(id);
    if(def==true)
    setChecked(!checked);
    else{
      console.log(element);
      
      element.checked=true ;
    }
  }


    return (
      <div className='main-dropdown'>
        <h3 className='headding'>Select employee dropdown</h3>
        <div className='main-drop-container'>
          {arrowUp?<KeyboardArrowDownIcon sx={{position:'absolute',top:'10px',left:'336px',cursor:'pointer'}} onClick={()=>setArrowUp(!arrowUp)}/>:<KeyboardArrowUpIcon sx={{position:'absolute',top:'10px',left:'336px',cursor:'pointer'}} onClick={()=>setArrowUp(!arrowUp)}/>
          }
        
          
        <input className='input-dropdown cursor' value=""  placeholder='Search Practitioners' onClick={()=>setArrowUp(!arrowUp)}  ></input>
      </div>

{!arrowUp?<div className='dropdown-container'>
      <div className='search-box'>
        <SearchIcon  sx={{ position:'absolute',top:'18px',left:'3px' }} />
        <input className='search' placeholder='Search Employees' onChange={(e)=>{setInputVal(e.target.value);}}></input>
      </div>
       <div className='box-content'>
       { !inputVal &&flag==0?

      <div>  
        <div className='box-content cursor'><OptionVal name={"All employee"} flag={true} def={true} fun={fun} check={checked}/></div>
        <div className='box-content cursor'><OptionVal name={data[0].name} profileImg={data[0].ProfileImg} fun={fun} check={checked}  /></div>
        
      
      <OptionVal name={"All partisinors"} flag={false} fun={fun} /></div>:"" 
      }
       {
        data.filter((val)=>{
         if(inputVal==="")
           return val;
        else if(val.name.toLowerCase().includes(inputVal.toLowerCase()))
           return val
        })
        .map((val,index)=>{
          flag++;
          const id=Math.random();
          return <OptionVal name={val.name} profileImg={val.ProfileImg} fun={fun} check={checked} id={id} />
        })

     
       }
       { flag===0? <h3>Not found</h3>:""}

       </div>
    </div>:""}
    
    </div>
  )
}

export default Dropdown