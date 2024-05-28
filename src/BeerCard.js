import React from 'react';

const BeerCard = ({ beer }) => {
  return (
    <div className='text-center shadow-lg'> 

    <div className='overflow-hidden'>
     <img  src={beer.image} alt={beer.name} style={{minHeight:"150px"}} className='mx-auto'      />
     <h1 style={{fontSize:"14px",fontFamily:"cursive",fontWeight:"bold",marginTop:"15px",marginBottom:"5px"}}>{beer.name}</h1>
     <h1 style={{fontSize:"14px",fontFamily:"cursive",fontWeight:"bold",marginTop:"15px",marginBottom:"5px",textAlign:"right",marginRight:"5px"}}>Price ~ {beer.price}</h1>
    </div>
 
    </div>
  );
};

export default BeerCard;
