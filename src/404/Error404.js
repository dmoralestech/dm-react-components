import React from 'react'
import Select from 'react-select'
import Dropdown from 'react-dropdown'
import './Error404.css'

var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
    { value: 'four', label: 'Four' },
    { value: 'five', label: 'Five' }
];

const defaultOption = options[0]

function logChange(val) {
    console.log("Selected: " + val);
}


class Error404  extends React.Component {
    static defaultProps() {
        return { image: 'http://i.giphy.com/l117HrgEinjIA.gif' }
    }

    render() {
        return (
            <div>
                <Dropdown options={options}
                          onChange={this._onSelect}
                          value={defaultOption}
                          placeholder="Select an option"
                />

                {/*<Select*/}
                    {/*name="form-field-name"*/}
                    {/*value="one"*/}
                    {/*options={options}*/}
                    {/*onChange={logChange}*/}
                {/*/>*/}
            </div>
        )
    }

    renderOld() {
        return (
        <div className="FourOhFour">
            <div className="bg" style={{ backgroundImage: 'url(' + this.props.image + ')'}}></div>
            <div className="code">404</div>
        </div>
        )
    }
}

export default Error404