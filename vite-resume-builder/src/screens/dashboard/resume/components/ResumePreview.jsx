import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { useContext } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import SummaryPreview from './preview/SummaryPreview'
import ExperiencePreview from './preview/ExperiencePreview'
import EducationalPreview from './preview/EducationalPreview'
import SkillsPreview from './preview/SkillsPreview'

const ResumePreview = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
      style={{ borderColor:resumeInfo?.themeColor }}>
      <PersonalDetailPreview resumeInfo={resumeInfo}/>
      <SummaryPreview resumeInfo={resumeInfo}/>
      {/* Professional Experience  */}
      {resumeInfo?.experience?.length>0&& <ExperiencePreview resumeInfo={resumeInfo} />}
      {/* Educational  */}
      {resumeInfo?.education?.length>0&&   <EducationalPreview resumeInfo={resumeInfo} />}
      {/* Skilss  */}
      {resumeInfo?.skills?.length>0&&    <SkillsPreview resumeInfo={resumeInfo}/>}
    </div>
  )
}

export default ResumePreview