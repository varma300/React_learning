import React, { Component } from 'react'

class LifecyleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nmae: 'Rahul'
        }
        console.log('LifecycleB constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDErivedFromProps');
        return null
    }


    componentDidUpdate() {
        console.log('lifecycleB componentDidMount');
    }

    render() {
        console.log('LifecycleB render');
        return (
            <div>LifecyleB</div>
        )
    }
}

export default LifecyleB