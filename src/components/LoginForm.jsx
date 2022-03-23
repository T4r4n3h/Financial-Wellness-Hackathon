// import {Component} from 'react';

// export default class LoginForm extends Component {
//     state = {
//         email: '',
//         password: '',
//         error:'',
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
//             const fetchResponse = await fetch('/api/users/login', {
//                 method: 'POST',
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email: this.state.email, password: this.state.password})
//             })

//             if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')

//             let token = await fetchResponse.json()
//             localStorage.setItem('token', token)

//             const userDoc = JSON.parse(atob(token.split('.')[1])).user
//             this.props.logInUser(userDoc)

//         } catch (err) {
//             console.log("Log in form error", err)
//             this.setState({error: 'LOG IN FAILED - TRY AGAIN'})
//         }
//     }

//     render() {
//         return (
//             <div className="LoginForm">
           

//                 <div className="container">
//                     <form autoComplete="off" onSubmit={this.handleSubmit}>
//                         <div className="inputWrapper">
                       

//                             <label></label>
//                             <input className="input"
//                             placeholder="Email"
//                             type="text" name="email" value={this.state.email} onChange={this.handleChange} required/>
//                         </div>
                        
                        
                        
//                         <div className="inputWrapper flex ">
                       
//                             <label></label>
//                             <input className="input placeholder-gray-200::placeholder"
//                             placeholder="Password"
//                             type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                            
//                         </div>
                        
//                         <div className="flex justify-between">
//                             <div><p className="text-sm">Remember me</p></div>
//                             <div><p className="text-sm underline">Forget password?</p></div>
//                         </div>
//                         <div className="flex">
//                             <button className="btn mt-16 bg-blue-500 text-white"
//                             type="submit">Log In</button>
//                         </div>
//                     </form>
//                     <p>{this.state.error}</p>
//                 </div>
//             </div>
//         )

            
        
//     }
// }