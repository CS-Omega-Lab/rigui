import React, {Component} from 'react'

import AppContainer from "./Components/AppContainer"
import "./Assets/Styles/App.css"

import Intro from "./Views/Intro"



class App extends Component {
    constructor(props) {
        super(props);
        // this.func = this.func.bind(this);
        this.state = {}
    }

    render() {
        return (
            <AppContainer>
               <Intro />
            </AppContainer>
        );
    }
}

export default App;
