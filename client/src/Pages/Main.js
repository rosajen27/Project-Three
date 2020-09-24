import React, { Component } from "react";
import Header from "../Componets/Header";
import Cards from "../Componets/Cards";
import Api from '../Util/Api'

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  search = (data) => {
    this.setState({ search: data });
  };

  getArtciles() {
    Api.getArticle(" ")
    .then((res) => {
      console.log(res)
    })
    .catch((err) => console.error(err));
}

  render() {
    this.getArtciles();
    return (
      <div>
        <Header callback={this.search} />
        <Cards />
      </div>
    );
  }
}

export default Main;
