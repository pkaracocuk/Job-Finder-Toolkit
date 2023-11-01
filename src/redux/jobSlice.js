import { createSlice } from "@reduxjs/toolkit";

const initialState={
    jobs:[],
    filteredJobs:[],
    initialized:false,
}


const jobSlice = createSlice({
    name:"jobSlice",
    initialState,
    reducers:{
        setJobs:(state,action)=>{
            state.jobs=action.payload;
            state.filteredJobs = action.payload;
            state.initialized=true;
        },
        addJob:(state,action)=>{
            state.jobs.push(action.payload);
        },
        filterBySearch:(state,action)=>{

            const query =action.payload.toLowerCase()


         const filtred = state.jobs.filter((job)=>
         job.company.toLowerCase().includes(query)
         );
         state.filteredJobs = filtred;


        },
        filterByStatus:(state,action)=>{
         state.filteredJobs = state.jobs.filter((job)=>job.status === action.payload)
        },
        filterByType:(state,action)=>{
            state.filteredJobs = state.jobs.filter((job)=>job.type === action.payload)
        }
    },
})

export const {setJobs,addJob,filterBySearch,filterByStatus,filterByType}=jobSlice.actions


export default jobSlice.reducer;