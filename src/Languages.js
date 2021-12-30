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
      <input type="checkbox" id="language1" name="language1" value="Hindi" checked={items["language1"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
      <label for="language1"> Hindi</label><br />
      <input type="checkbox" id="language2" name="language2" value="English" checked={items["language2"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
      <label for="language2"> English</label><br />
      <input type="checkbox" id="language3" name="language3" value="Tamil" checked={items["language3"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
      <label for="language3"> Tamil</label><br />
      <input type="checkbox" id="language4" name="language4" value="Telugu" checked={items["language4"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
      <label for="language4"> Telugu</label><br />
      <input type="checkbox" id="language5" name="language5" value="Malayalam" checked={items["language5"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
      <label for="language5"> Malayalam</label><br />
      <input type="checkbox" id="language6" name="language6" value="Kannada" checked={items["language6"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
      <label for="language6"> Kannada</label><br />
      <input type="checkbox" id="language7" name="language7" value="Bengali" checked={items["language7"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
      <label for="language7"> Bengali</label><br />
      <input type="checkbox" id="language8" name="language8" value="Gujarati" checked={items["language8"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
      <label for="language8"> Gujarati</label><br />
      <input type="checkbox" id="language9" name="language9" value="Urdu" checked={items["language9"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
      <label for="language9"> Urdu</label><br />
      <input type="checkbox" id="language10" name="language10" value="Marathi" checked={items["language10"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
      <label for="language10"> Marathi</label><br /><br />
    </form>
  )
}
}

export default CheckboxComponent;
