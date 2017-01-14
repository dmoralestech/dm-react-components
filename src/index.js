import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var Time = () => {
    return (
        <span className="time">3h ago</span>
    );
}

var ReplyButton = () => {
    return (
        <i className="fa fa-reply reply-button"/>
    );
}

var RetweetButton = () => {
    return (
        <i className="fa fa-retweet retweet-button"/>
    );
}

var LikeButton = () => {
    return (
        <i className="fa fa-heart like-button"/>
    );
}


var MoreOptionsButton = () => {
    return (
        <i className="fa fa-ellipsis-h more-options-button"/>
    );
}


var Message = () => {
    return (
        <div className="message">
            This is less than 140 characters.
        </div>
    );
}

var NameWithHandle = () => {
    return (
        <span className="name-with-handle">
            <span className="name">Your Name</span>
            <span className="handle">@yourhandle</span>
        </span>
    );
}

var Avatar = () => {
    return (
        <img src="https://www.gravatar.com/avatar/nothing"
             className="avatar"
             alt="avatar"/>
    );
}

var Tweet = () => {
    return (
        <div className="tweet">
            <Avatar/>
            <div className="content">
                <NameWithHandle/><Time/>
                <Message/>
                <div className="buttons">
                    <ReplyButton/>
                    <RetweetButton/>
                    <LikeButton/>
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<Tweet/>, document.querySelector('#root'));
