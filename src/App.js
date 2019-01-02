import React, {Component} from 'react';

import {BrowserRouter as Router, Link, Route} from "react-router-dom";

function testRoute() {
    return (
        <div>
            This is Router Content
        </div>
    )
}

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Link to="/test">Test</Link>
                    <Route path="/test" component={testRoute}/>
                </div>
            </Router>

        );
    }
}

export default App;
