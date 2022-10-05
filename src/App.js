import React, {Component} from 'react'

import AppContainer from "./Components/AppContainer"

import SignIn from "./Views/Auth/SignIn"

class App extends Component {
    constructor(props) {
        super(props);
        // this.func = this.func.bind(this);
        this.state = {}
    }

    render() {
        return (
            <AppContainer>
                <SignIn>

                </SignIn>
            </AppContainer>
        );
    }
}

export default App;
