import {Component}from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import AccountPage from './pages/AccountPage'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import CreateMissionPage from './pages/CreateMissionPage'
import Task from './components/Task'
import Pocket from './components/Pocket'

export default class App extends Component {
//   state = {user: ''}
//   logInUser = (user) => {this.setState({user: user})}
//   logOutUser = () => {this.setState({user: null})}
//   componentDidMount() {
//       let token = localStorage.getItem('token')
//       if (token) {
//           const payload = JSON.parse(atob(token.split('.')[1])); // decode token
//           if (payload.exp < Date.now() / 1000) {  // Check if our token is expired, and remove if it is (standard/boilerplate)
//               localStorage.removeItem('token');
//               token = null;
//           } else { // token not expired! our user is still 'logged in'. Put them into state.
//               let userDoc = payload.user // grab user details from token
//               this.setState({user: userDoc})      
//           }
//       }
//   }

  render() {
      return (
        <div className="w-screen h-screen bg-floralwhite">
          <Route path='/account' render={(props) => (
            <AccountPage {...props}/>
          )}/>
          <Route path='/wallet' render={(props) => (
            <HomePage {...props}/>
          )}/>
          <Route path='/pocket' render={(props) => (
            <Pocket {...props}/>
          )}/>
          <Route path='/task' render={(props) => (
            <Task {...props}/>
          )}/>
          <Route path='/create' render={(props) => (
            <CreateMissionPage {...props}/>
          )}/>
        </div>
      );
    }
}
//           <div className="App text-gray-500 bg-gradient-to-t from-gray-50 to-white">
//               {this.state.user
//                   ?
//                   <Routes>
// <Route path='*' element={<HomePage user={this.state.user} logOutUser={this.logOutUser}/>}/>
// </Routes>
//                   :
//                   <AuthPage logInUser={this.logInUser}/>
//               }
//               <div className="h-20"></div>
//           </div>
