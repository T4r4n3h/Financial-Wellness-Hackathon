import React from 'react'
import { Link } from 'react-router-dom'
import oliviaimg from '../assets/Olivia.png'
import momimg from '../assets/Mom.png'

const AccountPage = () => {
  return (
    <div className="accountpage flex flex-wrap place-content-center gap-4 w-screen h-screen bg-cornflowerblue text-reallywhite">
            
            <div className="">
              <img src={oliviaimg} alt="Account Icon" width="100" height="100"/>
              <Link to="/wallet">
                <p className="text-center text-lg mt-3">Olivia</p>
              </Link>
              
            </div>
            
            <div className="">
              <img src={momimg} alt="Account Icon" width="100" height="100"/>
              <Link to="/wallet">
                <p className="text-center text-lg mt-3">Mom</p>
              </Link>
            </div>
   
    </div>
  )
}

export default AccountPage