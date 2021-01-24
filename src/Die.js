import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"]
  }
  constructor(props){
    super(props);
    this.toggleDie = this.toggleDie.bind(this);
  }
  toggleDie(){
    this.props.handleClick(this.props.idx);
  }
  render() {
    const {val, locked, numberWords, disabled, rolling} = this.props;
    let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5x ` ;
    if (locked) {
      classes += "Die-locked "
    }
    else if (rolling) {
      classes += "Die-rolling"
    }
    return <i className={classes} onClick={this.toggleDie} disabled={disabled}></i>;
  }
}

export default Die;
