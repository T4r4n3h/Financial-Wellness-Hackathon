import {useState} from 'react'
import LoginForm from './components/LoginForm'
import HomePage from './pages/HomePage'

export default function App() {


  const[token, setToken] = useState();
  if (!token) {
    return <LoginForm setToken={setToken} />
  }

return(

  <div className="container">

      <HomePage/>



    
  </div>
)


}
