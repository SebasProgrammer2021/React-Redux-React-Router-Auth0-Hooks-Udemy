import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    state = {
        nums:
            [
                { id: 1 },
                { id: 2 },
                { id: 3 }
            ]
    }

    render() {
        return (
            <div>
                <Link to='/' style={{ padding: "1rem" }}>
                    Home
                </Link>
                {this.state.nums.map((num) => (
                    <Link key={num.id} to={`/component${num.id}`} style={{ padding: "1rem" }}>
                        Component-{num.id}
                    </Link>
                ))}
                {/* <Link to='/componentA' style={{ padding: "1rem" }}>
                    ComponentA
                </Link>
                <Link to='/componentB' style={{ padding: "1rem" }}>
                    ComponentB
                </Link>
                <Link to='/componentC' style={{ padding: "1rem" }}>
                    ComponentC
                </Link> */}
            </div>
        );
    }
}

export default Header;