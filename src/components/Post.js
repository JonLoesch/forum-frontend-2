import React from "react";
import { like, cancelLike, dislike } from "../api";

export function Post(props) {
  let sum = props.likes - props.dislikes;

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
      <i
        className={[props.myVote === -1 ? "fas" : "far", "fa-thumbs-down"].join(
          " "
        )}
        onClick={e => {
          e.preventDefault();
          if (props.myVote === -1) {
            cancelLike(props.id).then(props.refreshThread);
          } else {
            dislike(props.id).then(props.refreshThread);
          }
        }}
      />
      {sum}
    </div>
  );
}
