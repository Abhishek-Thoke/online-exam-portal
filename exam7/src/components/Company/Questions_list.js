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
       navigate("/company/change")

       
    })
    
   





    return(<>
    <h1>Applied Job Page</h1>

    {
        ques.map((q)=>{
            return <>
            
            <div className="navcolor">
                <table>
                    <tr>
                        <td>Question :  </td>
                        <td>{q.question}</td>   
                        <td><center><button
                    onClick={(e)=>{handleChange(e,q.id)}}  className="btn btn-info"
                  >
                   Update
                  </button></center></td>                   
                    </tr>
                    
                </table>
                
            </div>
            <hr></hr>
            </>
        })
       
    }
    

    
    </>);
}
export default Questions;