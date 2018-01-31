import React from "react";
import Link from "gatsby-link";

const IndexPage = () => (
  <div style={{ color: `darkgrey` }}>
    <h1>Hello World!</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <img src="https://source.unsplash.com/400x200/?landscape" alt="" />
    <br />
    <div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
    <div>
      <Link to="/counter/">Counter</Link>
    </div>
  </div>
);

export default IndexPage;
