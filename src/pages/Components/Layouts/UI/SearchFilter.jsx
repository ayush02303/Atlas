import React from 'react'

const SearchFilter = ({search , setSearch , filter , setFilter}) => {

    const handleInputChange = (event)=>{
        setSearch(event.target.value)
    }
  return <section className='section-searchFiltercontainer'>
    <input 
    type="text" 
    placeholder='search' 
    value={search} 
    onChange={handleInputChange}/>

  </section>
   
  
}

export default SearchFilter
