import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./Navigation";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Game01 from "../routes/Game01";

const AppRouter = ({ userObj }) => {
    return (
        <Router>
            <Navigation />
            <Switch>
                <div style={{
                    width: "100%",
                    maxWidth: 980,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    {userObj !== "" ?
                        <>
                            <Route exact path="/">
                                <Home userObj={userObj} />
                            </Route>
                            <Route exact path="/game01">
                                <Game01 userObj={userObj} />
                            </Route>
                        </>
                        :
                        <Route exact path="/">
                            <Auth />
                        </Route>
                    }
                </div>
            </Switch>
        </Router>
    );
}

export default AppRouter;