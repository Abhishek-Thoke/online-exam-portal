import { Route,Routes} from 'react-router-dom'
import Company from './components/Company/Company';
import Candidate from './components/Candidate/Candidate';
import Login from './Login';
import Register from './Register';
import EnterEmail from './components/resetpwd/EnterEmail'
import EnterOtp from './components/resetpwd/EnterOtp'
import EnterNewPassword from './components/resetpwd/EnterPwd'
import Candidate_list from './components/Company/Candidate_list'
import SetQuestions from './components/Company/SetQuestions';
import Conduct_exam from './components/Company/Conduct_exam';
import Addjob from './components/Company/AddJob'
import Appliedjob from './components/Candidate/Appliedjob';
import Exam from './components/Candidate/Exam';
import CompanyList from './components/Candidate/CompanyList';
import Edit from './components/Candidate/Edit';

import Company_edit from './components/Company/Edit'

import Questions_list from './components/Company/Questions_list'
import Change from './components/Company/Change';


function App()
{
    return <>        
            <Routes>
               <Route exact path="/" element={ <Login/> }></Route>
               <Route exact path="/candidate" element={ <Candidate /> }></Route>               
               <Route exact path="/company" element={ <Company/> }></Route>                
              <Route exact path="/register" element={ <Register /> }></Route>                  
              <Route path="/rpwd">
              <Route path="email" element={<EnterEmail />}/>
              <Route path="otp" element={<EnterOtp/>}/>
              <Route path="reset" element={<EnterNewPassword/>}/>
              </Route>                 



              <Route path="/company" element={ <Company/> }>

                <Route path='addjob' element={<Addjob/>}></Route>
                <Route path='candidate_list' element={<Candidate_list/>}></Route>
                <Route path='conduct_exam' element={<Conduct_exam/>}></Route>
                <Route path='setquestions' element={<SetQuestions/>}></Route>
                <Route path='edit' element={<Company_edit/>}></Route>
                <Route path='questions' element={<Questions_list/>}></Route>
                <Route path='change' element={<Change/>}></Route>

              </Route>

              <Route path="/candidate" element={ <Candidate/> }>
                <Route path='appliedjob' element={<Appliedjob/>}></Route>
                <Route path='exam' element={<Exam/>}></Route>
                <Route path='companylist' element={<CompanyList/>}></Route>
                <Route path='edit' element={<Edit/>}></Route>
                
                
              </Route>


            </Routes>           
          </>
}

export default App;