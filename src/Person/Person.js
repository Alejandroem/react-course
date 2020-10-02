import React from 'react';

//In it's simple form a component is a function that return jsrx
const person = () => {
    // To execute javascript code it should be in curly braces
    return <p> I'm a person and I am {Math.floor(Math.random() * 30)} years old!</p>;
};

export default person;
