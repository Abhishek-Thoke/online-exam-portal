import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Questions()
{

    // const [que ,setQue]=useState([{
    //     id: "",
    //     question: "",
    //     option_a: "",
    //     option_b: "",
    //     option_c: "",
    //     option_d: "",
    //     correct_ans: "",
    //     company_id: {
    //         id: "",
    //         name: "",
    //         address: "",
    //         city: "",
    //         state: "",
    //         pincode: "",
    //         email: "",
    //         mobile_no: "",
    //         password: "",
    //         dob: "",
    //         gender: "",
    //         contact_person: "",
    //         company_website: "",
    //         role_in_company: "",
    //         qualification_details: "",
    //         user_type_id: {
    //             id: "",
    //             user_type: ""
    //         }
    //     }
       
    // }]);
    var navigate= useNavigate();
    const [ques ,setQues]=useState([{
        id:"",
        question:"",
        option_a:"",
        option_b:"",
        option_c:"",
        option_d:"",
        option_e:"",
        correct_ans:"",
        selected_ans:"",
        company_id:{id:""}
    }]);
    const [updatques ,setupdatques]=useState({
        id:"",
        question:"",
        option_a:"",
        option_b:"",
        option_c:"",
        option_d:"",
        option_e:"",
        correct_ans:"",
        selected_ans:"",
        company_id:{id:""}
    });
    var result=[];

    useEffect(()=>{
        // var helper = new XMLHttpRequest();
    
        // var use_id= sessionStorage.getItem("id");
        // console.log(use_id);
        // const url="http://localhost:8080/company/getQuest/"+use_id

        // helper.onreadystatechange=()=>{
    
        //   //  debugger;
        //     if(helper.readyState == 4 )
        //     {
        //         result=JSON.parse(helper.responseText);
        //         console.log(result);
        //         setQue(result);
        //         console.log(que);

                
        //     }
        // }
    
        // console.log(url);
        // helper.open("GET",url)
        // helper.setRequestHeader("Content-Type", "application/json")
        // helper.send()
        


        var helper = new XMLHttpRequest();
          helper.onreadystatechange = ()=>{
           
              if(helper.readyState == 4 && helper.status == 200)
              {
                
                   result = JSON.parse(helper.responseText);
                   console.log(result);
                  
                  setQues(result);
                  console.log(ques);
                
                 }
          };
        
          helper.open("GET","http://localhost:8080/student/getQues/7");
          helper.setRequestHeader("Content-Type", "application/json")
    
         helper.send()
          

    },[])

    var handleChange=((e,id)=>{
       sessionStorage.setItem("change",id)

       
    })
    
    var handleChange_role =(e)=>
{
    var copyOfQue1 = {...ques }
    copyOfQue1[e.target.id]=e.target.value;
    setQues(copyOfQue1);
}


var updateData =(e,id)=>{
    console.log(id)
    
}


    return(<>
    <h1>Applied Job Page</h1>
    {
        ques.map((q)=>{
            return <>
            
            <div key={q.id}>
                <table>
                    <tr>
                        <td>Question :</td>
                        <td><input value={q.question} className="inputstyle"  type="text" onChange={handleChange}/></td>                      
                    </tr>
                    <tr>
                        <td>Option A :</td>
                        <td><input value={q.option_a} className="inputstyle"  type="text" onChange={handleChange}/></td>                      
                    </tr>
                    <tr>
                        <td>Option B :</td>
                        <td><input value={q.question} className="inputstyle"  type="text" onChange={handleChange}/></td>                      
                    </tr>
                    <tr>
                        <td>Option C :</td>
                        <td><input value={q.question} className="inputstyle" onChange={handleChange}/></td>                      
                    </tr>
                    <tr>
                        <td>Option D :</td>
                        <td><input value={q.question} className="inputstyle" onChange={handleChange}/></td>                      
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
                    onClick={(e)=>{updateData(e,q.id)}}  className="btn btn-info"
                  >
                   Update
                  </button></center>
            </div>
            <hr></hr>
            </>
        })
       
    }
    

    
    </>);
}
export default Questions;