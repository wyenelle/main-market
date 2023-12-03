import { useState,useContext } from "react"

import { sign_in_user,sign_in_with_google_popup, sign_in_with_google_redirect, create_user_from_auth } from "../../utils/firebase"

import { Market_Context } from "../../context/auth-context"

import GoogleButton from 'react-google-button'

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
    <div className='h-screen  px-5 flex flex-col justify-center items-center'>
        <form action="" onSubmit={handleSubmit} className='h-5/6  w-full'>
            <div className="my-9 flex flex-col gap-2">
                <label htmlFor="email" className='font-semibold  text-xl'> Email</label>
                <input type="emsil" name="email" className="form-input" value={email} onChange={handleChange}   />
            </div>
            <div className="my-9 flex flex-col gap-2">
                <label htmlFor="" className='font-semibold  text-xl'> Password </label>
                <input type="password" name="password" className="form-input" value={password} onChange={handleChange}   />
            </div>
            <div className="flex flex-col justify-center gap-4">
                <button className="btn"> submit </button>
                <h3 className="font-light text-2xl text-center">OR</h3>
                <div className=" flex justify-center">
                    <GoogleButton onClick={google_sign_in}  />
                </div>
                {/* <button type='button' onClick={google_sign_in} > Sign In With Google</button> */}
            </div>
        </form>
    </div>
  )
}

export default SignIn