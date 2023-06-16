import React from 'react'
import { about, profile, project } from '../../utils/setup/data'
import About from '../about/About'
import Profile from '../profile/Profile'
import Project from '../project/Project'

const index = () => {
  return (
    <>
      <About about={about} />
      <Profile profile={profile} />
      <Project project={project}/>
    </>
  )
}

export default index
