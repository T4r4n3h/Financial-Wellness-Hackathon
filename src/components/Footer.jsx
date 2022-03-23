import React from 'react'
import { Link } from 'react-router-dom'
import mission from '../assets/Mission.png'
import profile from '../assets/Profile.png'
import wallet from '../assets/Wallet.png'

const Footer = () => {
  return (
    <div className="footer mx-auto ">
      <div>
         <Link to="/mission">
            <p className="text-center text-lg mt-3">Mission</p>
          </Link>
      </div>
      <div>
         <Link to="/wallet">
            <p className="text-center text-lg mt-3">Wallet</p>
         </Link>
      </div>
      <div>
         <Link to="/profile">
          <p className="text-center text-lg mt-3">Profile</p>
        </Link>
      </div>
      </div>
  )
}

export default Footer


//  <nav>
//             <Link to='/'>Home</Link>
//             <Link to='/About'>About</Link>
//             <Link to='/Portfolio'>Portfolio</Link>
//           </nav>