import { useState,useContext } from "react"

import { sign_in_user,sign_in_with_google_popup, sign_in_with_google_redirect, create_user_from_auth } from "../../utils/firebase"

import { Market_Context } from "../../context/context"

const defaultState = {
    email: '', password: ''
}

const SignIn = () => {
    const [formField,setFormField] = useState(defaultState)
    const {email,password} = formField

    const {loggedInUser,setLoggedInUser} = useContext(Market_Context)
    
  // check for current viewport size
    const inner_width = window.innerWIdth >= 500

    // track changes in the input element
    const handleChange = (event) => {
        const {name,value} = event.target
        setFormField({...formField, [name] : value})
    }

    // users can either sign in with google  popup window or be redirected to a new page depending ont eh type of 
    // device thry are browsing from
    const google_sign_in = async (e) => {
        e.preventDefault()
        try{
          const {user} =   await sign_in_with_google_popup()  
          await create_user_from_auth(user)
            setLoggedInUser(user)
        //   : await sign_in_with_google_redirect()
        } catch(err){
            console.log(err.code);
        }
    }
    

    // handles the submission of the form
    const handleSubmit = async (event) => {
        event.preventDefault()
        if(!email || !password) {
        alert('some details are missing')
        return 
        }
        try{
            const result = await sign_in_user(email,password)
            // update the context
            setLoggedInUser(result)
            
            setFormField(defaultState)
        } catch(err){
           switch(err.code){
            case 'auth/network-request-failed':
                alert('no internet connection established')
                break;
            case 'auth/invalid-login-credentials':
                alert('no user found ')
                break;
            case 'auth/wrong-password':
                alert('incorrect password for email')
                break;
            case 'auth/user-not-found':
                alert('no user associated with this email')
                break;
            default:
                console.log(err.code)
           }
        }
    }
    
    console.log(loggedInUser);


  return (
    <form action="" onSubmit={handleSubmit}>
        <div className="form-input">
            <label htmlFor="email"> Email</label>
            <input type="emsil" name="email" value={email} onChange={handleChange}   />
        </div>
        <div className="form-input">
            <label htmlFor=""> Password </label>
            <input type="password" name="password" value={password} onChange={handleChange}   />
        </div>
        <div className="buttons-container">
            <button> submit </button>
            <button type='button' onClick={google_sign_in} > Sign In With Google</button>
        </div>
    </form>
  )
}

export default SignIn