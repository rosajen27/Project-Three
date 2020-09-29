import React, { Component } from "react";
import TextTruncate from "react-text-truncate";
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DeleteIcon from '@material-ui/icons/Delete';
import "./Card.css";
import Api from "../Util/Api";

export class Card extends Component {


  save() {
    let article = {
      title: this.props.article.title,
      content: this.props.article.content,
      url: this.props.article.url,
    };

    if(this.props.article.saved !== true){
      Api.saveArticle(article)
    } else {
      Api.removeArticle(this.props.article._id);
    }
  }
  render() {
    console.log(this.props)
    let button;
    if(this.props.article.saved !== false){
      button = <DeleteIcon />
    }
    else {
    button = <FavoriteBorderIcon />
    }

    return (
      
        <div>
        <div className="article">
          <IconButton onClick={this.save.bind(this)} className="fav">
            {button}
          </IconButton>

          <div className="article__text">
            <TextTruncate
              textLength="50"
              element="h3"
              truncateText=".."
              text={this.props.article.title}
            />
            <p>{this.props.article.content}</p>

            <a className="url" href={this.props.article.url} target='_blank'>Read more</a>

          </div>
        </div>
      </div>
  
    );
  }
}

export default Card;
