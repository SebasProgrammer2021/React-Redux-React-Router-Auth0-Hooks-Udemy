
function App() {
  let name = "Sebas"
  let saludar = () => {
    document.write("hola allá afuera")
  }

  const styles = { border: "solid", boxShadow: "2px 2px" }

  return (
    <div className="App">
      hello {name}
      <button onClick={saludar} style={styles}>saludar</button>
    </div>
  );
}

export default App;
