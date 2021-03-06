import React from 'react';

const Time = () => {
    return (
        <span className="time">3h ago</span>
    );
}

const ReplyButton = () => {
    return (
        <i className="fa fa-reply reply-button"/>
    );
}

const RetweetButton = () => {
    return (
        <i className="fa fa-retweet retweet-button"/>
    );
}

const LikeButton = () => {
    return (
        <i className="fa fa-heart like-button"/>
    );
}


const MoreOptionsButton = () => {
    return (
        <i className="fa fa-ellipsis-h more-options-button"/>
    );
}


const Message = () => {
    return (
        <div className="message">
            This is less than 140 characters.
        </div>
    );
}

const NameWithHandle = () => {
    return (
        <span className="name-with-handle">
            <span className="name">Your Name</span>
            <span className="handle">@yourhandle</span>
        </span>
    );
}

const Avatar = () => {
    return (
        <img src="https://www.gravatar.com/avatar/nothing"
             className="avatar"
             alt="avatar"/>
    );
}

const Tweet = () => {
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

export default Tweet;