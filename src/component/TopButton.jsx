import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
const TopButton = ({setQuery}) => {
    const cities=[
        {id:1,
        name:"Pune"
        },
        {id:2,
        name:"Mumbai"
        },
        {id:3,
        name:"Ahmednagar"
        },
        {id:4,
        name:"Delhi"
        },
        {id:5,
        name:"Dhule"
        },
    ]
    return ( <>
   
<Container style={{padding:"5px",display:"flex",justifyContent:"space-around"}}>
    {cities.map((city)=>(
        <Button 
        key={city.id}
        onClick={()=>setQuery({q:city.name})}
        variant="none">{city.name}</Button>
    ))
}
</Container>  
    
    </> );
}
 
export default TopButton;