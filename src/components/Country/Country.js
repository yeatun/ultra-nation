import React from 'react';

const Country = (props) => {
   const handleAddCountry = props.handleAddCountry;
    return (
        <div >
            <h4>This is  {props.country.name}</h4>
            
            <img style ={{height:'50px'}} src ={props.country.flag} alt =""/>
            <p>population :{props.country.population}</p>
            <button onClick={()=>handleAddCountry(props.country)}>add country</button>
        </div>
    )
};

export default Country;