import { useState } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { useNavigate } from "react-router-dom";
function Exam()
{

    var counter = 1;
    const [select,setSelect]=useState([{
        id:"",
        selected:""
    }])

    var navigate = useNavigate();

    const questions=[{id:"",ans:""}];
    
    const [marks,setMarks]=useState({
        selected_ans:"",
        candidate_id:{id:""},
        company_id:{id:""}
    })
   

    const [ques ,setQues]=useState([{
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
    var result="";

   // var b=0;
    var selectedans=(e,id)=>{
        // var copyOfSeleted ={...select}
        // select.id=id;
        // select.selected=e.target.value;

        // setSelect(copyOfSeleted);
        // console.log(select);
        


        // questions[id]={"id":id,"ans":e.target.value};
       

        // console.log(questions);
        // console.log(questions[3]);

        // ques[id].selected_ans=e.target.value
        // console.log(ques +" ques");
      //  b=b+1;
        ques.some(function(obj){
            if(obj.id==id){
                obj.selected_ans=e.target.value;
                return true;
            }
        })


        // console.log(e.target.value)
        // console.log(id)

    }

    var Start=()=>{


        var helper = new XMLHttpRequest();
          helper.onreadystatechange = ()=>{
           
              if(helper.readyState == 4 && helper.status == 200)
              {
                
                   result = JSON.parse(helper.responseText);
                  
                  setQues(result);
  
                  console.log(result[0].id);
                
                 }
          };
        
          helper.open("GET","http://localhost:8080/student/getQues/7");
          helper.setRequestHeader("Content-Type", "application/json")
    
         helper.send()
          
          
        }

        var cnt;
        var endExam =()=>{


            cnt=ques.filter(q=>q.selected_ans==q.correct_ans).length
            console.log(...ques.filter(q=>q.selected_ans==q.correct_ans));
             console.log(cnt +" Marks");


            var candi_id= sessionStorage.getItem("id");

            marks.candidate_id.id=candi_id;

            marks.company_id.id=ques[0].company_id.id;

            marks.selected_ans=cnt;

            var userObjectInStringFormat = JSON.stringify(marks);

            var help1 = new XMLHttpRequest();

            help1.onreadystatechange=()=>{

                if(help1.readyState==4 && help1.status==201)
                {
                        var mk=JSON.parse(help1.responseText);

                        console.log(mk.selected_ans);
                }
            }

            const url1="http://localhost:8080/company/result/"+candi_id

            help1.open("POST",url1);
            help1.setRequestHeader("Content-Type", "application/json")
            help1.send(userObjectInStringFormat);


                alert("Submit the Exam")
                navigate("/candidate")

        }
    


    return(<>
   <button onClick={Start}> Start</button>

        {
            
            ques.map((q)=>{
                return  <>
                <center>
                
                <div className="queDiv" onChange={(e)=>{
                    selectedans(e,q.id)
                }}>
                <table className="table table-success">
                    <thead className="table table-dark">
                    <tr>
                        <td>{counter++} )</td>
                        <td>{q.question}</td>
                    </tr>
                    </thead>
                <tbody>
                    <tr>
                        <td>A)</td>
                        <td><input type="radio" value="a" id="ans" name={q.id}/>{q.option_a}</td>
                    </tr>
                    <tr>
                        <td>B)</td>
                        <td><input type="radio" value="b" id="ans" name={q.id}/> {q.option_b}</td>
                    </tr>
                    <tr>
                        <td>C)</td>
                        <td><input type="radio" value="c" id="ans" name={q.id}/> {q.option_c}</td>
                    </tr>
                    <tr>
                        <td>D)</td>
                        <td><input type="radio" value="d" id="ans" name={q.id}/> {q.option_d}</td>
                    </tr>
                </tbody>
               </table>
                </div>
                </center>
               <br></br>
               <hr></hr>
                </>
            })
        }
        <button onClick={endExam}>Submit</button>
   
    </>);
}
export default Exam;