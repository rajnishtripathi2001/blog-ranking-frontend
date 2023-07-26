import React from "react";
import "./Blogpage.css";

export default function Blogpage() {
  var name = localStorage.getItem("name");
  var author = localStorage.getItem("author");
  var content = localStorage.getItem("content");
  var views = localStorage.getItem("views");

  if (name === null || author === null || content === null || views === null) {
    window.location.href = "/";
  }
  return (
    <div className="blogpage">
      <div className="title-container">
        <p id="path">
          Home {">"} {name}
        </p>
        <h1 className="title">{name}</h1>

        <div className="disc">
          <p className="author">By {author}</p>
          <p className="views">{views} views</p>
        </div>
        <div className="blank"></div>
        <hr />
        <p>{content}</p>
      </div>
    </div>
  );
}
