import { useState} from "react";

function CompanyList()
{


    const [apply, setApply] = useState({
      isApplied:"",
      application_date:"",
      user_id:{id:""},
      post_job_id:{id:""}
  });

    const [list, setList] = useState([{
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
    }]);

    var onhandle=(e,id)=>{

     // var date = moment().format();
      apply.isApplied=true;
     // apply.application_date=date;
      var a = sessionStorage.getItem("id")

      apply.user_id.id=a;

      apply.post_job_id.id=id;

      
      console.log(apply);

      console.log(id);

      var userObjectInStringFormat = JSON.stringify(apply);
      var helper1 = new XMLHttpRequest();
      helper1.onreadystatechange = ()=>{
       
          if(helper1.readyState == 4 && helper1.status == 200)
          {
           
              var result1 = helper1.responseText; // get the token from resp body
              console.log(result1+"SuccessFull");
            
             }
      };
    
      helper1.open("POST","http://localhost:8080/student/applyjob");
      helper1.setRequestHeader("Content-Type", "application/json")
      helper1.send(userObjectInStringFormat)
     
      
     e.target.className="btn btn-outline-success disabled";
     e.target.enabled =false;
      alert("Apply Successfull")
    }





      var onhandler=()=>{
      var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
         // console.log(user);
            if(helper.readyState == 4 && helper.status == 200)
            {
              //  debugger;
            //  console.log(user);
                var result = JSON.parse(helper.responseText); // get the token from resp body
                //console.log(result)
                setList(result);

                console.log(list);
              // if(result!=null){
               
               // console.log(list);
               }
        };
      
        helper.open("GET","http://localhost:8080/student/showcompany");
        helper.setRequestHeader("Content-Type", "application/json")
       // debugger;
    
        helper.send()
        //console.log(result)
        
      }
    
    return(<>
    <h1>This is CompanyList Page</h1>
    <button onClick={onhandler}>Click</button>

      <div id="container">
        {
         list.map((lists)=>{
            return<>
            <div className="p-3 mb-2 bg-dark text-info">
              
            <h6>Vacancy : {lists.vacancy}</h6>
            <h6>Skills : {lists.skills}</h6>
            <h6>Qualification :{lists.required_qualification}</h6>
            <h6>Salary : {lists.salary}</h6>
            <h6> working Hours : {lists.working_hours}</h6>
            <h6> Max Age : {lists.max_age}</h6>
            <h6> Description : {lists.description}</h6>
            <hr></hr>
            <br></br>
            <button className="btn btn-outline-success" onClick={(event)=>{onhandle(event,lists.id)}} >Apply</button>
        </div>
            </>
          })
        }
      </div>
  </>
)}

export default CompanyList;