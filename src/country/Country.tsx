import React, { use, useState } from 'react'
import type { CountryType } from '../type'
import './country.css'
import CountryFlags from './CountryFlags'

export interface CountriesType {
    countryapi: Promise<CountryType[]>
}


const Country = ({ countryapi }: CountriesType) => {
    const data = use(countryapi)
    const [flagsData, setFlagData] = useState<string[]>([])
    const handleFlagsCount = (flags: string): void => {
        if (flagsData.includes(flags)) {
            const doubleflags = flagsData.filter(f=> f !==flags)
            setFlagData(doubleflags)
        }
        else {
            const Flagspng = [...flagsData, flags]
            setFlagData(Flagspng)

        }


    }

    return (
        <div>
            <h2>Country:{data.length}</h2>
            <h4>Total visited : {flagsData.length}</h4>
            
            {
                flagsData.map(flag=> <img src={flag} alt="" />)
            }
            <div className='country'>

                {
                    data.map(country => <CountryFlags key={country.ccn3.ccn3} countrydata={country}
                        handleFlagsCount={handleFlagsCount}

                    ></CountryFlags>)

                }
            </div>
        </div>
    )
}

export default Country