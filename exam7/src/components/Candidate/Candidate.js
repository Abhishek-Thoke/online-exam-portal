import { Outlet, useNavigate  } from "react-router-dom";
import back from '../../images/backg.jpg';
import '../../assets/divs.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from '../Candidate/Headercandi'
import'../../Login'

function Candidate()
{
  var navigate = useNavigate();

 

    return <>
       <div style={{backgroundImage:`url(${back})`}} className="trsize">
        
        <Header></Header>
        
        <div className="mainDiv">

          <div className="leftDiv">
            <br></br>
          <button onClick={()=>{navigate("/candidate/companylist")}} className="btn btn-outline-dark">Company List</button>
          <br></br>
            <br></br>
          <button onClick={()=>{navigate("/candidate/appliedjob")}} className="btn btn-outline-dark">Applied Job</button>
          <br></br>
          <br></br>
          <button onClick={()=>{navigate("/candidate/exam")}} className="btn btn-outline-dark">Exam</button>
          <br></br>
          <br></br>
          <button onClick={()=>{navigate("/candidate")}} className="btn btn-outline-dark">Education Detail</button>
          <br></br>
          <br></br>
          <button onClick={()=>{navigate("/candidate/edit")}} className="btn btn-outline-dark">View Profile</button>
          

          </div>
        

        
        <div className="rightDiv">
        <Outlet></Outlet>
        </div>
  
        </div>
       
        </div>
         </>
}

export default Candidate;