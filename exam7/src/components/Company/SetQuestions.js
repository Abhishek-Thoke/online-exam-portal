import React ,{useState} from "react";
import {useLocation ,useNavigate} from "react-router-dom";
function SetQuestions()
{
    const [que ,setQue]=useState({
        question:"",
        option_a:"",
        option_b:"",
        option_c:"",
        option_d:"",
        option_e:"",
        correct_ans:"",
        company_id:{id:""}
    });
    var navigate=useNavigate();
  //  var location = useLocation();
    var resultObj=sessionStorage.getItem("id")

var handleChange=(e)=>
{
    var copyOfQue = {...que }
    copyOfQue[e.target.id]=e.target.value;
    setQue(copyOfQue);
}

var handleChange_role =(e)=>
{
    var copyOfQue1 = {...que }
    copyOfQue1[e.target.id]=e.target.value;
    setQue(copyOfQue1);
}
var sendData=()=>{

    var userObjectInStringFormat = JSON.stringify(que);

    console.log(userObjectInStringFormat);
    
    var helper = new XMLHttpRequest();
    helper.onreadystatechange=()=>{
      
      if(helper.readyState==4 && helper.status==201)
      {
  
        var result=JSON.parse(helper.responseText);
        console.log(result.affectedRow+" this is result");
        console.log(result+" this is result");
        if(helper.status==201)
        {
         
         
            clear();
            alert("Add Question Successfully...!")
          navigate("/company/setquestions");
        }
  
      }
  
      
  };
  helper.open("POST","http://localhost:8080/company/addQuest");
  
  helper.setRequestHeader("content-type","application/json")
  
  helper.send(userObjectInStringFormat);
}

const clear=()=>{
    debugger;
    que.question="";
    que.option_a="";
    que.option_b="";
    que.option_c="";
    que.option_d="";
    que.option_e="";
    que.correct_ans="";
    
  }
    return(<>
    <center className="table table-info table-striped-columns">
        <h2 className="bg-info p-2 text-dark bg-opacity-25">Set Question Paper</h2>
        <table>
             <tr>
                <td></td>
                <td><input value={que.company_id.id=resultObj} type="hidden" id="company_id" /></td>
            </tr>
            <tr>
                <td>Question :</td>
                <td><input value={que.question} type="text" onChange={handleChange} id="question" className="inputstyle"/></td>
            </tr>
            <tr>
                <td>Option a:</td>
                <td><input value={que.option_a} type="text" onChange={handleChange} id="option_a"/></td>
            </tr>

            <tr>
                <td>Option b:</td>
                <td><input value={que.option_b} type="text" onChange={handleChange} id="option_b"/></td>
            </tr>

            <tr>
                <td>Option c:</td>
                <td><input value={que.option_c} type="text" onChange={handleChange} id="option_c"/></td>
            </tr>

            <tr>
                <td>Option d:</td>
                <td><input value={que.option_d} type="text" onChange={handleChange} id="option_d"/></td>
            </tr>

            <tr>
                <td>Option e:</td>
                <td><input value={que.option_e} type="text" onChange={handleChange} id="option_e"/></td>
            </tr>

            <tr>
                <td>Corrct Answer :</td>
                <td><select value={que.correct_ans} id="correct_ans" onChange={handleChange_role}>
                 <option value="">Select Answer</option>
                  <option value="a">Option A</option>
                  <option value="b">Option B</option>
                  <option value="c">Option C</option>
                  <option value="d">Option D</option>
                  <option value="e">Option E</option>
                </select></td>
            </tr>

            <tr>
                
                <td colSpan={2}></td>
            </tr>
            

        </table>

    </center>
    <center><button
                    onClick={sendData}  className="btn btn-info"
                  >
                   Submit
                  </button></center>
    
    
    </>);
}
export default SetQuestions;