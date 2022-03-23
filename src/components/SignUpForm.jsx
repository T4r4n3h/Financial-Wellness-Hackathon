// import { Component } from 'react'


// export default class SignUpForm extends Component {
//     state = {
//         name: '',
//         email: '',
//         password: '',
//         confirm: '',
//         error: ''
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value,
//             error: ''
//         })
//     }

//     handleSubmit = async (e) => {
//         e.preventDefault()
//         try {
//             console.log('step 1')
//             const fetchResponse = await fetch('/api/users/signup', {
//                 method: 'POST',
//                 headers: {"Content-Type": "application/json"},
//                 body: JSON.stringify({name: this.state.name, email: this.state.email, password: this.state.password,})
//               })
//               console.log(fetchResponse, 'this is the fetch response')
              
//               if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
              
//               let token = await fetchResponse.json()
//               localStorage.setItem('token', token)
              
//               const userDoc = JSON.parse(atob(token.split('.')[1])).user
//               this.props.logInUser(userDoc)
//         } catch (err) {
//             console.log("Sign up form error", err)
//             this.setState({error: 'LOG IN FAILED - TRY AGAIN'})
//         }
//     }

//     render() {
//         const disable = this.state.password !== this.state.confirm
//         return (
//             <div id="signUpForm">
//                 <div className="container">
//                     <button  onClick={this.props.handleLogInArrow}>
//                     "back arrow"
//                     </button>
//                 </div>
                
//                 <div className="container">
                    
//                     <form autoComplete="off" onSubmit={this.handleSubmit}>
//                         <div className="inputWrapper">
                       
//                             <label>Name</label>
//                             <input className="input placeholder-gray-200::placeholder" 
//                             placeholder="First name"
//                             type="text" name="name" value={this.state.name} onChange={this.handleChange} required/>
//                         </div>
//                         <div className="inputWrapper">
                           
//                             <label>Email</label>
//                             <input className="input placeholder-gray-200::placeholder" 
//                             placeholder="Email address"
//                             type="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                            
//                         </div>
//                         <div className="inputWrapper">
                           
//                             <label>Password</label>
//                             <input className="input placeholder-gray-200::placeholder" 
//                             placeholder="Password"
//                             type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                            
//                         </div>
//                         <div className="inputWrapper">
                           
//                             <label>Confirm Password</label>
//                             <input className="input placeholder-gray-200::placeholder" 
//                             placeholder="Confirm password"
//                             type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required/>
//                         </div>
//                         <button className="border bg-blue-500"
//                         type="submit" disabled={disable}>Create account button</button>
//                     </form>
//                     <p>{this.state.error}</p>
//                 </div>
//             </div>
//         )
//     }
// }

