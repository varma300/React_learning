import React, { Component } from 'react'
import LifecyleB from './LifecycleB';

class LifecyleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nmae: 'Rahul'
        }
        console.log('LifecycleA constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDErivedFromProps');
        return null
    }


    componentDidUpdate() {
        console.log('lifecycleA componentDidMount');
    }

    render() {
        console.log('LifecycleA render');
        return (
            <div>
                <div>LifecyleA</div>
                <LifecyleB />
            </div>
        )
    }
}

export default LifecyleA