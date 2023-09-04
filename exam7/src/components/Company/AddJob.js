import React, { useState } from "react";
import {Link,useNavigate } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
function AddJob()
{
    const [com, setCom] = useState({
        last_date: "",
        vacancy: "",
        skills:"",
        required_qualification:"",
        max_age:"",
        job_location: "",
        salary: "",
        working_hours: "",
        description: "",      
        user_id:{id:""}
      });

      // const [msg ,setMsg ] =useState(); 
      var navigate=useNavigate()
    
     var a= com.user_id.id=sessionStorage.getItem("id");
      
     
      var sendData=()=>{


        var userObjectInStringFormat = JSON.stringify(com);

  console.log(userObjectInStringFormat);
  
  var helper = new XMLHttpRequest();
  helper.onreadystatechange=()=>{
    
    if(helper.readyState==4 && helper.status==200)
    {

      var result=JSON.parse(helper.responseText);
      console.log(result.affectedRow+" this is result");
      console.log(result+" this is result");
      if(helper.status==200)
      {
       var b= {job_location:""};


       // setCom(b);
       debugger
          clear();
          alert("Add Job Successfully...!")
        navigate("/company");
      }

    }

    
};
helper.open("POST","http://localhost:8080/company/addjob");

helper.setRequestHeader("content-type","application/json")

helper.send(userObjectInStringFormat);
      




        console.log(com);
  
};

      const handleChange = (e) => {
        
        var copyOfCom = { ...com };
        copyOfCom[e.target.id] = e.target.value;
        //set the form values
        
        setCom(copyOfCom);
        console.log(com.name);
      };

      const clear=()=>{
        debugger;
        com.last_date= "";
        com.vacancy= "";
        com.skills="";
        com.required_qualification="";
        com.max_age="";
        com.job_location= "";
        com.salary= "";
        com.working_hours= "";
        com.description= ""; 
      }
   

    return(<>
    <div >
    <center className="table table-success table-striped-columns">
        <h2 className="bg-info p-2 text-dark bg-opacity-25">Add Job</h2>

        <table >
        <tr>
            {/* <td>

            </td>
            <td>
            <input value={com.user_id.id=a} type="hidden" />                 
            </td> */}
            </tr>
            <tr>
                <td>Require Skill :

                </td>
                <td>
                    <input value={com.skills} type="text" id="skills" onChange={handleChange}/>                 
                </td>
            </tr>
            <tr>
            <td>Job Description:

            </td>
            <td>
            <input value={com.description} type="text" id="description" onChange={handleChange}/>                 
            </td>
            </tr>
            
            <tr>
            <td>Require Qualification :

            </td>
            <td>
            <input value={com.required_qualification} type="text" id="required_qualification" onChange={handleChange}/>                 
            </td>
            </tr>


            <tr>
                <td>Vacancy :

                </td>
                <td>
                <input value={com.vacancy} type="number" id="vacancy" onChange={handleChange}/>                 
                </td>
            </tr>
            <tr>
            <td>Job Location :

            </td>
            <td>
            <input value={com.job_location} type="text" id="job_location" onChange={handleChange}/>                 
            </td>

            </tr>
            <tr>
            <td>Salary :

            </td>
            <td>
            <input value={com.salary} type="text" id="salary" onChange={handleChange}/>                 
            </td>
            </tr>
            
            

            <tr>
                <td>Working hours :

                </td>
                <td>
                    <input value={com.working_hours} type="number" id="working_hours" onChange={handleChange}/>                 
                </td>
            </tr>
           


            <tr>
                <td>Max Age :

                </td>
                <td>
                <input value={com.max_age} type="number" id="max_age" onChange={handleChange}/>                 
                </td>
            </tr>
            <tr>
            <td>Last Date :

            </td>
            <td>
            <input value={com.last_date} type="datetime-local" id="last_date" onChange={handleChange}/>                 
            </td>

            </tr>
           
            <center> <br></br>
                  <button
                    onClick={sendData} 
                  >
                   Submit
                  </button></center>
            
           
        </table>


    </center>
    </div>
    
  
          
    </>);
}
export default AddJob;