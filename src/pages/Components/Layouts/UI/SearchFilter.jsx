import React from 'react'

const SearchFilter = ({search , setSearch , filter , setFilter}) => {

    const handleInputChange = (event)=>{
        event.preventDefault()
        setSearch(event.target.value)
    }
    const handleSelectChange = (event)=>{
        event.preventDefault()
        setFilter(event.target.value)

    }
  return <section className="section-searchFilter container">

    <input 
    type="text" 
    placeholder='search' 
    value={search} 
    onChange={handleInputChange}/>

     <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

  </section>
   
  
}

export default SearchFilter
