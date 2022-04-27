import React from "react"
import G from "../components/Grid"
import { Button, TextField } from "@material-ui/core"



const Add = () => {

    return (
        <div style={{ paddingTop: "5%" }}>

            <G col={3} gap={30}>
                <div style={{ marginLeft: "20px" }}>
                    <div style={{ marginBottom: "60px" }}><TextField fullWidth id="outlined-basic" label="Họ và Tên" variant="outlined" /></div>
                    <div style={{ marginBottom: "60px" }}><TextField fullWidth id="outlined-basic" label="Licencse Plate" variant="outlined" /></div>
                    <div style={{ marginBottom: "60px" }}><TextField fullWidth id="outlined-basic" label="Card Number" variant="outlined" /></div>
                    <div><TextField fullWidth id="outlined-basic" label="Location" variant="outlined" /></div>




                </div>




            </G>

            <div style={{ marginTop: "110px", marginLeft: "20px" }}>
                <Button style={{ backgroundColor: "#00afff" }}>Add</Button>
            </div>
        </div>
    )
}


export default Add