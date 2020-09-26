import React, { Component } from "react";
import TextTruncate from "react-text-truncate";
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./Card.css";

export class Card extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="article">
          <IconButton className="fav">
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
