import React from "react"
import G from "../components/Grid"
import { Button } from "@material-ui/core"

import face from "../components/icons/face.webp"
import plates2 from "../components/icons/plates2.jpg"


const Streaming = () =>{

    return (
        <div style ={{paddingTop:"5%"}}>
            
                <G col={2}  gap={30}>
                    

                    <div style={{backgroundColor:"#25333f", width:"100%",height:"100%" ,}} >
                    <div style={{backgroundColor:"blue", width:"98%",height:"97%",margin:"auto",marginTop:"6px"}}>
                        <img src={face} style ={{width:"100%",height:"100%"}} />
                    </div>
                    <div style={{textAlign:"center", marginTop:"30px"}}>
                        <p  style={{ width:"200px", textAlign:"center", margin:"auto"}}>view camera face</p>
                    </div>
                    </div>
                    <div style={{backgroundColor:"#25333f", width:"100%",height:"100%" ,}} >
                    <div style={{backgroundColor:"blue", width:"98%",height:"97%",margin:"auto",marginTop:"6px"}}>
                    <img src={plates2} style ={{width:"100%",height:"100%"}} />
                    </div>
                    <div style={{textAlign:"center",marginTop:"30px"}}>
                    <p  style={{ width:"200px", textAlign:"center", margin:"auto"}}>view camera plate</p>
                    </div>
                    </div>

                </G>

               
        </div>
    )
}


export default Streaming