import React, { Component } from "react";
import img from './img/India_flag_icon.png';
import img1 from './img/download.png';
import img2 from './img/images.png'

class vedioQuality extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }

  render() {
    return (
      <form onSubmit={this.formSubmit} className="mx-10 my-10 px-5">
        <div className="radio">
          <label >
            <input
            
              type="radio"
              value="High Definition"
              checked={this.state.selectedOption === "High Definition"}
              onChange={this.onValueChange}
            />
            {/* <img src={img} className="px-5" width="80px"/> */}
            High Definition
          </label>
        </div>
        <div className="radio">
          <label >
            <input
              type="radio"
              value="Medium"
              checked={this.state.selectedOption === "Medium"}
              onChange={this.onValueChange}
            />
            {/* <img src={img1} className="px-5" width="80px"/> */}
            Medium
          </label>
        </div>
        <div className="radio">
          <label >
            <input
              type="radio"
              value="Low"
              checked={this.state.selectedOption === "Low"}
              onChange={this.onValueChange}
            />
            {/* <img src={img2} className="px-5" width="80px"/> */}
            Low
          </label>
        </div>
        <div className="checkbox my-10">
          <label >
            <input
              type="checkbox"
              value="highQuality"
              onChange={this.onValueChange}
            />
            High Quality on Wifi
          </label>
        </div>
        
        <div>
          Selected option is : {this.state.selectedOption}
        </div>
      </form>
    );
  }
}

export default vedioQuality;