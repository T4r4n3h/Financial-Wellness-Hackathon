import React from 'react'
import food from '../assets/food.png'

const Task = () => {
  return (
    <div>
      <div className="w-80 h-20 container bg-reallywhite flex rounded-medium shadow relative">
        <div className="my-auto">
          <img className="ml-3 mr-4" src={food} alt="Food Icon" width="20" height="30"/>
        </div>
        <div className="my-auto">
          <p className="text-sm">Help with grocery shopping</p>
          <p className="text-xs text-gray pt-2">Today</p>
        </div>
        <div className="my-auto ml-4 absolute right-4 top-8">
          <p className="mx-auto text-xs text-gray">$2.00</p>
        </div>
      </div>
    </div>
  );
}

export default Task
