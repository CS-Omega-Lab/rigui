import React, {Component} from 'react';
import "../Assets/Styles/AppContainer.css"

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-container">
                {this.props.children}
            </div>
        );
    }
}

export default AppContainer;
