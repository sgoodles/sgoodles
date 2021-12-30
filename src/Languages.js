import React, { Component } from "react";
import img from './img/India_flag_icon.png';
import img1 from './img/download.png';
import img2 from './img/images.png'

class Language extends Component {
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
              name="select"
              type="checkbox"
              value="Hindi"
              checked={true}
              onChange={this.onValueChange}
              
            />
            {/* <img src={img} className="px-5" width="80px"/> */}
            Hindi
          </label>
        </div>
        <div className="radio">
          <label >
            <input
            name="select"
              type="checkbox"
              value="English"
              
              onChange={this.onValueChange}
            />
            {/* <img src={img1} className="px-5" width="80px"/> */}
            English
          </label>
        </div>
        <div className="radio">
          <label >
            <input
            name="select"
              type="checkbox"
              value="Bengali"

              onChange={this.onValueChange}
            />
            {/* <img src={img2} className="px-5" width="80px"/> */}
            Bengali
          </label>
        </div>
        <div className="radio">
          <label >
            <input
            name="select"
              type="checkbox"
              value="Marathi"
              
              onChange={this.onValueChange}
            />
            Marathi
          </label>
        </div>
        <div className="radio">
          <label >
            <input
            name="select"
              type="checkbox"
              value="Telugu"
              
              onChange={this.onValueChange}
            />
            Telugu
          </label>
        </div>
        <div className="radio">
          <label >
            <input
            name="select"
              type="checkbox"
              value="Tamil"
              
              onChange={this.onValueChange}
            />
            Tamil
          </label>
        </div>
        <div className="radio">
          <label >
            <input
            name="select"
              type="checkbox"
              value="Gujarati"
              
              onChange={this.onValueChange}
            />
            Gujarati
          </label>
        </div>
        <div className="radio">
          <label >
            <input
            name="select"
              type="checkbox"
              value="Urdu"
              checked={this.state.selectedOption === "Urdu"}
              onChange={this.onValueChange}
            />
            Urdu
          </label>
        </div>
        <div className="radio">
          <label >
            <input
            name="select"
              type="checkbox"
              value="Kannada"
              
              onChange={this.onValueChange}
            />
            Kannada
          </label>
        </div>
        <div className="radio">
          <label >
            <input
            name="select"
              type="checkbox"
              value="Malayalam"
              
              onChange={this.onValueChange}
            />
            Malayalam
          </label>
        </div>
        
      </form>
    );
  }
}

export default Language;


// checked={this.state.selectedOption === "Malayalam"}