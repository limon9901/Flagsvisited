import  { useState } from 'react'
import './countryflags.css'
import type { CountryType } from '../type'
interface CountryFlagType{
    countrydata:CountryType
    handleFlagsCount:(flags:string)=>void

}

const CountryFlags = ({countrydata,handleFlagsCount}:CountryFlagType) => {
    const[visited,setvisited]= useState(false)
    const handleVisited =()=>{
        setvisited(!visited)
        handleFlagsCount(countrydata.flags.flags.png)
        

    }
  return (
    <div>
        
        <div className={`flags ${visited?"visited":""}`}>

            <h3>{countrydata.name.common}</h3>
            <img src={countrydata.flags.flags.png} alt={countrydata.flags.flags.alt} />
            <button onClick={handleVisited}>{visited?"visited":"No visited"}</button>
            
        </div>
    </div>
  )
}

export default CountryFlags