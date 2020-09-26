import React, { Component } from "react";
import Header from "../Componets/Header";
import Card from "../Componets/Card";
import Api from "../Util/Api";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      articles: [],
    };
  }

  search = (data) => {
    this.setState({ search: data }, () => {
      this.searchArticles();
    });
  };

  componentDidMount() {
    this.getArtciles();
  }

  getArtciles() {
    Api.getArticle()
      .then((res) => {
        this.setState({
          articles: res.data.articles.map((article) =>
            this.makeArticle(article)
          ),
        });
      })
      .catch((err) => console.error(err));
  }

  searchArticles() {
    Api.searchArticle(this.state.search)
      .then((res) => {
        this.setState({
          articles: res.data.articles.map((article) =>
            this.makeArticle(article)
          ),
        });
      })
      .catch((err) => console.error(err));
  }

  makeArticle = (article) => {
    console.log("test");
    return {
      title: article.title,
      content: article.content,
    };
  };

  render() {
    console.log(this.state.articles);
    let articles = this.state.articles;
    return (
      <div>
        <Header callBack={this.search} />
        <div className="articles">
          {articles.map((article) => (
            <Card article={article} />
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
