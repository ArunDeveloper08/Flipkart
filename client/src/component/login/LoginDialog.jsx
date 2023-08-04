import { Dialog, Box, TextField, Button, Typography, styled } from "@mui/material";
import { useState } from "react";
import { authenticateSignup, authenticateLogin } from "../../service/api";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";


const Componnent = styled(Box)`
height:80vh;
width:95vh;

`;

const Image = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:81%;
width:30%;
padding: 45px 35px;
& > p ,& > h5{
    color:white;
    font-weight:600;
}

`;

const Wrapper = styled(Box)`
display:flex;
flex-direction : column;
padding:25px 35px;
flex :1;
& > div, & > button, & > p{
    margin-top:20px ;
}

`;
const LoginButton = styled(Button)`
text-transform : none;
background : #dd500d;
color:white;
height:48px;
boredr-radius: 2px; 

`;
const RequestOTP = styled(Button)`
text-transform : none;
background : #fff;
color:#2874f0;
height:48px;
boredr-radius: 2px; 
box-shadow:0 2px 4px 0 rgb(0 0 0/20%); 

`;

const Text = styled(Typography)`
font-size:12px;
color:#878787;  
`;
const CreateAccount = styled(Typography)`
 font-size:14px;
 text-align:center;
 color:#2874f0;
 font-weight:600;
 cursor:pointer;
 `;

 const Error = styled(Typography)`
 font-size: 10px;
 color: #ff6161;
 line-height:0;
 margin-top:10px;
 font-weight:bold; 
    `
const accountInitialValues = {
    login: {
        view: "login",
        heading: "Login",
        subheading: "Get access to your orders, Wishlist and Recommendation  "
    },
    signup: {
        view: "signup",
        heading: "Looks like you're new here !",
        subheading: 'Singnup with your mobile number get started',
    }
}

const LoginDialog = ({ open, setOpen }) => {

    const {setAccount} = useContext(DataContext)
    const [account, toggleAccount] = useState(accountInitialValues.login);
    const [signup, setSignup] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        username: ""


    });
    const [login , setLogin]= useState({
        username:"",
        password:""
    })
const [error , setError]= useState()

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false)
    }
    const toggleSignup = () => {
      
        toggleAccount(accountInitialValues.signup)
    }
    const onInputChange = (e) => {

        setSignup({ ...signup, [e.target.name]: e.target.value })

    }
    const handleSubmit = async () => {
        // console.log(signup) 
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname)
    }

    const handleChange=(e)=>{
setLogin({...login,[e.target.name]:e.target.value})
    }

    const Login=async()=>{
        // console.log(login)
       let response = await authenticateLogin(login)
       console.log(response.data)
       if(response.status ===200){
        localStorage.setItem("accessToken", response?.data.accessToken);
        localStorage.setItem("refreshToken", response?.data.refreshToken);
        localStorage.setItem("username", response?.data.username);
        handleClose();
        console.log("response",response.data.firstname  )
        setAccount(response.data.name)
       }else(
        setError(true)
       )
      

    }
    return (
        <>
            <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: "unset" } }}>
                <Componnent>
                    <Box style={{ display: "flex", height: "100%" }}>
                        <Image>
                            <Typography variant="h5">{account.heading}</Typography>
                            <Typography style={{ marginTop: 20 }}>{account.subheading}</Typography>

                        </Image>

                        {
                            account.view === 'login' ? <Wrapper>
                                <TextField variant="standard" label="Enter Username" onChange={handleChange} name="username" />

                           {error &&  <Error>Please enter valid username or password</Error>}     
                                <TextField variant="standard" label="Enter Password" onChange={handleChange} name="password" />
                                <Text>By Continuing, you agree to Flipkart's  Terms of use and Privacy Policiy</Text>
                                <LoginButton onClick={Login} >Login</LoginButton>
                                <Typography style={{ textAlign: "center" }}>or</Typography>
                                <RequestOTP>Request OTP</RequestOTP>
                                <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                            </Wrapper>
                                :
                                <Wrapper>
                                    <TextField variant="standard" onChange={(e) => onInputChange(e)} label="Enter Firstname" name="firstname" />
                                    <TextField variant="standard" onChange={(e) => onInputChange(e)} label="Enter Lastname" name="lastname" />
                                    <TextField variant="standard" onChange={(e) => onInputChange(e)} label="Enter Username" name="username" />
                                    <TextField variant="standard" onChange={(e) => onInputChange(e)} label="Enter Email" name="email" />
                                    <TextField variant="standard" onChange={(e) => onInputChange(e)} label="Enter Password" name="password" />
                                    <TextField variant="standard" onChange={(e) => onInputChange(e)} label="Enter Phone" name="phone" />

                                    <LoginButton onClick={handleSubmit}>Continue</LoginButton>

                                </Wrapper>
                        }

                    </Box>
                </Componnent>


            </Dialog>
        </>
    )

}
export default LoginDialog;