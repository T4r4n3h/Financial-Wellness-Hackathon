import React from 'react'
import Pocket from '../components/Pocket'
import Task from '../components/Task'
import Footer from '../components/Footer'
import oliviaimg from '../assets/Olivia.png'
import momimg from '../assets/Mom.png'

const HomePage = () => {
  return (
    <div className="home-page">

      {/* Header */}
      <div className="pt-5">
        <img className="mx-auto" src={oliviaimg} alt="Account Icon" width="50" height="50"/>
        <p className="mt-2 pb-6 text-2xl text-center">Hi, Olivia</p>
      </div>

      {/* Pocket */}
      <Pocket />

      {/* Show Index of Selected Missions */}
      <Task />

      {/*  Nav Bar */}
      <Footer />
      
    </div>
  )
}

export default HomePage