import React, { Component } from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import Sidebar from './Sidebar';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  handlePress(event) {
    if (event.charCode === 13) {
      this.setState({ search: event.target.value }, () => {
        if (this.state.search === undefined) {
          this.props.callBack("");
        } else {
          this.props.callBack(this.state.search);
        }
      });
    }
  }

  search = (data) => {
    this.setState({ search: data }, () => {
      this.props.callBack(this.state.search);
    });
  };

  render() {
    return (
      <div className="Header">
          <Sidebar callBack={this.search}/>

        <div className="Header__center">
          <input
            type="text"
            placeholder="Search"
            onKeyPress={this.handlePress.bind(this)}
          />
          <div className="Header__search">
            <SearchIcon />
          </div>
        </div>

        <div className="Header__right">
          <p>John Dough</p>
          <Avatar />
        </div>
      </div>
    );
  }
}

export default Header;
