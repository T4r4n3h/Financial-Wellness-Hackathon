import React from 'react'
import Task from '../components/Task'
import Footer from '../components/Footer'
import back from '../assets/Back.png'

const HomePage = () => {
  return (
    <div>
        <div className="flex relative pb-5">
            <div className="flex-auto pt-4 pl-3"><h1 className="text-xl">New Mission</h1> </div>
            <div className="flex-auto pt-5 pr-4 absolute right-0"><img src={back} alt="Back Icon" width="12" height="12"/></div>
        </div>
       <div className="relative mt-8">
           <div className="center absolute">
               <Task  />
               <button className="absolute bg-lightgray w-80 h-12 rounded-medium text-base text-reallywhite shadow mt-10">Add to My Mission</button>
           </div>
       </div>
      </div>
  )
}

export default HomePage