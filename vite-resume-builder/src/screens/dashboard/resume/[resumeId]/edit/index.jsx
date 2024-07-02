import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import FormSection from '../../components/FormSection';
//import ResumePreview from '../../components/ResumePreview';
//import { ResumeInfoContext } from '@/context/ResumeInfoContext';
//import dummy from '@/data/dummy';

function EditResume() {
    const {resumeId}=useParams();
    const [resumeInfo,setResumeInfo]=useState();
    useEffect(()=>{
       
        GetResumeInfo();
    },[])


    const GetResumeInfo=()=>{
        //setResumeInfo(resp.data.data);
    }

  return (
    <div value={{resumeInfo,setResumeInfo}}>
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
        {/* Form Section  */}
          {/* <FormSection/> */}
        {/* Preview Section  */}
         {/* <ResumePreview/> */}
      </div>
      Edit Resume of id {resumeId}
    </div>
  )
}

export default EditResume