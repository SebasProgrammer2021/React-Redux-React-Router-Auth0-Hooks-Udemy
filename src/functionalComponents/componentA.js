const ComponentA = ({ name, age }) => (
    // way 2
    // const ComponentA = (props) => (

    <div>
        hello i am c a {name} age {age}
    </div>
    // hello i am c a {props.name} age {props.age}

)

export default ComponentA;