import { useUser } from '@clerk/clerk-react'
import AddResume from './components/AddResume'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ResumeCardItem from './components/ResumeCardItem';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const Dashboard = () => {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);

  const getResumeList = async () => {
    // http://127.0.0.1:8000/api/resume/?email=gk@gmail.com
    try {
      const response = await axios.get(`${BACKEND_URL}/api/resume/?email=${user?.emailAddresses[0].emailAddress}`)
      console.log(response.data.results)
      setResumeList(response.data.results);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    user && getResumeList(); 
  }, [user])
  console.log("My Resumes: ", resumeList)

  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start Creating AI resume to your next Job role</p>
      <div className='grid grid-cols-2 
        md:grid-cols-3 lg:grid-cols-5 gap-5
        mt-10
        '>
          <AddResume />
          {resumeList.length> 0 ? resumeList.map((resume,index)=>(
          <ResumeCardItem resume={resume} key={index} refreshData={getResumeList} />
        )):
        [1,2,3,4].map((item,index)=>(
          <div key={index} className='h-[280px] rounded-lg bg-slate-200 animate-pulse'>
            {item}
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Dashboard