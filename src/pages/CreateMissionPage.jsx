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
  formSubmitted = async (e) => {
      e.preventDefault();
    try {
      const fetchResponse = await fetch("/api/tasks", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          title: this.state.title,
          date: this.state.date,
          reward: this.state.reward
        }) 
        }) 
      let serverResponse = await fetchResponse.json() 
      console.log("Success:", serverResponse)   
      this.setState({
        title: '',
        date: '',
        reward: ''
      })
    } catch (err) {
      console.error("Error:", err) // 
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
            <div className="flex relative pb-5">
                <div className="flex-auto pt-4 pl-3"><h1 className="text-xl">Add New Mission</h1> </div>
                <div className="flex-auto pt-5 pr-4 absolute right-0"><img src={back} alt="Back Icon" width="12" height="12"/></div>
            </div>
          <img className="mx-auto" src={addicon} alt="Add Icon" width="50" height="50"/>
          <div className="form-center">
          <form className="pl-3 h-96" onSubmit={this.formSubmitted}> 
            <label className="">
              <span><p className="text-base pb-2 pt-3">Mission Title</p></span>
              <input 
                className="w-80 h-12 rounded-medium shadow pl-2"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <span><p className="text-base pb-2 pt-3">Complete mission by</p></span>
              <input
                className="w-80 h-12 rounded-medium shadow pl-2"
                name="date"
                value={this.state.datel}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <span ><p className="text-base pb-2 pt-3">Reward</p></span>
              <input
                className="w-80 h-12 rounded-medium shadow pl-2"
                name="reward"
                value={this.state.reward}
                onChange={this.handleChange}
              />
            </label>
                <button className=" block bg-lightgray w-80 h-12 rounded-medium text-base text-reallywhite shadow mt-10">Add to New Mission</button>
          </form>
          </div>
        </div>
    )
  }
}