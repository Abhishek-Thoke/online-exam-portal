import { useState } from "react";

import { useNavigate,useLocation } from "react-router-dom";

import { checkIfValidOtp } from "../../helpers/ResetPasswordHelper"

function EnterOtp(params) {

    const[otp,setOtp] = useState("");
    const[error,setError] = useState("");

    const navigate = useNavigate();

    const location = useLocation();

    const submitData = (event) => {
        event.preventDefault();
        checkIfValidOtp({user_id:location.state.userid,otp:otp},setOtp,navigate)        
    }
              

    return (<>
    <center style={{alignItems:"center",verticalAlign:"center"}}>
        <form onSubmit={submitData} className="col-md-4 col-sm-4" style={{border:'solid 2px black',marginTop:"10%"}}>
        <div class="mb-3" style={{margin:'10px'}}>
            <label for="otp" className="form-label">Enter OTP</label>
            <input type="text" className="form-control" maxLength={6} minLength={6} id="otp" value={otp} onChange={(e) => setOtp(e.target.value)}/>
            <h6 style={{color:"red"}}>{error}</h6>
            <button type="submit" className="btn btn-primary" style={{marginTop:"10px"}}>Submit</button>
        </div>
        </form>
    </center>
    </>);
}

export default EnterOtp;