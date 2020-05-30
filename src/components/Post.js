import React from "react";
import { like, cancelLike } from "../api";

export function Post(props) {
  let sum = props.likes;

  return (
    <div className="post">
      <span className="post-author">{props.author}</span>
      <span className="post-content">{props.content}</span>
      <i
        className={[props.myVote === 1 ? "fas" : "far", "fa-thumbs-up"].join(
          " "
        )}
        onClick={e => {
          e.preventDefault();
          if (props.myVote === 1) {
            cancelLike(props.id).then(props.refreshThread);
          } else {
            like(props.id).then(props.refreshThread);
          }
        }}
      />
      {props.likes}
    </div>
  );
}
