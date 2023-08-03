import React, { Component } from 'react'
// import ComponentA from './functionalComponents/ComponentA.js'

// import * as ACTIONS_TYPES from '../store/actions/actions_types'
import * as ACTIONS from '../store/actions/actions'

import { connect } from 'react-redux'

class Container1 extends Component {
    render() {
        const usertext = "text 1"

        console.log(this.props);
        return (
            <div>
                <button onClick={() => {
                    console.log(this.props.stateProp1);
                    console.log(this.props.userText);
                }}>Get state</button>
                <button onClick={() => this.props.action1()}>Dispatch action 1</button>
                <button onClick={() => this.props.action2()}>Dispatch action 2</button>
                <br />
                Actions creators
                <br />
                <button onClick={() => this.props.actionCreation1()}>Execute action creator success</button>
                <button onClick={() => this.props.actionCreation2()}>Execute action creator failure</button>
                <button onClick={() => this.props.actionCreationUserInput(usertext)}>Execute action creator user input</button>
                {this.props.userText ? <h1>{this.props.userText}</h1> : null}
            </div >
        )
    }
}

// -essentially, how to get the state from redux
// -set the value to 'state'(name of reducer if more than one) '.'(name of property from reducer)
function mapStateToProps(state) {
    console.log(state, "the state");
    return {
        stateProp1: state.stateProp1,
        userText: state.userText
    }
}

// para setear el estado, similar a setState
// setea el estado pero de manera global
function mapDispatchToProps(dispatch) {
    return {
        action1: () => dispatch(ACTIONS.SUCCESS),
        action2: () => dispatch(ACTIONS.FAILURE),
        actionCreation1: () => dispatch(ACTIONS.success()),
        actionCreation2: () => dispatch(ACTIONS.failure()),
        actionCreationUserInput: (text) => dispatch(ACTIONS.userInput(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container1);
