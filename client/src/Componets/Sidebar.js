import React, { Component } from "react";
import './Sidebar.css'

export class Sidebar extends Component {
  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("mySidebar").style.zIndex = "0";
  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  handleClick(event) {
     console.log(event.target.innerText)
     this.props.callBack(event.target.innerText)
  }

  render() {
    return (
      <div>
        <div id="mySidebar" className="sidebar">
          <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>
            &times;
          </a>
          <a href="#" onClick={this.handleClick.bind(this)}>Home</a>
          <a href="#" onClick={this.handleClick.bind(this)}>Saved/Favorites</a>
          <a href="#" onClick={this.handleClick.bind(this)}>Politics</a>
          <a href="#" onClick={this.handleClick.bind(this)}>Science</a>
          <a href="#" onClick={this.handleClick.bind(this)}>Sports</a>
          <a href="#" onClick={this.handleClick.bind(this)}>Economics</a>
          <a href="#" onClick={this.handleClick.bind(this)}>World</a>
        </div>

        <div id="main">
          <button class="openbtn" onClick={this.openNav}>
            &#9776; Menu
          </button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
