import React from 'react'
import { Link } from 'react-router-dom'
import oliviaimg from '../assets/Olivia.png'
import momimg from '../assets/Mom.png'

const ProfilePage = () => {
  return (
    <div className="w-screen h-screen form-center">
            <div className="mt-10 ">
              <img className="mx-auto" src={momimg} alt="Account Icon" width="100" height="100"/>
                <p className="text-center text-lg mt-3">Mom</p>
              <a target="_blank" href="#">
                <button className= "btn bg-sunyellow w-80 h-12 rounded-medium text-base shadow mt-12">Account Settings</button>
            </a>
              <a target="_blank" href="https://www.td.com/ca/en/personal-banking/how-to/budgeting/how-to-financial-literacy-for-kids/#:~:text=Financial%20literacy%20is%20also%20something,become%20more%20financially%20confident%20adults.">
                <button className= "btn bg-limegreen w-80 h-12 rounded-medium text-base shadow mt-6">Financial Resources</button>
            </a>
            </div>
    </div>
  )
}

export default ProfilePage