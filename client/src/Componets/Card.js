import React, { Component } from "react";
import TextTruncate from "react-text-truncate";
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./Card.css";
import Api from '../Util/Api'

export class Card extends Component {

  save() {

    let article = {
      title: this.props.article.title,
      content: this.props.article.content
    }
    Api.saveArticle(article)
  }
  render() {
    return (
      <div>
        <div className="article">
          <IconButton onClick={this.save.bind(this)} className="fav">
            <FavoriteBorderIcon />
          </IconButton>
          <div className="article__text">
            <TextTruncate
              textLength="50"
              element="h3"
              truncateText=".."
              text={this.props.article.title}
            />

            <TextTruncate
              textLength="20000"
              element="p"
              truncateText="....."
              text={this.props.article.content}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
