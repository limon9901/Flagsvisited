import  { Suspense } from 'react'
import Country from './country/Country'
import type { CountryType } from './type'

const App = () => {
  const countryapi = async ():Promise<CountryType[]>=>{
    const response = await fetch('https://openapi.programming-hero.com/api/all')
    const data = await response.json()
    return data.countries
  }
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
      <Country countryapi={countryapi()} ></Country>

      </Suspense>



    </div>
  )
}

export default App