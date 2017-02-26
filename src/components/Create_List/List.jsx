import React, {Component} from 'react';

export default class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {name, key, onToggle, id} = this.props;
        return (
            <div className="list-component">
                <input type="checkbox" key={key} onChange={function() {
                    onToggle(id);
                }}/>
                <label htmlFor={key}>{name}</label>
            </div>

        )
    }
}
