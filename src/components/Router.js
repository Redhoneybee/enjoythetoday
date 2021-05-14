import React, { useState } from "react";
import { HashRouter as Router, Switch, Route, HashRouter } from "react-router-dom";


import Home from "../routes/Home";
import Auth from "../routes/Auth";

const AppRouter = () => {
    const [user, setUser] = useState(null);
    return (
        <Router>
            <Switch>
                <div style={{
                    width: "100%",
                    maxWidth: 980,
                    display: "flex",
                    justifyContent: "center"
                }}>
                    {user ?
                        <>
                            <Route exact path="/">
                                <Home />
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