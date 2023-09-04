const  resetPasswordNavigator = async(email,navigate,setError) =>{
    debugger;
    // User id and email toTo be passed dynamatically
    var userObj = {
        "email":email
    }

await fetch('http://localhost:9999/otp/gtOtp', {
    
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
     body: JSON.stringify(userObj),
    })
      .then((response) => response.json())
      .then((data) => {
        debugger;
        //otp is valid send true
        console.log('Success:', data);
        console.log('Success:', data.result);
        if(data.result == "ok"){
            console.log("Response from server = > " + data.data.userid)
            navigate("/rpwd/otp",{ state: { userid: data.data.userid,email:data.data.email } });
        }else{
            console.log("Something went wrong!!!")
            setError("Please enter a valid email!!!")
        }
      })
      .catch((error) => {
        debugger;
        console.error('Error:', error);
  });

    
}


//-----------------------------------------------------------------------------------------------------
//check if otp entered by user is right or wrong
async function checkIfValidOtp(user,setOtp,navigate,setError) {
    //1. send the data userid,otp
    await fetch('http://localhost:9999/otp/', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
         body: JSON.stringify(user),
        })
          .then((response) => response.json())
          .then((data) => {
            //otp is valid send true
            console.log('Success:', data);
            console.log('Success:', data.result);
            if(data.result == "ok"){
                 navigate("/rpwd/reset",{ state: { userid: user.user_id } });
            }else{
                setOtp("");
                setError("Please enter a valid Otp!!!")
            }
            return true;   
          })
          .catch((error) => {
            //otp is not valid send false
            console.error('Error:', error);
            return false;
      });

}




//-----------------------------------------------------------------------------------------
// Function for updating changed password

async function ChangePassword(uid,np,navigate,setError) {
    //data to be passed
    var tempObj = {
            "userid":uid,
            "pwd":np
    }

     await fetch('http://localhost:9090/rpwd/', {
     method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
     body: JSON.stringify(tempObj),
    })
        .then((response) => response.json())
        .then((data) => {
            //getting result if password is changed
            console.log('Success:', data);
            if(data.result == "ok"){
                //navigate to home page
                navigate("/");
            }else{
                //something went wrong
                setError("Something went wrong please try again!!!")
            }
            
          })
          .catch((error) => {
            //otp is not valid send false
            console.error('Error:', error);
      });
}


//-----------------------------------------------------------------------------------------
export { resetPasswordNavigator,checkIfValidOtp,ChangePassword}