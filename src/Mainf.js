import axios from "axios";
import { useEffect,useState } from 'react'
import "./Mainf.css"
const Mainf = () => {
const[item,setItem]=useState([])
useEffect(()=>{
  axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
  .then(res=>{
    console.log(res)
    setItem(res.data.meals)
  }).catch((err)=>{
    console.log(err)
  });
},[]);
const[backgroundColor,setbackgclr]=useState("white")
const[textColor,settextclr]=useState("#1b1b1b")
const[buttonStyle,setbtnStyle]=useState("white")
const hendlemode=()=>{
  setbackgclr(backgroundColor==="white"?"#1b1b1b":"white")
  settextclr(textColor==="#1b1b1b"?"white":"#1b1b1b")
  setbtnStyle(buttonStyle==="white"?"#1b1b1b":"white")
}

   const itemList=item.map(({strMeal,strMealThumb,idMeal})=>{
    return(
<section className='card' style={{backgroundColor,color:textColor}}>
  <img  alt="" src={strMealThumb}/>
  <section className='content' style={{backgroundColor,color:textColor}}>
    <p >{strMeal}</p>
    <p>#{idMeal}</p>
   
  </section>
  
</section>

    )
    
  })
  return(
  <>  <section style={{backgroundColor}}>
    <div className='container' >{itemList} </div>
    
  <button onClick={hendlemode} className="mbtn" style={{backgroundColor,color:textColor,border:`2px solid ${textColor}`}}>
   {backgroundColor==="white"?"Light-Mode":"Dark-Mode"}</button>
  </section>
  </>
    
  )
}

export default Mainf
