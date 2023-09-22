import React from 'react'

const Callback = (props) => {
    console.log(props, "afuera..")

    return (
        <div>
            Callback cpnt
            {console.log(props, "propsss..")}
        </div>
    )
}

export default Callback