import React from "react";
import { like, dislike } from "../api";
import { VoteButton } from "./VoteButton";

export function Post(props) {
  let sum = props.likes - props.dislikes;

  return (
    <div className="post">
      <span className="post-author">{props.author}</span>
      <span className="post-content">{props.content}</span>
      <VoteButton
        id={props.id}
        direction="up"
        voteFunction={like}
        alreadyVoted={props.myVote === 1}
        refreshThread={props.refreshThread}
      />
      <VoteButton
        id={props.id}
        direction="down"
        voteFunction={dislike}
        alreadyVoted={props.myVote === -1}
        refreshThread={props.refreshThread}
      />
      {sum}
    </div>
  );
}
