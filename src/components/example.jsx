import React, { Component } from 'react';

//stateless functional component
//only props, no state, no events
const ExampleFunctional = () => {
    return(
        <h1>Example - Functional Component</h1>
    )
}

//stateless functional component
//with props
const ExampleFunctional2 = (props) => {
    return(
        <h1>Example - Functional Component - {props.TitleValue}</h1>
    )
}

//Destructuring Arguments
const ExampleFunctionalComponent = ({ totalValue, AnotherValue }) => {
    return (  
        <h1>{totalValue} and {AnotherValue}</h1>
    );
}
 
//class component destructuring arguments
class AnotherComponent extends Component {    
    render() { 
        const { Hello1, Hello2 } = this.props;
        return ( 
            <h1>Hello World! {Hello1} and {Hello2}</h1>
            //rather than 
            //<h1>Hello World! {this.props.Hello1} and {this.props.Hello2}</h1>
         );
    }
}
 



//Class Component
class Example extends Component {    
    render() { 
        return ( 
            <h1>
                Example
            </h1>
         );
    }
}
 
export default Example;