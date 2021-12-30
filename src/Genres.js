import React, { Component } from "react";
import img from './img/India_flag_icon.png';
import img1 from './img/download.png';
import img2 from './img/images.png'

class Genres extends Component {
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
            
              type="checkbox"
              value="Romance"
              checked={true}
              onChange={this.onValueChange}
            />
            {/* <img src={img} className="px-5" width="80px"/> */}
            Romance
          </label>
        </div>
        <div className="radio">
          <label >
            <input
              type="checkbox"
              value="Drama"
              
              onChange={this.onValueChange}
            />
            {/* <img src={img1} className="px-5" width="80px"/> */}
            Drama
          </label>
        </div>
        <div className="radio">
          <label >
            <input
              type="checkbox"
              value="Mythology"
              
              onChange={this.onValueChange}
            />
            {/* <img src={img2} className="px-5" width="80px"/> */}
            Mythology
          </label>
        </div>
        <div className="radio">
          <label >
            <input
              type="checkbox"
              value="Lifestyle"
              
              onChange={this.onValueChange}
            />
            Lifestyle
          </label>
        </div>
        <div className="radio">
          <label >
            <input
              type="checkbox"
              value="Horror"
              
              onChange={this.onValueChange}
            />
            Horror
          </label>
        </div>
        
        
      </form>
    );
  }
}

export default Genres;

//<div>
//Selected option is : {this.state.selectedOption}
//</div>