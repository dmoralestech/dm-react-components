import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var Message = React.createClass({
    render: function() {
        return (
            <div className="message">
                This is less than 140 characters.
            </div>
        );
    }
});
var NameWithHandle = React.createClass({
    render: function() {
        return (
            <span className="name-with-handle">
<span className="name">Your Name</span>
<span className="handle">@yourhandle</span>
</span>
        );
    }
});

var Avatar = React.createClass({
    render: function() {
        return (
            <img src="https://www.gravatar.com/avatar/nothing"
                 className="avatar"
                 alt="avatar" />
        );
    }
});

var Tweet = React.createClass({
    render: function() {
        return (
            <div className="tweet">
                <Avatar/>
                <div className="content">
                    <NameWithHandle/>
                    <Message/>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<Tweet/>, document.querySelector('#root'));
