import React from "react"
import G from "../components/Grid"
import { Button, TextField } from "@material-ui/core"

import face from "../components/icons/face.webp"
import plates from "../components/icons/plates1.jpg"


const Add = () =>{

    return (
        <div style ={{paddingTop:"5%"}}>
            
                <G col={3}  gap={30}>
                    <div style ={{marginLeft:"20px"}}>
                        <div style={{marginBottom:"60px"}}><TextField fullWidth id="outlined-basic" label="Họ và Tên" variant="outlined"/></div>
                        <div style={{marginBottom:"60px"}}><TextField fullWidth id="outlined-basic" label="Licencse Plate" variant="outlined"/></div>
                        <div style={{marginBottom:"60px"}}><TextField fullWidth id="outlined-basic" label="Card Number" variant="outlined"/></div>
                        <div><TextField fullWidth id="outlined-basic" label="Location" variant="outlined"/></div>
                        
                       

                        
                    </div>

                    <div style={{backgroundColor:"#a7ca00", width:"100%",height:"100%" ,}} >
                    <div style={{backgroundColor:"blue", width:"95%",height:"95%",margin:"auto",marginTop:"10px"}}>
                        <img src={face} style ={{width:"100%",height:"100%"}} />
                    </div>
                    <div style={{textAlign:"center", marginTop:"30px"}}>
                        <Button  style={{backgroundColor:"#25333f", color:"white"}}>taken Face</Button>
                    </div>
                    </div>
                    <div style={{backgroundColor:"#a7caf6", width:"100%",height:"100%" ,}} >
                    <div style={{backgroundColor:"blue", width:"95%",height:"95%",margin:"auto",marginTop:"10px"}}>
                    <img src={plates} style ={{width:"100%",height:"100%"}} />
                    </div>
                    <div style={{textAlign:"center",marginTop:"30px"}}>
                        <Button style={{backgroundColor:"#25333f", color:"white"}}>taken Plates</Button>
                    </div>
                    </div>

                </G>

                <div style ={{marginTop:"110px",marginLeft:"20px"}}>
                    <Button style={{backgroundColor:"#00afff"}}>Add</Button>
                </div>
        </div>
    )
}


export default Add