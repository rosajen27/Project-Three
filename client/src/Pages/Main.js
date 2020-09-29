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
    this.getArticiles();
  }

  getArticiles() {
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
    console.log("make")
    return {
      title: article.title,
      content: article.description,
      url: article.url,
      _id: article._id,
      saved: false,
    };
  };

  saveArticle = (article) => {
    console.log("save")
    return {
      title: article.title,
      content: article.content,
      url: article.url,
      _id: article._id,
      saved: true,
    };
  };

  fav() {
    Api.getSaved().then((res) => {
      this.setState({
        articles: res.data.map((article) => this.saveArticle(article)),
      });
    });
  }

  render() {
    let articles = this.state.articles;
    return (
      <div>
        <Header
          callBack={this.search}
          home={this.getArticiles.bind(this)}
          fav={this.fav.bind(this)}
        />
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
