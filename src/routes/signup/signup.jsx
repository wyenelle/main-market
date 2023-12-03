import { useState } from 'react'

import { useContext } from 'react'
import { Market_Context } from '../../context/auth-context'

import './signup.css'


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

import { create_user_from_email_and_password,create_user_from_auth } from '../../utils/firebase'
import { MdImportExport } from 'react-icons/md'
 
const SignUp = () => {
  const [formField,setFormField] = useState(defaultFormFields)
  const {displayName,email,password,confirmPassword} = formField
  
  const {loggedInUser,setLoggedInUser} = useContext(Market_Context)

  // this function handles changes in the form field
  const handleChange = event => {
    const {name,value} = event.target
    setFormField({...formField,[name] : value})
  }

  // this function handles what happens when the form has been submitted
  const handleSubmit = async (event) => {
    event.preventDefault()

    // confirm if password matches onSubmit
    if(password !== confirmPassword){
        alert('passwords do not match')
        return
    }
    try{
      const {user} = await create_user_from_email_and_password(email,password)
      // console.log(user);

      setLoggedInUser(user)

      //  create a reference of the user on the database
      await create_user_from_auth(user,displayName)
      
    } catch(err){
      if(err.code === 'auth/email-already-in-use'){
        alert('user has an account already.Try logging in')
      } 
      else{
        console.log(err.message);
      }
    }
  }


  return (
    <div className='sign-up-container h-screen  px-5 flex flex-col justify-center items-center'>
        <form onSubmit={handleSubmit} className='h-5/6  w-full'>
        <h1 className='header-text mb-6'>Welcome back</h1>
          <div className=' my-9 flex flex-col gap-2'>
          <label htmlFor="displayName" className='font-semibold  text-xl'> Display Name</label>
            <input type="text" id='displayName' name='displayName' className='form-input' value={displayName} onChange={handleChange}/>
          </div>

          <div className=' my-9 flex flex-col gap-2 '>
          <label htmlFor="email" className='font-semibold  text-xl'>Email</label>
            <input type="text" id='email' name='email' className='form-input' value={email} onChange={handleChange}/>
          </div>

          <div className=' my-9 flex flex-col gap-2 '>
          <label htmlFor="password" className='font-semibold  text-xl'> Password</label>
            <input type="text" id='password' name='password' className='form-input' value={password} onChange={handleChange}/>
          </div>

          <div className=' my-9 flex flex-col gap-2'>
          <label htmlFor="confirmPassword" className='font-semibold  text-xl'> Confirm Password</label>
            <input type="text" id='confirmPassword' name='confirmPassword' className='form-input' value={confirmPassword} onChange={handleChange}/>
          </div>


          <button className='btn ' type='submit'> Submit</button>
        </form>
    </div>
  )
}

export default SignUp