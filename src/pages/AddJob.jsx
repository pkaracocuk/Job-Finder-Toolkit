import React from 'react'
import { statusOptions, typeOptions } from '../constants'
import {v4} from 'uuid';
import { addJob } from '../redux/jobSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';





const AddJob = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const handleSubmit =(e)=>{
   e.preventDefault();
   const formData = new FormData(e.target);

   console.log(formData)
  
   const dataObj = Object.fromEntries(formData);
   
   dataObj.id =v4();
   console.log(dataObj)

   dataObj.date = new Date().toLocaleDateString();


   // Update the api
   axios.post("http://localhost:3031/jobs",dataObj)
   .then(()=>{
    dispatch(addJob(dataObj));
    navigate("/");
    toast('Successfully added', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
   })
   
  }
  return (
    <div className='add-sec'>
      <h2>Add New Job</h2>
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <label>Position</label>
          <input name='position' type="text" />
        </div>
        <div className='field'>
          <label>Company</label>
          <input name='company' type="text" />
        </div>
        <div className='field'>
          <label>Location</label>
          <input name='location' type="text" />
        </div>
        <div className='field'>
          <label>Status</label>
         <select name='status'>
          {statusOptions.map((opt,i)=>(
            <option key={i}>{opt.label}</option>
          ))}
         </select>
        </div>
        <div className='field'>
          <label>Type</label>
          <select name='type'>
          {typeOptions.map((opt,i)=>(
            <option key={i}>{opt.label}</option>
          ))}
          </select>
        </div>
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddJob