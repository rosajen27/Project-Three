import React, { Component } from "react";
import './Sidebar.css'

export class Sidebar extends Component {
  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("mySidebar").style.zIndex = "0";
    console.log("clicked")
  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  render() {
    return (
      <div>
        <div id="mySidebar" className="sidebar">
          <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>
            &times;
          </a>
          <a href="#">Home</a>
          <a href="#">Saved/Favorites</a>
          <a href="#">Politics</a>
          <a href="#">Science</a>
          <a href="#">Sports</a>
          <a href="#">Economics</a>
          <a href="#">World</a>
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
