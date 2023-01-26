import { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    state = {
        name: ""
    }

    // MODERN FORM
    // handleChange = (e) => {
    //     this.setState({ name: e.target.value })
    // }
 
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(this.state.name);
    // }

    // LEGACY FORM
    handleChange(e) {
        this.setState({ name: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.name);
    }


    render() {
        return (
            <div>
                {this.state.name}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;