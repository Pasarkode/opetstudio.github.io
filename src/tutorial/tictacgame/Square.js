import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
class Square extends Component {

    render() {
        return (
            <Button bsStyle="info" bsSize="small" className="square" onClick={() => this.props.onClick()}>
                {this.props.value || ".."}
            </Button>
        );
    }
}
export default Square;
