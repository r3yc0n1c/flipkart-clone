import Axios from 'axios'

const signup = (data)=>{
    Axios.post("/signup", data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response);
      })
}

const login = (data)=>{
  Axios.post("/login", data)
  .then((res)=>{
    console.log(res)
  })
  .catch((err)=> {
    console.log(err.response);
  })
}

const Auth = {signup, login}

export default Auth;