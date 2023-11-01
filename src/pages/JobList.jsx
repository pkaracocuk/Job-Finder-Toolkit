import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setJobs } from "../redux/jobSlice"
import FilterForm from "../components/FilterForm"








const JobList = () => {
  console.log()

  const dispatch = useDispatch();
  const state= useSelector((store)=>store);
  console.log(state)
useEffect(()=>{
  axios.get("http://localhost:3031/jobs",{timeout:5000})
  .then((res)=>dispatch(setJobs(res.data)))
  .catch((err)=>{
  if(err.code=="ECONNABORTED"){
    alert("Your Connection Has Timed Out")}
  })

},[])


  return (
    <div>
    <FilterForm/>
<h3 className="job-count">You are viewing   ({state?.filteredJobs.length} ) out of ({state?.jobs.length}) job listings</h3>
  <section className="list-section">
   {!state.initialized ? (<p>Loading...</p>)  : (state.filteredJobs.map((job)=><div className="job-card" key={job.id}>
      <div className="head">
        <div className="letter">
          <p>{job.company[0]}</p>
        </div>
        <div className="info">
          <p>{job.position}</p>
          <p>{job.company}</p>
        </div>
      </div>
      <div className="body">
        <div className="field">
          <img src="/images/map.png"/>
          <p>{job.location}</p>
        </div>
        <div className="field">
          <img src="/images/calendar.png"/>
          <p>{job.date}</p>
        </div>
        <div className="field">
          <img src="/images/bag.png"/>
          <p>{job.type}</p>
        </div>
        <div className="status">
          <span className={job.status}>
            {job.status}
          </span>
          </div>
      </div>
    </div>))}
   </section>
    </div>
  )
}

export default JobList