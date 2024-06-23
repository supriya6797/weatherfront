import React from 'react';
import { FaThermometerEmpty } from "react-icons/fa"
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GiSunrise,GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp , MdKeyboardArrowDown} from "react-icons/md";
import Container from 'react-bootstrap/esm/Container';
const TempAndDetails = ({weather:{
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
   sunrise,
   sunset,
    speed,
 details,
    icon,
    
},
units
}) => {

const verticalDetails = [
    {id:1,
        Icon:FaThermometerEmpty,
        title:"Real Feel",
        value:`${feels_like.toFixed()}°`,

    },
    {id:2,
        Icon:BiSolidDropletHalf,
        title:"Humidity",
        value:`${humidity.toFixed()}%`,

    },
    {id:3,
        Icon:FiWind,
        title:"Wind",
        value:`${speed.toFixed()} ${units === 'metric'  ? 'km/h': 'm/s'}`,

    },
];


const horizontalDetails = [
    {id:1,
        Icon:GiSunrise,
        title:"Sunrise",
        value:sunrise,

    },
    {id:2,
        Icon:GiSunset,
        title:"Sunset",
        value:sunset,

    },
    {id:3,
        Icon:MdKeyboardArrowUp,
        title:"High",
        value:`${temp_max.toFixed()}°`,

    },
    {id:4,
        Icon:MdKeyboardArrowDown,
        title:"Low",
        value:`${temp_min.toFixed()}°`,

    },
]


    return ( <>
     <Container style={{display:"flex",justifyContent:"center",marginTop:"-7px"}}>
     

        <p style={{ color:"cyan",textAlign:"center"}}>{details}</p>
      
     </Container>
     <Container
      style={{fontSize:"x-large"}}
      >
     <Row style={{textAlign:"center"}}>
        <Col> <img
        style={{ marginTop:"-30PX",paddingBottom:"0px"}}
         src={icon} alt="icon"/></Col>
        <Col style={{ color:"white"}}>{`${temp.toFixed()}°`}</Col>
        <Col>{
            verticalDetails.map(({id,Icon,title,value})=>(
                <div key={id}  style={{ color:"white",fontSize:"0.6em"}}><Icon />
                         {`${title}: `}
                 <span style={{ fontSize:"0.8em"}}>{value}</span>
                 </div>  
            ))
        }

         </Col>
      </Row>

 <Container style={{padding:"2px",display:"flex",justifyContent:"space-around"}}>
   
    {
        horizontalDetails.map(({id,Icon,title,value})=>(
            <span key={id}   style={{ color:"white",fontSize:"0.6em"}}>
                <Icon style={{fontSize:"30px"}}/>{`${title}: `}
                <span style={{ fontSize:"0.9em"}}>{value}</span>
            </span>
        ))
    }
   
 </Container>
</Container>

 
    </> );
}
 
export default TempAndDetails;