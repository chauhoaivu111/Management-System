import Helmet from "../components/Helmet";
import Grid from "../components/Grid"
import { Button, Paper, Typography } from "@material-ui/core";
import iconlogon from "../components/icons/login.jpg"
import TextField from '@material-ui/core/TextField';
import { Box } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// const styles = {
//       paperContainer: {
//           backgroundImage: `url(${ttu_main})`,
            
//       },

      
//   };



const Register = (props) => {

      const formik = useFormik({
            initialValues: {
                  username: "",
                        Email: "",
                  password: "",
                  confirm_password: "",
            },

            validationSchema: Yup.object({
                  username: Yup.string()
                  .min(8, "Minimum 8 characters")
                  .required("required!"),
                  Email: Yup.string().email("Invalid email format").required("required!"),
                  password: Yup.string()
                  .min(8, "Minimum 8 characters")
                  .required("required!"),
                  confirm_password: Yup.string()
                  .oneOf([Yup.ref("password")], "Password's not match")
                  .required("required!"),
            })

      });

      return (
           
            <Paper  className="container-fluid homepage-bgimage" style={{height: "792px"}} >
                  <Helmet title="Login page">
                        
                        <div style={{margin: "0%"}}>

                           

            
                              <Box style={{justifyContent: "center", display: "flex"}}>
                                    <Paper  style={{marginTop: "5%", backgroundColor: 'white', height: "640px", width: "30%", borderRadius: "10px"}}> 
                                          <div>                       
                                                      <Typography style={{textAlign: "center", marginTop: "15%", fontSize:"30px", marginBottom:"1%", color: "black",fontWeight: "bold"}} >Create an account</Typography>
                                                      <Typography style={{textAlign: "center", marginTop: "1%", fontSize:"10px", marginBottom:"5%", color: "black"}} >_________________________________________________</Typography>                                         
                                          </div>

                                          <div style={{textAlign: "center"}} >

                                                <form onSubmit={formik.handleSubmit}>

                                                <TextField  id="fullname"
                                                      label="Full Name"
                                                      // defaultValue="Hello World"
                                                      // helperText="Incorrect entry." 
                                                      placeholder="Typing Your Name"
                                                      variant = "outlined"
                                                      style={{width:"260px", marginTop: "5%" }}
                                                      type = "username"
                                                      name = "username"
                                                      value={formik.values.username}
                                                      onChange = {formik.handleChange}
                                                      error = {formik.errors.username && formik.touched.username}
                                                ></TextField>

                                                {formik.errors.username && formik.touched.username && (<p style={{color: "Red", textAlign: "left"}}>{formik.errors.username}</p>)}


                                                <TextField  id="email"
                                                      label="Email"
                                                      // defaultValue="Hello World"
                                                      // helperText="Incorrect entry." 
                                                      placeholder="Typing Your Email"
                                                      variant = "outlined"
                                                      style={{width:"260px", marginTop: "5%" }}
                                                      type = "Email"
                                                      name = "Email"

                                                      value={formik.values.Email}
                                                      onChange = {formik.handleChange}
                                                      error = {formik.errors.Email && formik.touched.Email}

                                                ></TextField>
                                                
                                                {formik.errors.Email && formik.touched.Email && (<p style={{color: "Red", textAlign: "left"}}>{formik.errors.Email}</p>)}
                                                      
                                                <TextField
                                                      label="Password"
                                                          
                                                      // defaultValue="Hello World"
                                                      // helperText="Incorrect entry." 
                                                      placeholder="Typing Your Password"
                                                      variant = "outlined"   
                                                      style={{ width: "260px",  marginTop: "5%"}}
                                                      type = "Password"
                                                      name = "Password"
                                                      value={formik.values.password}
                                                      onChange = {formik.handleChange}
                                                      error = {formik.errors.password && formik.touched.password}
                                                ></TextField>
                                                      {formik.errors.password && formik.touched.password && (<p style={{color: "Red", textAlign: "left"}}>{formik.errors.password}</p>)}

                                                <TextField
                                                      label="Confirm Password"
                                                       
                                                      // defaultValue="Hello World"
                                                      // helperText="Incorrect entry." 
                                                      placeholder="Typing Your Password"
                                                      variant = "outlined"   
                                                      style={{ width: "260px",  marginTop: "5%"}}
                                                      type = "confirm_password"
                                                      name = "confirm_password"
                                                      value={formik.values.confirm_password}
                                                      onChange = {formik.handleChange}
                                                      error = {formik.errors.confirm_password && formik.touched.confirm_password}
                                                ></TextField>
                                                      {formik.errors.confirm_password && formik.touched.confirm_password && (<p style={{color: "Red", textAlign: "left", padding: "2%"}}>{formik.errors.confipassword}</p>)}

                                                <button style={{marginTop: "4%",width: "260px", fontSize:"16px", backgroundColor: "#629CF4", color: "white", borderColor: "white", fontFamily: "monospace"}} type="submit" >SIGN IN</button>


                                                </form>

                                                

                                          
                                                {/* <div style={{marginTop: "5%"}}>
                                                      <form  onsubmit="console.log('You clicked submit.'); return false">
                                                      <button style={{width: "260px", fontSize:"16px", backgroundColor: "#629CF4", color: "white", borderColor: "white", fontFamily: "monospace"}} type="submit" >SIGN IN</button>
                                                      </form>
                                                </div> */}
                                          
                                                <div style={{marginTop: "8%"}}>
                                                      
                                                      <Link to = "/Login"><h3 style={{ cursor: "pointer", color: "black", textDecoration: "underline"}}>ALREADY HAVE AN ACCOUNT. LOGIN HERE</h3></Link> 
                                                </div>
                                                                        
                                          </div>

                                    
                        
                                    </Paper>    
                              </Box>
                        

                        </div>
            
                  </Helmet>
            </Paper>   
            );
    };

export default Register; 