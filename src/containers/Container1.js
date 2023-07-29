import React, { Component } from 'react'
// import ComponentA from './functionalComponents/ComponentA.js'

// import * as ACTIONS_TYPES from '../store/actions/actions_types'
import * as ACTIONS from '../store/actions/actions'

import { connect } from 'react-redux'

class Container1 extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <button onClick={() => console.log(this.props.stateProp1)}>Get state</button>
                <button onClick={() => this.props.action1()}>Dispatch action 1</button>
                <button onClick={() => this.props.action2()}>Dispatch action 2</button>
            </div >
        )
    }
}

// -essentially, how to get the state from redux
// -set the value to 'state'(name of reducer if more than one) '.'(name of property from reducer)
function mapStateToProps(state) {
    return {
        stateProp1: state.stateProp1
    }
}

// para setear el estado, similar a setState
// setea el estado pero de manera global
function mapDispatchToProps(dispatch) {
    return {
        action1: () => dispatch(ACTIONS.SUCCESS),
        action2: () => dispatch(ACTIONS.FAILURE)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container1);
