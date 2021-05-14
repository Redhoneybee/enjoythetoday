import React from "react";

import { useSelector } from "react-redux";

// routes
import Loading from "./Loading";
import AppRouter from "./Router";

const App = () => {
  const userObj = useSelector(state => state.user)
  return (
    <>
      <AppRouter userObj={userObj} />
    </>
  );
}

export default App;