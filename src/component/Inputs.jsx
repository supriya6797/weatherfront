import React, { useState } from 'react';
import { BiSearch } from "react-icons/bi";
import Nav from 'react-bootstrap/Nav';
import { BiCurrentLocation } from "react-icons/bi";
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
const Inputs = ({setQuery,setUnits}) => {
    const [city,setCity]=useState('');
    const handleSearchClick=()=>{
        if(city !== "") setQuery({q: city});
    }
    const handleLocationClick = ()=>{
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{
                const {latitude,longitude} = position.coords 
                setQuery({lat: latitude, lon: longitude})
            })
        }
    }
    return (<>
    <Container style={{display:"flex",justifyContent:"center"}}>
<div>
    <input style={{ width:"20vw",textAlign:"center"}} 
    onChange={(e)=> setCity(e.currentTarget.value)}
    type='text' placeholder='Search by City..'/>
    <BiSearch 
    onClick={handleSearchClick}
     style={{ fontSize:"30px",cursor:"pointer",transition:"ease-in-out",hover:"scale(125)",marginLeft:"-30px",color:"black"}}/>
    <BiCurrentLocation 
    onClick={handleLocationClick}
    style={{ fontSize:"30px",cursor:"pointer",transition:"ease-in-out",hover:"scale(125)",marginRight:"2px",color:"white",marginLeft:"3px",marginTop:"-7px"}}/>
    
     <Button style={{marginLeft:"10px"}}
     onClick={()=>{
        setUnits("metric")
     }}
     >°C</Button>
    <span style={{color:"white"}}>|</span>
     <Button
     onClick={()=> setUnits("imperial")}>°F</Button>
   
</div>



    </Container>
    </>  );
}
 
export default Inputs;