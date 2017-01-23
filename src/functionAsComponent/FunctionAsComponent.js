import React, {Component} from 'react';
import ScrollPos from './ScrollPos';
import './App.css';

class FunctionAsComponent extends Component {
    render() {
        return (
            <div className="App">
                <div className="spacer"/>
                <ScrollPos>
                    {
                        position => <h1>{'Awesome Text!!!'.substr(0, position * 15) }</h1>
                    }
                </ScrollPos>

                <div className="spacer"/>
            </div>
        );
    }
}

export default FunctionAsComponent;