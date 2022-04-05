import React from "react";
import Blog from "./Blog.jsx";
import Vlog from "./Vlog.jsx";
import { Route, Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <h1>Main</h1>
      <ul>
        <li>
          {" "}
          <Link to={"/main/blog"}>Blog</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to={"/main/vlog"}>Vlog</Link>{" "}
        </li>
      </ul>

      <hr />

      <Route path={"/main/blog"}>
        {" "}
        <Blog />{" "}
      </Route>
      <Route path={"/main/vlog"}>
        {" "}
        <Vlog />{" "}
      </Route>
    </div>
  );
}
export default Main;
