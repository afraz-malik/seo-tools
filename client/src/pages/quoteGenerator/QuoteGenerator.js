import Styles from "./QuoteGenerator.module.css"
import  React,{useRef,useEffect, useState} from 'react'
import {exportComponentAsPNG } from 'react-component-export-image';
import axios from 'axios'
const Quote = React.forwardRef((props,ref) => (

  <div ref={ref} className={Styles.container}>
    <div className={Styles.QuoteContainer}>
      <h2>Your Quote</h2>
      <p>
     {props.content}
      </p>

      <h6>
     {props.auth}
      </h6>


      
   </div>
   </div>
));


function QuoteGenerator() {
  const [con, setCon] = useState();
  const [auth, setAuth] = useState();

  useEffect(()=>{
fetchQuote()
  },[])

  const fetchQuote =  async() => {
    try{

    const {data} =await axios.get("https://api.quotable.io/random")
   
    setAuth(data.author);
    setCon(data.content);
    }catch(err){
      console.log(err)
    }
  }

  const componentRef = useRef();
  return (
    
<>
    <Quote content={con} auth={auth} ref={componentRef}/>
    
    <div className={Styles.ButtonContainer}>
      <button className={Styles.Button} onClick={fetchQuote}>
        Generate Quote
      </button>

      <button className={Styles.Button} onClick={()=>{
      exportComponentAsPNG(componentRef)}} >
        Download Quote
      </button>
    </div>
    
  </>
 
  );
}

export default QuoteGenerator
