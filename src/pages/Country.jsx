import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/postApi'
import CountryCard from './Components/Layouts/CountryCard'
import SearchFilter from './Components/Layouts/UI/SearchFilter'

const Country = () => {

   const [ isPending , startTransition ] = useTransition()
   const [ countries , setCountries ] = useState([])

   const [search , setSearch] = useState()
   const [filter , setFilter] = useState("all")

  useEffect( ()=>{
      startTransition( async()=>{
        const res = await getCountryData()
        setCountries(res.data)
        // console.log(res)
      })
  }, [] )

  if( isPending) return <h1>Loading....</h1>

  // main logic for the program 
  countries.filter( (country )=>{ })


  return <section className= "country-section">
    <SearchFilter 
    search = { search} 
    setSearch = { setSearch} 
    filter = { filter} 
    setFilter = {setFilter}/>
    <ul className='grid grid-four-cols'>
      {
        countries.map( ( curCountry, index )=>{
          return <CountryCard country = { curCountry} key= {index}
          />

        })
      }
    </ul>
  </section>
}

export default Country
