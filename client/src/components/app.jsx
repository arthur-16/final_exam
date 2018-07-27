import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Movies from './movies';
import SingleMovie from './specificmovie';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/goodbye">Link</Link>
                    <Switch>
                        <Route exact path="/" component={Movies} />
                        <Route path="/movie/:id" component={SingleMovie} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;