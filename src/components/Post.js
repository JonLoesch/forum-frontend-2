import React from "react";
import { like, cancelLike, dislike } from "../api";

export function Post(props) {
  let sum = props.likes - props.dislikes;

  var thumbsUpButton;
  if (props.myVote === 1) {
    thumbsUpButton = (
      <i
        className="fas fa-thumbs-up"
        onClick={e => {
          e.preventDefault();
          cancelLike(props.id).then(props.refreshThread);
        }}
      />
    );
  } else {
    thumbsUpButton = (
      <i
        className="far fa-thumbs-up"
        onClick={e => {
          e.preventDefault();
          like(props.id).then(props.refreshThread);
        }}
      />
    );
  }
  var thumbsDownButton;
  if (props.myVote === -1) {
    thumbsDownButton = (
      <i
        className="fas fa-thumbs-down"
        onClick={e => {
          e.preventDefault();
          cancelLike(props.id).then(props.refreshThread);
        }}
      />
    );
  } else {
    thumbsDownButton = (
      <i
        className="far fa-thumbs-down"
        onClick={e => {
          e.preventDefault();
          dislike(props.id).then(props.refreshThread);
        }}
      />
    );
  }

  return (
    <div className="post">
      <span className="post-author">{props.author}</span>
      <span className="post-content">{props.content}</span>
      {thumbsUpButton}
      {thumbsDownButton}
      {sum}
    </div>
  );
}
