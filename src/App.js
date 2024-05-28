import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeerCard from './BeerCard';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://api.sampleapis.com/beers/ale')
      .then(response => {
        setBeers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className='text-center py-4' style={{fontSize:"24px",fontWeight:"bold",fontFamily:"cursive"}}>Beer List</h1>

      <div style={{marginLeft:"75%",marginRight:"30%"}}><input
        type="text"
        placeholder="Search beers..."
        onChange={e => setSearchTerm(e.target.value)}
        style={{marginBottom:"80px",textAlign:"center",border:"3px solid black",fontFamily:"cursive",fontWeight:"bold"}}
       
      /></div>
      
<div className='max-w-[1320px] grid mx-auto lg:grid-cols-4 md:grid-cols-2 gap-6 px-20 '>
{
  filteredBeers && filteredBeers.map((item,index)=>
  <BeerCard beer={item}   />
  
  )
}


      </div>

    </div>
  );
};

export default App;
