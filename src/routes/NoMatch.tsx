import React from "react";
import { Link } from "react-router-dom";

function NoMatch({ homePath }: { homePath: string }): JSX.Element {
  return (
    <>
      <h1>Oops!</h1>
      <h2>Nothing to see here.. 💧</h2>
      <p>
        <Link to={homePath}>Go to the home page</Link>
      </p>
    </>
  );
}

export default NoMatch;
