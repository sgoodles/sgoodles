import React, { Component } from "react";
class CheckboxComponent extends Component {

  constructor() {
  super();
  this.state = {
    items: {}
  }
}

handleCheckboxClick = (event) => {
  const { name, value } = event.target;
  const item = localStorage.getItem(name);
  if (item) {
    console.log(`Remove item name: ${name}, value: ${value}`);
    localStorage.removeItem(name);
    this.setState(state => delete state.items[name])
  } else {
    console.log(`Set item name: ${name}, value: ${value}`);
    localStorage.setItem(name, value);
    this.setState(state => state.items[name] = value);
  }
}

getLocalStorageItems = () => {
  const storageKeys = Object.keys(localStorage);
  let obj = {};
  for (let i = 0; i < storageKeys.length; i++) {
    obj[ storageKeys[i] ] = localStorage.getItem(storageKeys[i]);
  }
  this.setState({ items: obj });
}

componentWillMount() {
  this.getLocalStorageItems();
}

render() {
  const { items } = this.state;
  return (
    <form className="mx-10">
      <input type="checkbox" id="Movie1" name="Movie1" value="Romance" checked={items["Movie1"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
      <label for="Movie1"> Romance</label><br />
      <input type="checkbox" id="Movie2" name="Movie2" value="Drama" checked={items["Movie2"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
      <label for="Movie2"> Drama</label><br />
      <input type="checkbox" id="Movie3" name="Movie3" value="Mythology" checked={items["Movie3"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
      <label for="Movie3"> Mythology</label><br />
      <input type="checkbox" id="Movie4" name="Movie4" value="Lifestyle" checked={items["Movie4"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
      <label for="Movie4"> Lifestyle</label><br />
      <input type="checkbox" id="Movie5" name="Movie5" value="Horror" checked={items["Movie5"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
      <label for="Movie5"> Horror</label><br /><br/>
      
    </form>
  )
}
}

export default CheckboxComponent;
