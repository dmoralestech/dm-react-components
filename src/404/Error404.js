import React from 'react'
import Select from 'react-select'

import './Error404.css'

var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
    { value: 'four', label: 'Four' },
    { value: 'five', label: 'Five' }
];

function logChange(val) {
    console.log("Selected: " + val);
}


var Error404 = React.createClass({
    getDefaultProps: function() {
        return { image: 'http://i.giphy.com/l117HrgEinjIA.gif' }
    },
    renderTest: function() {
        return (
            <div>
                <Select
                    name="form-field-name"
                    value="one"
                    options={options}
                    onChange={logChange}
                />
            </div>
        )
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

export default Error404