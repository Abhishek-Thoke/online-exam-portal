import { useState } from "react";

import { useNavigate,useLocation } from "react-router-dom";

import {resetPasswordNavigator} from  "../../helpers/ResetPasswordHelper";
import '../resetpwd/EnterOtp'
function EnterEmail() {

    const[email,setEmail] = useState("");
    const[error,setError] = useState("");

    const navigate = useNavigate();

    const location = useLocation();

    
    const sendMail = ()=>{
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
         // console.log(user);
            if(helper.readyState == 4 && helper.status == 200)
            {
            navigate("/rpwd/otp")         
            }
            
        };
        helper.open("POST","http://localhost:8080/users/resetPassword");
        helper.setRequestHeader("Content-Type", "application/json")
       // debugger;
        const cred = { email: email} 
        helper.send(JSON.stringify(cred))
    }

    const submitData = (event) => {
        event.preventDefault();

        if(email == ""){
            setError("Please enetr the email first!!!")
        }else{
            resetPasswordNavigator(email,navigate,setError)
        }

             
    }
        

    return (<>
    <center style={{alignItems:"center",verticalAlign:"center"}}>
        <form onSubmit={submitData} className="col-md-4 col-sm-4" style={{border:'solid 2px black',marginTop:"10%"}}>
        <div class="mb-3" style={{margin:'10px'}}>
            <label for="otp" className="form-label">Please Enter Registered Email Id</label>
            <input type="text" className="form-control" id="otp" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <h6 style={{color:"red"}}>{error}</h6>
            <button type="submit" className="btn btn-primary" style={{marginTop:"10px"}} onClick={sendMail}>Submit</button>
        </div>
        </form>
    </center>
    </>);
}

export default EnterEmail;