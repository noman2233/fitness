import React from 'react'
import BreadCrumb from "../../components/about/Breadcrumb";
import Registration from '../../components/Registration'
import ClassSection from '../../components/ClassSection'
import ClassesTimetable from '../../components/classes/ClassesTimetable'

const Classes = () => {
  return (
    <div>
      <BreadCrumb title="Classes" />
      <Registration/>
      <ClassSection/>
      <ClassesTimetable/>
    </div>
  )
}

export default Classes
