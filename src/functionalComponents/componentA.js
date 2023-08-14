import React from 'react'
import { useParams } from 'react-router-dom';

export const ComponentA = () => {
    let params = useParams();
    console.log(params);
    return (
        <div>Hello i am ComponentA</div>
    )
}
