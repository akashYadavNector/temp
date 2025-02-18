import React from "react";
// import { useRouteError } from "react-router-dom";

const Error = () => {
  // const error = useRouteError();
  console.log('eorrrrrrrr js is loggging');
  
  return (
    <div role="alert">
      <h1>Sorry, an unexpected error has occurred.</h1>
      {/* <p>{error.statusText || error.message}</p> */}
    </div>
  );
};

export default Error;
