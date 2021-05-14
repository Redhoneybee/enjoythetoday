import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../routes/Home";
import Auth from "../routes/Auth";

const AppRouter = ({ userObj }) => {
    return (
        <Router>
            <Switch>
                <div style={{
                    width: "100%",
                    maxWidth: 980,
                    display: "flex",
                    justifyContent: "center"
                }}>
                    {userObj ?
                        <>
                            <Route exact path="/">
                                <Home userObj={userObj} />
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