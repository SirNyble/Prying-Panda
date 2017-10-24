import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";

// The Main component renders one of the provided
// Routes (provided that one matches).
class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    {/* <Route path='/roster' component={Roster}/>
                    <Route path='/schedule' component={Schedule}/> */}
                </Switch>
            </main>
        );
    }
}

export default Main;