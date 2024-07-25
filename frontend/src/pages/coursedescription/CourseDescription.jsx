import React, { useEffect } from 'react'
import "./coursedescription.css"
import { useNavigate, useParams } from 'react-router-dom'
import { CourseData } from '../../context/CourseContext'
import { server } from '../../main'
const CourseDescription = ({user}) => {
    const navigate=useNavigate
    const params=useParams()
    const {fetchCourse,course}=CourseData()
    useEffect(()=>{
      fetchCourse(params.id)
    },[])
  return (
    <>
      {course && (
        <div className="course-description">
          <div className="course-header">
            <img src={`${server}/${course.image}`} className='course-image' alt="" />
            <div className="course-info">
              <h2>{course.title}</h2>
              <p>Instructor:{course.createdBy}</p>
              <p>Duration:{course.duration}</p>
            </div>
            

          </div>
          <p>Get started with this course at ₹{course.price}</p>

          {
              user && user.subscription.includes(course._id) ? (<button className='common-btn' onClick={()=>navigate("/course/study/course._id")}>Study</button>):(<button className='common-btn'>Buy Now</button>)
          }
        </div>
      )}
    </>
  )
}

export default CourseDescription
