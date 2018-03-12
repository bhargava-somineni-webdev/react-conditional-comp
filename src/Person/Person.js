import React from 'react';
import './Person.css';
import Radium from 'radium';

const Person = (props) => {
    //in order to use the media queries inline, we need Radium
    //we also need to wrap our App inside <StyleRoot></StyleRoot>
    //Look into App.js for StyleRoot imported from Radium
    //We do not need StyleRoot if we are just using pseduo selectors like hover
    let style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <div className="person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age}</p>
            <p>{props.children}</p>
            {/* any content passed in between <Person> and </Person> accessed using {props.children}
            Eg: <Person> My hobbies: Videogames</Person> 
            Note: My hobbies: Videogames is the child content
            of Person component and accessed using {props.children}*/}
            <input onChange={props.change} value={props.name} />
        </div>
    );
}

export default Radium(Person);