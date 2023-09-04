import { useState ,useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../src/components/Candidate/Candidate'


function Login()
{
    const [user, setUser] = useState({email: "", password: ""});
    const [message, setmessage] = useState("");
   // const history = useHistory();
   var navigate = useNavigate();

    const handleChange = (args)=>
    {
       // debugger;
        var copyOfCurrentUserInState = {...user};
        copyOfCurrentUserInState[args.target.name] = args.target.value;
        setUser(copyOfCurrentUserInState);
    }

    
    useEffect(()=>{
        if(message!="")
        {
            setTimeout(() => 
            {
                setmessage("");
            }, 2000);
        }
    }, [message]);

    const signIn = ()=>{
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
         // console.log(user);
            if(helper.readyState == 4 && helper.status == 200)
            {
              //  debugger;
            //  console.log(user);
                var result = JSON.parse(helper.responseText); // get the token from resp body
                if(result)
                {
                    //Step 1: set the session state that says user is logged in now
                    sessionStorage.setItem("isloggedin", "true")
                    sessionStorage.setItem("userName", result.email)
                 //  console.log("result obj" + result)
                    sessionStorage.setItem("Token", result.name) // save token in session storage
                    sessionStorage.setItem("id", result.id)
                    sessionStorage.setItem("user_type", result.user_type_id.user_type)

                   // props.afterlogin();
                    
                    //Step 2: navigate user to Home page..
                  //  history.push("/candidate");
                  //  debugger;
                 // console.log("This is Result    ++++++++===="+result.user_type_id.id);

                  console.log("This is Result    ++++++++===="+result.email);
                  if(result.user_type_id.user_type=="1"){
                    navigate("/candidate");
                  }
                  else if(result.user_type_id.user_type== "2")
                  {
                    navigate("/company");
                  }
                }
                else if(helper.readyState == 4 && helper.status == 404)
                {
                 // console.log(user);
                    clearBoxes();
                    setmessage("Invalid email or password!"); 
                }
            }
            else
            {
                clearBoxes();
                setmessage("Invalid email or password!"); 
            }
        };

        helper.open("POST","http://localhost:8080/users/login");
        helper.setRequestHeader("Content-Type", "application/json")
       // debugger;
        const cred = { email: user.email, password: user.password }

        helper.send(JSON.stringify(cred))
    }

    const clearBoxes =()=>
    {
        setUser({email: "", password: ""});
    }


   







    return(
        <> <div id="b">
                <center>
                    <br></br>
                    <br></br>
                    <br></br>
                    <table>
                        <tbody>
                            <tr>
                                <td className='td'>Email</td>    
                                <td className='td'>
                                    <input type="email" name="email"
                                            value={user.email}
                                            onChange={handleChange}/>
                                </td>
                            </tr>

                            <tr>
                                <td className='td'>Password</td>    
                                <td className='td'>
                                    <input type="password" name="password"
                                            value={user.password}
                                            onChange={handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td className='td'>
                                    <button className='btn btn-primary'
                                            onClick={signIn}>
                                        Log in
                                    </button>
                                </td>
                                <td className='td'>
                                    <button className='btn btn-danger'
                                            onClick={clearBoxes}>
                                        Reset
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h6>{message}</h6>

                    <Link to={"/register"}>Click Here to Register</Link>
                    <br></br>
                    <Link to={"/rpwd/email"}>Forget Password</Link>
                </center>
            </div> </>)
}

export default Login;
