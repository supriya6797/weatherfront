import React from 'react';
import Container from 'react-bootstrap/esm/Container';
const TimeAndLocation = ({weather: {formattedLocalTime, name, country}}) => {
    return (  <>
   
     <Container style={{padding:"6px",display:"flex",justifyContent:"space-around"}}>
<p style={{ color:"white"}}> 
  {formattedLocalTime}
</p>
  </Container>
     <Container style={{marginTop:"-4px",display:"flex",justifyContent:"space-around"}}>
<p style={{ color:"white",fontSize:"x-large"}}> {`${name}, ${country}`}</p>
  </Container>
    </>);
}
 
export default TimeAndLocation;