import React from "react";
import "./Blogs.css";
import axios from "axios";

export default function Blogs() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/blogs")
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="blog-container">
      {blogs.map((blog) => {
        var rank = blogs.indexOf(blog) + 1;
        return (
          <div className="blog">
            <div className="title">
              <h3>
                <a
                  href="/Blog"
                  onClick={() => {
                    localStorage.setItem("name", blog.name);
                    localStorage.setItem("author", blog.author);
                    localStorage.setItem("content", blog.content);
                    localStorage.setItem("views", blog.view);
                  }}
                >
                  {blog.name}
                </a>
              </h3>
            </div>
            <div className="author">
              <h5>
                {" "}
                By <u>{blog.author}</u>
              </h5>
            </div>
            <div className="views">
              <p>Total Views</p>
              <p>{blog.view}</p>
            </div>
            <div className="ranks">
              <b>Rank : {rank}</b>
            </div>
          </div>
        );
      })}
    </div>
  );
}
