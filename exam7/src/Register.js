import React, { useState } from "react";
import {Link,useNavigate} from "react-router-dom";

function Register() {
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
  const [error, setError] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("");
  var navigate = useNavigate();

  const handleChange = (e) => {
    var copyOfUser = { ...user };
    copyOfUser[e.target.id] = e.target.value;
    //set the form values
    setUser(copyOfUser);
  };

  
  const handleChange_role = (e) => {
    var copyOfUser = { ...user };
    copyOfUser[e.target.id].id = e.target.value;
    //set the form values
    setUser(copyOfUser);
  };

  
  const gendervalue=(e)=>{
    console.log(e.target.value);
  }





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

const sendData =()=>{

  
  var userObjectInStringFormat = JSON.stringify(user);

  console.log(userObjectInStringFormat);
  
  var helper = new XMLHttpRequest();
  helper.onreadystatechange=()=>{
    
    if(helper.readyState==4 && helper.status==201)
    {
 //     console.log(user);
    //  console.log(user);
      var result=JSON.parse(helper.responseText);
       if(result!=null)
      {

        alert("Registation done...!!!")
       navigate("/")
      }

      
     

    }

    
};
helper.open("POST","http://localhost:8080/users");

helper.setRequestHeader("content-type","application/json")

helper.send(userObjectInStringFormat);
};



  return (
    <>
      <center>
        <div>{message}</div>

        <br></br>
        <br></br>
        <h1>Register here</h1>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
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
              <td>address:</td>
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
                <td>City:</td>
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
                <td>State:</td>
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
                <td>Pincode:</td>
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
              <td>Email:</td>
              <td>
                <input
                  value={user.email}
                  type="text"
                  id="email"
                  onChange={handleChange}
                />
              </td>

              <td>{error.email}</td>
            </tr>
            <tr>
              <td>Mobile no:</td>
              <td>
                <input
                  value={user.mobile_no}
                  type="number"
                  id="mobile_no"
                  onChange={handleChange}
                />
              </td>

              <td>{error.mobile_no}</td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input
                  value={user.password}
                  type="password"
                  id="password"
                  onChange={handleChange}
                />
              </td>

              <td>{error.password}</td>
            </tr>
            <tr>
              <td>Confirm Password:</td>
              <td>
                <input
                  value={user.confirmpassword}
                  type="password"
                  id="confirmpassword"
                  onChange={handleChange}
                />
              </td>
              <td>{error.confirmpassword}</td>
            </tr>

            <tr>
                <td>Date of birth:</td>
                <td>
                  <input 
                        value={user.dob}
                        type="datetime-local"
                        id="dob"
                        onChange={handleChange}/>
                </td>
                <td></td>
            </tr>

           <tr style={{columnSpan:3}}>
            <div onChange={gendervalue}>
         Gender: 
           <input type="radio" value="M" id="gender" name="gender"/> Male
            <input type="radio" value="F" id="gender" name="gender"/> Female
            <input type="radio" value="O" id="gender" name="gender"/> Other
            </div>

           </tr>
   




            <tr>
                <td>Contact_person</td>
                <td>
                  <input 
                        value={user.contact_person}
                        type="number"
                        id="contact_person"
                        onChange={handleChange}/>
                </td>
                <td></td>
            </tr>

            <tr>
                <td>Company_website</td>
                <td>
                  <input 
                        value={user.company_website}
                        type="text"
                        id="company_website"
                        onChange={handleChange}/>
                </td>
                <td></td>
            </tr>

            <tr>
                <td>Highest Qualification</td>
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
              <td>Register as:</td>
              <td>
                <select value={user.user_type_id} id="user_type_id" onChange={handleChange_role} name="user_type_id">
                 <option value="">Select Role</option>
                  <option value="1">Candidate</option>
                  <option value="2">Company</option>
                </select>
              </td>
              <td>{error.user_type_id}</td>
            </tr>
            <tr>
              <td style={{ colspan: 2 }}>
               
                  {/* <button
                    onClick={() => {
                      register(user);
                    }}
                  >
                    Register
                  </button> */}
                  <br></br>
                  <button
                    onClick={sendData} 
                  >
                    Register
                  </button>

                  <Link to={"/"}>Already User? click here to login</Link>
                 
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </>
  );

}

export default Register ;
