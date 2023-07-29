import React, { Component } from "react"
// import ComponentA from "./functionalComponents/componentA"
// import ClassComponentA from "./classComponents"
import Form from "./classComponents/WorkingWithForms"
import Container1 from "./containers/Container1"

// function App() {
//   let name = "Sebas"
//   let saludar = () => {
//     document.write("hola allá afuera")
//   }

//   const styles = { border: "solid", boxShadow: "2px 2px" }

//   return (
//     <div className="App">
//       hello {name}
//       <button onClick={saludar} style={styles}>saludar</button>
//       {React.createElement("button",{className:App},"I am a react create element node")}
//     </div>
//   );
// }

// export default App;

class App extends Component {
  state = {
    counter: 0
  }

  increment = () => {
    this.setState({ counter: 5 })
  }

  // render() {
  //   const gretting = {
  //     hello: "hola a todos"
  //   }

  //   return (
  //     <div>
  //       <button onClick={() => this.increment()}>Increment counter</button>
  //       <div>
  //         Div 1 {this.state.counter}
  //       </div>
  //       <div>
  //         Div 2 {gretting.hello}
  //       </div>
  //       <div>
  //         Div 3
  //       </div>
  //       <ComponentA name="Sebas" age={28} />
  //       <ClassComponentA color="Black" />
  //     </div>
  //   )
  // }

  //CONDITIONAL EXAMPLE
  // render() {
  //   const gretting = {
  //     hello: "hola a todos"
  //   }

  //   if (false) {
  //     return (
  //       <div>
  //         <button onClick={() => this.increment()}>Increment counter</button>
  //         <div>
  //           Div 1 {this.state.counter}
  //         </div>
  //         <div>
  //           Div 2 {gretting.hello}
  //         </div>
  //         <div>
  //           Div 3
  //         </div>
  //         <ComponentA name="Sebas" age={28} />
  //         <ClassComponentA color="Black" />
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div>
  //         else way
  //       </div>
  //     )
  //   }
  // }

  // CONDITIONAL RENDERING
  renderFunction1 = () => {
    if (true) {
      return (
        <div>
          condition1
        </div>
      )
    } else {
      <div>
        condition 2
      </div>
    }
  }

  render() {
    return (
      <div>
        React
        <div>
          DIV 1
        </div>
        <br />
        <div>
          DIV 2
        </div>
        {this.renderFunction1()}
        <Form />
        <br />
        <br />
        Testing container 1
        <Container1 />
      </div>
    )
  }
}

export default App;