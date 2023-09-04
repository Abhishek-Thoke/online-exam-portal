import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Change()
{

    var navigate=useNavigate();

    const [q ,setQues1]=useState({
        id:0,
        question:"abcd",
        option_a:"a",
        option_b:"b",
        option_c:"",
        option_d:"d",     
        correct_ans:"b",
        selected_ans:"a",
        company_id:{id:""}
    });

    var result;
    useEffect(()=>{
        var get_id= sessionStorage.getItem("change")

        var url = "http://localhost:8080/company/quest/"+get_id

        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
         
            if(helper.readyState == 4 && helper.status == 200)
            {
              
                 result = JSON.parse(helper.responseText);
                 console.log(result);
                
                 setQues1(result);
                console.log(q);
              
               }
        };
      
        helper.open("GET",url);
        helper.setRequestHeader("Content-Type", "application/json")
  
       helper.send()
    },[])

    var handleChange=(e)=>
{
    var copyOfQue = {...q }
    copyOfQue[e.target.id]=e.target.value;
    setQues1(copyOfQue);
}

var handleChange_role =(e)=>
{
    var copyOfQue1 = {...q }
    copyOfQue1[e.target.id]=e.target.value;
    setQues1(copyOfQue1);
}











    
    var updateData=()=>{
        var url1="http://localhost:8080/company/updateQuest/"+q.id

        var userObjectInStringFormat = JSON.stringify(q);

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
                alert("Update Question Successfully...!")
              navigate("/company/questions");
            }
      
          }
      
          
      };
      helper.open("PUT",url1);
      
      helper.setRequestHeader("content-type","application/json")
      
      helper.send(userObjectInStringFormat);
    }


    return(<>
    <h1>Change Job Page</h1>
    <div key={q.id}>
                <table>
                    <tr>
                        <td>Question :</td>
                        <td><input value={q.question} className="inputstyle"  type="text" onChange={handleChange}  id="question"/></td>                      
                    </tr>
                    <tr>
                        <td>Option A :</td>
                        <td><input value={q.option_a} className="inputstyle"  type="text" onChange={handleChange} id="option_a" /></td>                      
                    </tr>
                    <tr>
                        <td>Option B :</td>
                        <td><input value={q.option_b} className="inputstyle"  type="text" onChange={handleChange} id="option_b" /></td>                      
                    </tr>
                    <tr>
                        <td>Option C :</td>
                        <td><input value={q.option_c} className="inputstyle" onChange={handleChange} id="option_c" /></td>                      
                    </tr>
                    <tr>
                        <td>Option D :</td>
                        <td><input value={q.option_d} className="inputstyle" onChange={handleChange} id="option_d" /></td>                      
                    </tr>
                    <tr>
                <td>Corrct Answer :</td>
                <td><select value={q.correct_ans} id="correct_ans" onChange={handleChange_role}>
                 <option value="">Select Answer</option>
                  <option value="a">Option A</option>
                  <option value="b">Option B</option>
                  <option value="c">Option C</option>
                  <option value="d">Option D</option>
                  <option value="e">Option E</option>
                </select></td>
            </tr>
                </table>
                <center><button
                    onClick={updateData}  className="btn btn-info"
                  >
                   Update
                  </button></center>
            </div>
    </>);
}
export default Change;