import axios from 'axios'
import React, {useState} from 'react'
import Styles from "./DAChecker.module.css"
function DAChecker() {

  const [domain, setDomain] = useState()
  const [da, setDa] = useState()
  const [pageRank, setPageRank] = useState()
  const [spamScore, setSpamScore] = useState()
  const [loading, setLoading] = useState(true)
  const fetchData = async(domain) => {
    try{
    const options = {
      headers: {
        'x-rapidapi-host': 'domain-authority1.p.rapidapi.com',
        'x-rapidapi-key': '370b9104c3mshe7540c364e03e41p18e5e2jsnaf705aa9e533'
      }
    };
    const {data} = await axios.get(`https://domain-authority1.p.rapidapi.com/domain/${domain}`, options);
    setDa(data[0].da);
    setPageRank(data[0].page_rank);
    setSpamScore(data[0].spam_score)
    setLoading(false);
    console.log(data[0]);
  }
  catch(error){
    alert("Invalid Domain Name Please Try Again")

  }
  }



  return (
    <div className={Styles.app}>
      <input placeholder='Enter Domain Here' className={Styles.input} type='text' onChange={(e)=>{setDomain(e.target.value)}}/>
      <button className={Styles.button} onClick={()=>{fetchData(domain)}}>Submit</button>
    {!loading? 
    <div>
    <p  className={Styles.data}>{`Domain Authority Score: ${da}`}</p>
    <p  className={Styles.data}>{`Page Rank : ${pageRank}`}</p>
    <p  className={Styles.data}>{`Spam Score :${spamScore}`}</p></div>:""}
     
      
    </div>
  );
}

export default DAChecker;
