import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
function App() {
   const [countries,setCountries]= useState([]);
   const [cart ,setCart] = useState([])
   useEffect(()=>{
     fetch ('https://restcountries.eu/rest/v2/all')
     .then (res =>res.json() )
     .then(data => {setCountries(data)
     const name= data.map(country=> country.name)
    })
   },[])
   const handleAddCountry =(country) =>{const newCart = [...cart,country];
  setCart(newCart)}
  return (
    <div className="App">
      <h1>country loaded : {countries.length}</h1>
      <h3>added: {cart.length}</h3>
      <ul>
      {
  
        countries.map(country => <Country country ={country} handleAddCountry={handleAddCountry} key ={country.alpha3Code}></Country>)
      }
      </ul>
      <header>
        
        
      </header>
    </div>
  );
}

export default App;
