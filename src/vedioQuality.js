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
      <input type="radio" id="language1" name="language1" value="Hindi" checked={items["language1"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
      <label for="language1"> High Definition</label><br />
      <input type="radio" id="language2" name="language2" value="English" checked={items["language2"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
      <label for="language2"> Medium</label><br />
      <input type="radio" id="language3" name="language3" value="Tamil" checked={items["language3"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
      <label for="language3"> Low</label><br /><br /><br />
      <input type="checkbox" id="language4" name="language4" value="Telugu" checked={items["language4"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
      <label for="language4"> High Quality On Wifi</label><br />
      
      
    </form>
  )
}
}

export default CheckboxComponent;
