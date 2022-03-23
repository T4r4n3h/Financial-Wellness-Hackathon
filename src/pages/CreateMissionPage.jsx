import { Route, Switch, Redirect } from 'react-router-dom';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import addicon from '../assets/AddIcon.png'
import back from '../assets/Back.png'

export default class CreateMissionPage extends Component {
  state = {
      title: "",
      date: "",
      reward: ""
    }
  formSubmitted = async () => {
    // evt.preventDefault();
    try {
      let fetchResponse = await fetch("/api/tasks", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          title: this.state.title,
          date: this.state.date,
          reward: this.state.reward
        }) // <-- send this object to server
        }) 
      let serverResponse = await fetchResponse.json() // <-- decode fetch response
      console.log("Success:", serverResponse)   // <-- log server response

      // if the order was sent over without errors, set state to empty
      this.setState({
        title: '',
        date: '',
        reward: ''
      })
    } catch (err) {
      console.error("Error:", err) // <-- log if error 
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  };
  render() {
    return (
        <div className="CreateMissionPage">
            <div className="flex">
                <div><h1 className="text-xl">Add New Mission</h1> </div>
                <div><img src={back} alt="Back Icon" width="12" height="12"/></div>
            </div>
          <img className="mx-auto" src={addicon} alt="Add Icon" width="60" height="60"/>
          
          <form className="px-auto border bg-limegreen" onSubmit={this.formSubmitted}> 
            <label className="">
              <span><p className="text-base">Mission Title</p></span>
              <input 
                className="w-80 h-12 rounded-2xl"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <span><p className="text-base">Complete mission by</p></span>
              <input
                className="w-80 h-12 rounded-lg"
                name="date"
                value={this.state.datel}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <span ><p className="text-base">Reward</p></span>
              <input
                className="w-80 h-12 rounded-lg"
                name="reward"
                value={this.state.reward}
                onChange={this.handleChange}
              />
            </label>
            <button className="bg-lightgray w-80 h-12 rounded-lg text-base text-reallywhite" onClick={this.formSubmitted()}>Add to New Mission</button>
          </form>
        </div>
    )
  }
}