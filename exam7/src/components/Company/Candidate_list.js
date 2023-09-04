import { useEffect, useState } from "react";

function Candidate_list()
{

    const [user, setUser] = useState([{
        name: "",
        address: "",
        city:"",
        state:"",
        pincode:"",
        email: "",
        mobile_no: "",
        dob:"",
        gender:"",
        qualification_details:"",
      }]);

    useEffect(()=>{

        var helper = new XMLHttpRequest();
    
        var user_id= sessionStorage.getItem("id");
        console.log(user_id);
        const url="http://localhost:8080/company/candidate/"+user_id

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


    return(<>
    <h1>This is Candidate_list Page1</h1>

    {
        user.map((candi)=>{
            return <>
            <div className="tablecolor">
               <table className="table table-info">
                <tr>
                    <td>Name :</td>
                    <td>{candi.name}</td>
                </tr>
                <tr>
                    <td>Email :</td>
                    <td>{candi.email}</td>
                </tr>
                <tr>
                    <td>Contact No. :</td>
                    <td>{candi.mobile_no}</td>
                </tr>
                <tr>
                    <td>Higher Education</td>
                    <td>{candi.qualification_details}</td>
                </tr>
        
               </table>
               <hr></hr>
            </div>
            </>
        })
    }
    </>);
}
export default Candidate_list;