import React from 'react';
import { suspendable } from "./suspendable";
import sleep from "sleep-promise";

const post = suspendable(fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(sleep(2000))
  .then(result => result.json()))

function Card() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{post.read().title}</h5>
        <p className="card-text">{post.read().body}</p>
      </div>
    </div>
  );
}

export default Card;
