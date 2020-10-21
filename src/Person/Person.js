import React from 'react';

//In it's simple form a component is a function that return jsrx
const person = (props) => {
    // To execute javascript code it should be in curly braces
    return <p> I'm {props.name} a person and I am {props.age} years old!</p>;
};

export default person;
