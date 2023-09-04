import {useNavigate , Outlet} from "react-router-dom";
import back from '../../images/cambg_2.jpg';
import '../../assets/divs.css';
import '../../assets/layout.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from '../Home/Header'
import'../../Login'
import Footer from "../Home/Footer";



function Company()
{
  var navigate = useNavigate();
 
 //console.log(location.state.user.email+"on company page");
// var result =location.state.user;
 //var result1=location.state.user;
 var se=sessionStorage.getItem("Token");
 console.log(sessionStorage.getItem("Token")+"  This is session object");

    return <>
    
       <div style={{backgroundImage:`url(${back})`}} className="trsize">
        
        <Header></Header>
        
        <div className="mainDiv">

          <div className="leftDiv">
            <br></br>
          <button onClick={()=>{navigate("/company/addjob")}} className="btn btn-info">Add Jobs</button>
          <br></br>
          <br></br>
          <button onClick={()=>{navigate("/company/setquestions")}} className="btn btn-info">Set Questions</button>
          <br></br>
          <br></br>
          <button onClick={()=>{navigate("/company/candidate_list")}} className="btn btn-info">Candidate List</button>
          <br></br>
          <br></br>
          <button onClick={()=>{navigate("/company/conduct_exam")}} className="btn btn-info">Exam Conduct</button>
          <br></br>
          <br></br>
          <button onClick={()=>{navigate("/company/edit")}} className="btn btn-info">View Profile</button>
          <br></br>
          <br></br>
          <button onClick={()=>{navigate("/company/questions")}} className="btn btn-info">Questions</button>
          </div>
        

        
        <div className="rightDiv">
        <Outlet></Outlet>
        </div>

        

      
        
        
        
        
        </div>
       
        </div>
        
         </>
}

export default Company;