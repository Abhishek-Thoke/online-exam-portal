import { useEffect,useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { ChangePassword } from "../../helpers/ResetPasswordHelper"

function EnterNewPassword(params) {
    const[newPassword,setNewPassword] = useState("");
    const[confirmNewPassword,setConfirmNewPassword] = useState("");
    const[cachedList,setCachedList] = useState([]);
    const[error,setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    

    useEffect(async ()=>{
        var obj;
        async function Fetchdata() {
            //caching last 3 passwords
        await fetch(`http://localhost:8080/rpwd/${location.state.userid}`, {
            method: 'GET', // or 'PUT'
            })
              .then((response) => response.json())
              .then((data) => {
                //getting list of orevios 3 passwords
                console.log('Success:', data);
                obj = JSON.parse(data.data)
                //setting up cached List
                setCachedList(obj);
                console.log(obj)
              })
              .catch((error) => {
                //otp is not valid send false
                console.error('Error:', error);
          });
        }
        Fetchdata()
        console.log("final obj:" + obj)

    },[])

    const submitData = (event) => {
        event.preventDefault();
        var isPrevious = false;

        if(newPassword != confirmNewPassword){
            // show error np and cnp not matching
            setError("Confirm password not matching!!!")
        }else{
            cachedList.forEach((a)=>{
                // cachedList of passwords
                console.log(a.pwd)
                if(a.pwd == newPassword){
                    isPrevious = true;
                }
            })

            if(isPrevious){
                    // show error previously used password
                    setError("Enter password which is not in list of previously used 3 passwords")
            }else{
                setError("")
                ChangePassword(location.state.userid,newPassword,navigate,setError)
            }          

        }   
    }

    return (<>
    <center style={{alignItems:"center",verticalAlign:"center"}}>
        <form onSubmit={submitData} className="col-md-4 col-sm-4" style={{border:'solid 2px black',marginTop:"10%"}}>
        <div class="mb-3" style={{margin:'10px'}}>
            <label for="nPwd" className="form-label">Enter New Password</label>
            <input type="password" className="form-control"  id="nPwd" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
            <label for="cnPwd" className="form-label">Confirm New Password</label>
            <input type="password" className="form-control"  id="cnPwd" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)}/>
            <h3 style={{color:"red"}}>{error}</h3>
            <button type="submit" className="btn btn-primary" style={{marginTop:"10px"}}>Change Password</button>
        </div>
        </form>
    </center>
    </>);

}

export default EnterNewPassword;