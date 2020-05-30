import React from "react";
import { cancelLike } from "../api";

export function VoteButton(props) {
  return (
    <i
      className={`${props.alreadyVoted ? "fas" : "far"} ${
        props.direction === "up" ? "fa-thumbs-up" : "fa-thumbs-down"
      }`}
      onClick={handleClick}
    />
  );

  function handleClick(e) {
      e.preventDefault();
      const apiMethod = (props.alreadyVoted ? cancelLike : props.voteFunction);
      apiMethod(props.id).then(props.refreshThread);
  }
}
