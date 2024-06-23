import React from 'react';

import Container from 'react-bootstrap/esm/Container';
const Forecast = ({ title, data }) => {
    return ( 
         <>
<Container style={{color:"white",fontSize:"1.2em",paddingBottom:"2px"}}>
 {title}</Container>
<Container fluid style={{padding:"3px",display:"flex",justifyContent:"center",flexDirection:"row",marginTop:"-6px",borderTop:"1px solid white"}}>
{ data.map(( d, index)=>(
                <div key={index} style={{paddingRight:"10px"}}>
                    <p style={{ color:"white",marginTop:"-10px",marginLeft:"10px"}}>{d.title}</p>
                    <img 
                     style={{marginLeft:"-28px",marginTop:"-34px"}}
                    src={d.icon}/>
                    <p style={{ color:"white",marginTop:"-10px",marginLeft:"10px",marginBottom:"3px"}}>{`${d.temp}°`}</p>
                </div>  )) }

      </Container>



    </>);
}
 
export default Forecast;