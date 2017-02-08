var App = React.createClass({
    getDefaultProps: function() {
        return { image: 'http://i.giphy.com/l117HrgEinjIA.gif' }
    },
    render: function() {
        return (
            <div className="FourOhFour">
                <div className="bg" style={{ backgroundImage: 'url(' + this.props.image + ')'}}></div>
                <div className="code">404</div>
            </div>
        )
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);