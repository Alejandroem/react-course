import React from 'react';

//In it's simple form a component is a function that return jsrx
const person = (props) => {
    // To execute javascript code it should be in curly braces
    return (
    <div>
        <p> I'm {props.name} a person and I am {props.age} years old!</p>
        <p>{props.children}</p>
    </div>
    )
};

export default person;
