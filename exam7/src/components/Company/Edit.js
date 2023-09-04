import { useState ,useEffect, } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios"

function Edit()
{

    var navigate= useNavigate();

    const [message, setMessage] = useState("");


    const [error, setError] = useState({});

    const [user, setUser] = useState({
        name: "",
        address: "",
        city:"",
        state:"",
        pincode:"",
        email: "",
        mobile_no: "",
        password: "",
        confirmpassword: "",
        dob:"",
        gender:"",
        contact_person:"",
        company_website:"",
        role_in_company:"",
        qualification_details:"",
        user_type_id:{id:""}
      });

      useEffect(()=>{

        var helper = new XMLHttpRequest();
    
        var user_id= sessionStorage.getItem("id");
        console.log(user_id);
        const url="http://localhost:8080/users/"+user_id


       
    
    
        helper.onreadystatechange=()=>{
    
          //  debugger;
            if(helper.readyState == 4 )
            {
                var result=JSON.parse(helper.responseText);
                console.log(result);
                setUser(result)
                
            }
        }
    
        console.log(url);
        helper.open("GET",url)
        helper.setRequestHeader("Content-Type", "application/json")
        helper.send()

        

      },[]);



      // var user_id= sessionStorage.getItem("id");
   

      // const url1="http://localhost:8080/users/"+user_id

   
    // var helper = new XMLHttpRequest();
    
    // var user_id= sessionStorage.getItem("id");
    // console.log(user_id);
    // const url="http://localhost:8080/users/"+user_id


    // helper.onreadystatechange=()=>{

    //   //  debugger;
    //     if(helper.readyState == 4 )
    //     {
    //         var result=JSON.parse(helper.responseText);
    //         console.log(result);
    //         setUser(result)
            
    //     }
    // }

    // console.log(url);
    // helper.open("GET",url)
    // helper.setRequestHeader("Content-Type", "application/json")
    // helper.send()


   



        const sendData =()=>{

            var userid=sessionStorage.getItem("id");


            var updateurl="http://localhost:8080/users/"+userid

                console.log(updateurl);

            var userObjectInStringFormat = JSON.stringify(user);
          
            console.log(userObjectInStringFormat);
            
            var helper = new XMLHttpRequest();
            helper.onreadystatechange=()=>{
              
              if(helper.readyState==4 )
              {
           //     console.log(user);
              //  console.log(user);
                var result=JSON.parse(helper.responseText);
                 if(result!=null)
                {
          
                  alert("Update Successfully...!!!")
                 navigate("/company")
                }
          
                
               
          
              }
          
              
          };
          helper.open("PUT",updateurl);
          
          helper.setRequestHeader("content-type","application/json")
          
          helper.send(userObjectInStringFormat);
          };



          const handleChange = (e) => {
            var copyOfUser = { ...user };
            copyOfUser[e.target.id] = e.target.value;
            //set the form values
            setUser(copyOfUser);
          };




          const register = (values) => {
            // debugger;
              const errors={};
             //regular expression for validating email
             const email_regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
             //regular expression for validating phone number
             const mobile_no_regex =
               /(\+)?(91)?( )?[789]\d{9}/g;
             //regular expression for validating name
             const name_regex = /^[a-zA-Z ]{2,40}$/;
             //regular expression for validating password
         
             const address_regex = /^[a-zA-Z ]{2,40}$/;
         
             const pincode_regex =
             /^[1-9][0-9]{5}$/;
         
             const user_type_id_regex=
             /(\+)?(91)?( )?[789]\d{9}/g;
         
             const password_regex =
               /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/;
         
         
         
             //checking for each of the values
             if (!values.name) {
                 errors.name = "First Name is required!";
             } else if (!name_regex.test(values.name)) {
                 errors.name = "First Name only contains characters";
             }
              else if (!values.address) {
               errors.address = "address is required!";
             }
              else if (!address_regex.test(values.address)) {
               errors.address = "address only contains characters";
             }
             else if (!pincode_regex.test(values.pincode)) {
               errors.pincode = "pincode only contains number";
             }
              else if (!values.email) {
               errors.email = "Email is required!";
             }
              else if (!email_regex.test(values.email)) {
               errors.email = "This is not a valid Email format!";
             }
              else if (!values.mobile_no) {
               errors.mobile_no = "Mobile No is required!";
             }
              else if (!mobile_no_regex.test(values.mobile_no)) {
               errors.mobile_no = "Mobile number must contains 10 digits only!";
             }
              else if (!values.password) {
               errors.password = "Password is required!";
             }
              else if (!password_regex.test(values.password)) {
               errors.password =
                 "Password must contain a digit, uppercase letter, lowecase letter, special charater.";
             }
              else if (values.confirmpassword !== values.password) {
               errors.confirmpassword = "Confirm Password must match with password!";
             }
             else if (!values.email) {
               errors.email = "Email is required!";
             }
         
         
         
              else if (!values.role) {
               errors.role = "Select Role!";
             }
              else {
               var dataToBeSent = {
                 name: user.name,
                 address: user.address,
                 city:user.city,
                 state:user.state,
                 pincode:user.pincode,
                 email: user.email,
                 mobile_no: user.mobile_no,
                 password: user.password,
                 dob:user.dob,
                 gender:user.gender,
                 contact_person:user.contact_person,
                 contact_website:user.contact_website,
                 role_in_company: user.role_in_company,
                 qualification_details:user.qualification_details,
                 user_token:user.user_tokan,
                 user_type_id:{id:user.user_type_id}
               };
         
             setError(errors);
               }
         
               
               
         
             
         };






    return(<>
    <h1 className="updateDiv">Edit Your Profile</h1>
    <div>
    <center >
        <div className="tablecenter">

        <br></br>
        <br></br>
        
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Name :</td>
              <td>
                <input
                  value={user.name}
                  type="text"
                  id="name"
                  onChange={handleChange}
                />
              </td>
              <td>{error.name}</td>
            </tr>
            <tr>
              <td>address :</td>
              <td>
                <input
                  value={user.address}
                  type="text"
                  id="address"
                  onChange={handleChange}
                />
              </td>

              <td>{error.address}</td>
            </tr>

            <tr>
                <td>City :</td>
                <td>
                  <input 
                        value={user.city}
                        type="text"
                        id="city"
                        onChange={handleChange}/>
                </td>
                <td></td>
            </tr>

            <tr>
                <td>State :</td>
                <td>
                  <input 
                        value={user.state}
                        type="text"
                        id="state"
                        onChange={handleChange}/>
                </td>
                <td></td>
            </tr>

            <tr>
                <td>Pincode :</td>
                <td>
                  <input 
                        value={user.pincode}
                        type="text"
                        id="pincode"
                        onChange={handleChange}/>
                </td>
                <td>{error.pincode}</td>
            </tr>
  
            <tr>
              <td>Mobile no :</td>
              <td>
                <input
                  value={user.mobile_no}
                  type="text"
                  id="mobile_no"
                  onChange={handleChange}
                />
              </td>

              <td>{error.mobile_no}</td>
            </tr>
            
           
           

            {/* <tr>
                <td>Date of birth:</td>
                <td>
                  <input 
                        value={user.dob}
                        type="date"
                        id="dob"
                        onChange={handleChange}/>
                </td>
                <td></td>
            </tr> */}


           

           
            <tr>
                <td>Highest Qualification :</td>
                <td>
                  <input 
                        value={user.qualification_details}
                        type="text"
                        id="qualification_details"
                        onChange={handleChange}/>
                </td>
                <td></td>
            </tr>
           
            <tr>
              <td style={{ colspan: 2 }}>         
                  <br></br>
                  <center><button className="btn btn-outline-success" onClick={sendData}>
                    Update
                  </button></center>
                 
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </center>
    </div>
    
    
    </>);
}
export default Edit;