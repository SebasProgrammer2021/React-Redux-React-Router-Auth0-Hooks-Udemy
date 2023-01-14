import React, { Component } from "react";

class ClassComponentA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stateprop1: "Our initial state",
            stateprop2: 5
        }
    }

    //wrong way to do it
    // changeState = () => {
    //     this.state.stateprop1 = "niu state";
    // }

    //correct way to do it
    // changeState = () => {
    //     this.setState({ stateprop1: "niu state" });
    // }

    //updating state with the previous state
    // changeState = () => {
    //     this.setState((prevState, props) => ({ stateprop2: prevState.stateprop2 + 1 }));
    // }

    //updating state with the previous state, way 2
    changeState = () => {
        this.setState({ stateprop2: this.state.stateprop2 + 1 });
    }

    render() {
        return (
            <div>
                ClassComponentA {this.props.color} <br />
                tales {this.state.stateprop2}
                <div>
                    <button type="button" onClick={() => this.changeState()}>change state</button>
                </div>
            </div>
        )
    }
}

export default ClassComponentA;