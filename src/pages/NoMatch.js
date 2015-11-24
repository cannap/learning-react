import React,{Component} from 'react'
import {render} from 'react-dom'

class NoMatch extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="notfound">404</div>
        );
    }
}

export default NoMatch;
