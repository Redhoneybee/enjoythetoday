import React from "react";
import { Helmet } from "react-helmet";

import { useSelector } from "react-redux";

// routes
import AppRouter from "./Router";

const App = () => {
  const userObj = useSelector(state => state.user)
  return (
    <>
      <Helmet>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      </Helmet>
      <AppRouter userObj={userObj} />
    </>
  );
}

export default App;