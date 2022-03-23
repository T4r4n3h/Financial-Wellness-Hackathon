import React from 'react'
import food from '../assets/food.png'

const Task = () => {
  return (
    <div>
      <h1 className="text-xl">My Mission</h1>
      <div className="container bg-reallywhite flex rounded-medium shadow">
        <div className="">
          <img src={food} alt="Food Icon" width="20" height="30"/>
        </div>
        <div className="">
          <p className="text-sm">Help with grocery shopping</p>
          <p className="text-xs text-gray">Today</p>
          </div>
        <div className="">
          <p className="text-xs text-gray">$2.00</p>
          </div>
      </div>
    </div>
  );
}

export default Task
