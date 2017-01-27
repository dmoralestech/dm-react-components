import React from 'react'

import './ImageProfilePic.css'

var ImageProfilePic = React.createClass({
    getDefaultProps: function() {
        return({
            person: {
                name: 'Darwin Morales',
                biography: 'Developer. Father of 2',
            },
            image: 'http://static1.squarespace.com/static/55acc005e4b098e615cd80e2/t/57b057398419c2c454f09924/1471025851733/',
            quote: {
                content: 'Don\'t be comfortable',
                source: 'Anonymous'
            }

        })
    },
    render: function() {
        return(
            <div className="App">
                <Image src={this.props.image} />
                <Profile person={this.props.person} quote={this.props.quote} />
            </div>
        );
    }
});

var Image = React.createClass({
    render: function() {
        return (
            <div className="Image" style={{backgroundImage: 'url(' + this.props.src + ')'}}></div>
        );
    }
});

var Profile = React.createClass({
    render: function() {
        return (
            <div className="Profile">
                <h1 className="Name">{this.props.person.name}</h1>
                <p className="Bio">{this.props.person.biography}</p>
                <div className="Quote">
                    <blockquote>&ldquo; {this.props.quote.content} &rdquo;</blockquote>
                    <div className="byline">&mdash; {this.props.quote.source}</div>
                </div>

            </div>
        );
    }
});

export default ImageProfilePic