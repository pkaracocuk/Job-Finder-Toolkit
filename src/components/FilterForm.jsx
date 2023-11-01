import React from 'react'
import { sortOptions,typeOptions,statusOptions } from '../constants'
import { filterBySearch,filterByStatus,filterByType } from '../redux/jobSlice'
import { useDispatch } from 'react-redux'




const FilterForm = () => {
    const dispatch =useDispatch();


const handleSearch =(e)=>{
  dispatch(filterBySearch(e.target.value))
}

const handleStatus =(e)=>{
    dispatch(filterByStatus(e.target.value))
  }

  const handleType =(e)=>{
    dispatch(filterByType(e.target.value))
  }



  return (
    <section className='filter-sec'>
        <h2>Filter Form</h2>
        <form>
        <div className='field'>
            <label>Search</label>
            <input type="text" onChange={handleSearch} />
        </div>
        <div className='field'>
            <label>Status</label>
            <select onChange={handleStatus}>
            <option hidden>Select</option>
                {statusOptions.map((opt,i)=>(
                    <option key={i}>{opt.label}</option>
                ))}
            </select>
        </div>
        <div className='field'>
            <label>Type</label>
            <select onChange={handleType}>
                <option hidden>Select</option>
                {typeOptions.map((opt,i)=>(
                    <option key={i}>{opt.label}</option>
                ))}
            </select>
        </div>
        <div className='field'>
            <label>Sort</label>
            <select >
                {sortOptions.map((opt,i)=>(
                    <option key={i}>{opt}</option>
                ))}
            </select>
        </div>
        <button>Clear Filters</button>
        </form>
    </section>
  )
}

export default FilterForm;